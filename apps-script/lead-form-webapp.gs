/**
 * Suraj Automation (surajdx.com) — Lead Form Web App Endpoint
 * Deploy as Google Apps Script Web App (Execute as: Me, Who has access: Anyone)
 *
 * SECURITY SETUP (Script Properties only — never hardcode keys here):
 * 1. NOTIFY_EMAIL        -> Your Gmail address (e.g. suraj.gasdeveloper@gmail.com)
 * 2. SHEET_NAME          -> Tab name (default: Leads)
 * 3. GUPSHUP_API_KEY     -> Optional Gupshup WhatsApp API key
 * 4. GUPSHUP_SOURCE      -> Optional Gupshup source WhatsApp number
 * 5. ADMIN_WHATSAPP      -> Optional your WhatsApp number with country code (918851666208)
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);

    var params = (e && e.parameter) ? e.parameter : {};
    var name = sanitize_(params.name, 120);
    var businessType = sanitize_(params.businessType, 120);
    var phone = sanitize_(params.phone, 30);
    var problem = sanitize_(params.problem, 1000);
    var source = sanitize_(params.source || 'surajdx.com', 80);
    var honeypot = (params.honeypot || '').trim();

    // 1. Silent honeypot rejection for bots
    if (honeypot !== '') {
      return jsonResponse_({ ok: true, status: 'accepted' });
    }

    // 2. Basic field validation
    var digitsOnly = phone.replace(/\D/g, '');
    if (!name || !businessType || digitsOnly.length < 10 || !problem) {
      return jsonResponse_({ ok: false, error: 'Missing required fields' });
    }

    // 3. Basic per-phone rate limit via CacheService (5 minutes)
    var cache = CacheService.getScriptCache();
    var rateKey = 'lead_' + digitsOnly.slice(-10);
    if (cache.get(rateKey)) {
      return jsonResponse_({ ok: false, error: 'Duplicate submission within cooldown' });
    }
    cache.put(rateKey, '1', 300);

    // 4. Append safely to isolated Leads Google Sheet
    var props = PropertiesService.getScriptProperties();
    var sheetName = props.getProperty('SHEET_NAME') || 'Leads';
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      sheet.appendRow(['Timestamp', 'Name', 'Business Type', 'Phone', 'Problem', 'Source', 'Status']);
      sheet.setFrozenRows(1);
    }

    var timestamp = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyy-MM-dd HH:mm:ss');
    sheet.appendRow([timestamp, name, businessType, phone, problem, source, 'New']);

    // 5. Email notification to founder
    var notifyEmail = props.getProperty('NOTIFY_EMAIL');
    if (notifyEmail) {
      MailApp.sendEmail({
        to: notifyEmail,
        subject: '[surajdx.com Lead] ' + name + ' (' + businessType + ')',
        body:
          'New consultation lead received:\n\n' +
          'Time (IST): ' + timestamp + '\n' +
          'Name: ' + name + '\n' +
          'Business: ' + businessType + '\n' +
          'Phone: ' + phone + '\n' +
          'Problem: ' + problem + '\n' +
          'Source: ' + source + '\n\n' +
          'WhatsApp direct link: https://wa.me/' + (digitsOnly.length === 10 ? '91' + digitsOnly : digitsOnly)
      });
    }

    // 6. Optional Gupshup WhatsApp notification (if configured in Script Properties)
    var gupshupKey = props.getProperty('GUPSHUP_API_KEY');
    var gupshupSource = props.getProperty('GUPSHUP_SOURCE');
    var adminWa = props.getProperty('ADMIN_WHATSAPP');
    if (gupshupKey && gupshupSource && adminWa) {
      UrlFetchApp.fetch('https://api.gupshup.io/wa/api/v1/msg', {
        method: 'post',
        headers: { apikey: gupshupKey },
        payload: {
          channel: 'whatsapp',
          source: gupshupSource,
          destination: adminWa,
          'src.name': 'SurajAutomation',
          message: JSON.stringify({
            type: 'text',
            text: 'New Lead (' + source + '): ' + name + ' | ' + businessType + ' | ' + phone + ' | ' + problem.slice(0, 140)
          })
        },
        muteHttpExceptions: true
      });
    }

    return jsonResponse_({ ok: true, status: 'saved' });
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err) });
  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}

function sanitize_(val, maxLen) {
  if (!val) return '';
  var s = String(val).trim();
  // Prevent Google Sheets formula injection
  if (/^[=+\-@]/.test(s)) {
    s = "'" + s;
  }
  return s.slice(0, maxLen);
}

function jsonResponse_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
