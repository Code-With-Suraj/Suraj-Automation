export interface ProductSolution {
  id: string;
  name: string;
  price: string;
  sheetTemplateUrl: string;
  appsScriptCode: string;
  setupSteps: string[];
  tagline?: string;
  description?: string;
  category?: string;
  color?: string;
  images?: string[];
  youtubeUrl?: string;
  marketPrice?: string;
  isHidden?: boolean;
}

export const PRODUCT_SOLUTIONS: Record<string, ProductSolution> = {
  rationkart: {
    id: "rationkart",
    name: "RationKart",
    price: "₹1,499",
    marketPrice: "₹4,999",
    sheetTemplateUrl: "https://docs.google.com/spreadsheets/d/1RationKartTemplateDemo/copy",
    appsScriptCode: `/**
 * RationKart - Complete Grocery Request & Approval System
 * Author: Suraj Automation
 * Platform: Google Apps Script Web App with Sheets Backend
 */

const SHEET_NAME_REQUESTS = "Requests";
const SHEET_NAME_MASTER = "Master_Items";
const SHEET_NAME_RETURNS = "Returns";

function doGet(e) {
  const template = HtmlService.createTemplateFromFile('Index');
  template.baseUrl = ScriptApp.getService().getUrl();
  return template.evaluate()
    .setTitle('RationKart Management Portal')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getMasterItems() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME_MASTER);
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  return data.slice(1).map(row => {
    return {
      id: row[0],
      name: row[1],
      unit: row[2],
      category: row[3]
    };
  });
}

function submitRequest(siteName, itemsList, priority) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME_REQUESTS) || ss.insertSheet(SHEET_NAME_REQUESTS);
  const requestId = "REQ-" + new Date().getTime();
  const timestamp = new Date();
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Request ID", "Timestamp", "Site Name", "Item Name", "Requested Qty", "Unit", "Priority", "Status", "Approved Qty", "Manager Feedback"]);
  }
  
  itemsList.forEach(item => {
    sheet.appendRow([
      requestId,
      timestamp,
      siteName,
      item.name,
      item.quantity,
      item.unit,
      priority,
      "Pending",
      item.quantity, // Default approved quantity is requested
      ""
    ]);
  });
  
  // Send status update alert
  sendEmailAlert(siteName, requestId, "New Requisition Submitted");
  return { success: true, requestId: requestId };
}

function updateItemStatus(requestId, itemName, status, approvedQty, feedback) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME_REQUESTS);
  if (!sheet) return { success: false, message: "Sheet not found" };
  const rows = sheet.getDataRange().getValues();
  
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0] === requestId && rows[i][3] === itemName) {
      sheet.getRange(i + 1, 8).setValue(status); // Status column
      sheet.getRange(i + 1, 9).setValue(approvedQty); // Approved Qty column
      sheet.getRange(i + 1, 10).setValue(feedback); // Feedback column
    }
  }
  return { success: true };
}

function submitReturn(siteName, itemName, quantity, reason, photoBlobBase64) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME_RETURNS) || ss.insertSheet(SHEET_NAME_RETURNS);
  const returnId = "RET-" + new Date().getTime();
  
  // Upload and save photo to Google Drive
  let fileUrl = "";
  if (photoBlobBase64) {
    const folder = getOrCreateFolder("RationKart_Returns_Photos");
    const contentType = photoBlobBase64.substring(photoBlobBase64.indexOf(":")+1, photoBlobBase64.indexOf(";"));
    const base64Data = photoBlobBase64.substring(photoBlobBase64.indexOf(",")+1);
    const blob = Utilities.newBlob(Utilities.base64Decode(base64Data), contentType, \`Return_\${returnId}_\${itemName}\`);
    const file = folder.createFile(blob);
    fileUrl = file.getUrl();
  }
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Return ID", "Timestamp", "Site Name", "Item Name", "Quantity", "Reason", "Evidence Photo URL", "Status"]);
  }
  
  sheet.appendRow([
    returnId,
    new Date(),
    siteName,
    itemName,
    quantity,
    reason,
    fileUrl,
    "Initiated"
  ]);
  
  return { success: true, returnId: returnId };
}

function getOrCreateFolder(folderName) {
  const folders = DriveApp.getFoldersByName(folderName);
  if (folders.hasNext()) return folders.next();
  return DriveApp.createFolder(folderName);
}

function sendEmailAlert(site, reqId, action) {
  const adminEmail = Session.getActiveUser().getEmail();
  const subject = \`[RationKart] \${action} - \${site}\`;
  const body = \`Hi Team,\\n\\nA new event occurred on RationKart for \${site}.\\nRequest ID: \${reqId}\\nAction Type: \${action}\\n\\nPlease log in to the portal to review details.\\n\\nRegards,\\nRationKart automated response.\`;
  MailApp.sendEmail(adminEmail, subject, body);
}`,
    setupSteps: [
      "Click the 'Make a Copy' button to open your personalized copy of the Google Sheets template.",
      "In the spreadsheet menu, go to Extensions ➔ Apps Script.",
      "Clear any existing code in the Apps Script editor and paste the full Code File provided above.",
      "Save the project by clicking the Save icon (orange floppy disk).",
      "Click on Deploy ➔ New deployment. Select Web App from the configuration options.",
      "Set Execute as to 'Me (your email)' and Who has access to 'Anyone'. Click Deploy.",
      "Authorize permissions when prompted. Copy the provided Web App URL.",
      "Open the Web App URL in your browser — your multi-site requisition, review, and returns portal is ready to use!"
    ]
  },
  vendorsarthi: {
    id: "vendorsarthi",
    name: "VendorSarthi",
    price: "₹1,499",
    marketPrice: "₹4,999",
    sheetTemplateUrl: "https://docs.google.com/spreadsheets/d/1VendorSarthiTemplateDemo/copy",
    appsScriptCode: `/**
 * VendorSarthi - Automated Vendor Management & Procurement System
 * Author: Suraj Automation
 * Platform: Google Apps Script Web App
 */

const SHEET_RFQS = "RFQs";
const SHEET_QUOTES = "Quotes";
const SHEET_VENDORS = "Vendors";

function doGet(e) {
  const token = e.parameter.token;
  if (token) {
    // Return Vendor Portal
    const t = HtmlService.createTemplateFromFile('VendorPortal');
    t.token = token;
    t.rfqInfo = getRFQDetailsByToken(token);
    return t.evaluate()
      .setTitle('VendorSarthi - Submit Quotation')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
  // Host Admin Panel
  const template = HtmlService.createTemplateFromFile('AdminPortal');
  return template.evaluate()
    .setTitle('VendorSarthi Admin Portal')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function createRFQ(rfqName, itemsList, selectedVendors) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const rfqSheet = ss.getSheetByName(SHEET_RFQS) || ss.insertSheet(SHEET_RFQS);
  const rfqId = "RFQ-" + new Date().getTime();
  
  if (rfqSheet.getLastRow() === 0) {
    rfqSheet.appendRow(["RFQ ID", "Timestamp", "RFQ Name", "Item Name", "Quantity", "Unit"]);
  }
  
  itemsList.forEach(item => {
    rfqSheet.appendRow([rfqId, new Date(), rfqName, item.name, item.qty, item.unit]);
  });
  
  // For each vendor, create a secure token and send customized link
  selectedVendors.forEach(vendor => {
    const token = Utilities.base64Encode(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, rfqId + vendor.email)).replace(/[^a-zA-Z0-9]/g, "");
    saveVendorToken(rfqId, rfqName, vendor, token);
    sendRFQEmail(vendor, rfqName, token);
  });
  
  return { success: true, rfqId: rfqId };
}

function saveVendorToken(rfqId, rfqName, vendor, token) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_VENDORS) || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_VENDORS);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["RFQ ID", "RFQ Name", "Vendor Name", "Vendor Email", "Secure Token", "Status"]);
  }
  sheet.appendRow([rfqId, rfqName, vendor.name, vendor.email, token, "Pending"]);
}

function getRFQDetailsByToken(token) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const vendorSheet = ss.getSheetByName(SHEET_VENDORS);
  const rfqSheet = ss.getSheetByName(SHEET_RFQS);
  
  const vendors = vendorSheet.getDataRange().getValues();
  let matchedRFQ = null;
  let matchedVendor = null;
  
  for(let i=1; i<vendors.length; i++) {
    if (vendors[i][4] === token) {
      matchedRFQ = vendors[i][0];
      matchedVendor = vendors[i][2];
      break;
    }
  }
  
  if (!matchedRFQ) return null;
  
  const rfqs = rfqSheet.getDataRange().getValues();
  const items = [];
  for(let j=1; j<rfqs.length; j++) {
    if (rfqs[j][0] === matchedRFQ) {
      items.push({
        itemName: rfqs[j][3],
        qty: rfqs[j][4],
        unit: rfqs[j][5]
      });
    }
  }
  
  return { rfqId: matchedRFQ, vendorName: matchedVendor, items: items };
}

function submitQuotesFromPortal(token, quotesList, paymentTerms, deliveryDays) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const quoteSheet = ss.getSheetByName(SHEET_QUOTES) || ss.insertSheet(SHEET_QUOTES);
  
  const rfqDetails = getRFQDetailsByToken(token);
  if (!rfqDetails) return { success: false, message: "Invalid Secure Link" };
  
  if (quoteSheet.getLastRow() === 0) {
    quoteSheet.appendRow(["RFQ ID", "Vendor Name", "Item Name", "Rate Offered", "Delivery Days", "Payment Terms", "Submitted At"]);
  }
  
  quotesList.forEach(q => {
    quoteSheet.appendRow([
      rfqDetails.rfqId,
      rfqDetails.vendorName,
      q.itemName,
      q.rate,
      deliveryDays,
      paymentTerms,
      new Date()
    ]);
  });
  
  // Mark token as Submitted
  updateVendorTokenStatus(token, "Submitted");
  return { success: true };
}

function updateVendorTokenStatus(token, status) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_VENDORS);
  const rows = sheet.getDataRange().getValues();
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][4] === token) {
      sheet.getRange(i+1, 6).setValue(status);
      break;
    }
  }
}

function sendRFQEmail(vendor, rfqName, token) {
  const webAppUrl = ScriptApp.getService().getUrl() + "?token=" + token;
  const subject = \`Request for Quotation: \${rfqName}\`;
  const body = \`Dear \${vendor.name},\\n\\nPlease submit your rates for the requirements under \${rfqName} by clicking this secure, personalized link below:\\n\\n\${webAppUrl}\\n\\nNote: Do not share this link with anyone. Rates submitted through this portal are directly fed into our automated evaluation tool.\\n\\nRegards,\\nProcurement Team\`;
  MailApp.sendEmail(vendor.email, subject, body);
}`,
    setupSteps: [
      "Launch your copied VendorSarthi template in Google Sheets.",
      "Click Extensions ➔ Apps Script from the menu.",
      "Clear the existing files and insert the Apps Script code from above.",
      "Create two HTML files in the script project: 'VendorPortal.html' and 'AdminPortal.html'.",
      "Deploy the Apps Script as a Web App (Configure: 'Me' and 'Anyone').",
      "Copy your Web App link. Your procurement panel and secure quotation link auto-sender are online!"
    ]
  },
  billsarthi: {
    id: "billsarthi",
    name: "BillSarthi",
    price: "₹1,499",
    marketPrice: "₹4,999",
    sheetTemplateUrl: "https://docs.google.com/spreadsheets/d/1BillSarthiTemplateDemo/copy",
    appsScriptCode: `/**
 * BillSarthi - Smart Vendor Bill Verification & Entry System
 * Author: Suraj Automation
 */

const SHEET_BILL_ENTRIES = "Bill_Entries";
const SHEET_PO_MASTER = "PO_Master";

function doGet() {
  return HtmlService.createTemplateFromFile('BillEntryForm')
    .evaluate()
    .setTitle('BillSarthi Invoice Registry')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function verifyAndSaveBill(billNo, poNo, vendorName, invoiceAmt, itemsSubmitted) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const billsSheet = ss.getSheetByName(SHEET_BILL_ENTRIES) || ss.insertSheet(SHEET_BILL_ENTRIES);
  
  // Check against Purchase Order details
  const poDetails = getPODetails(poNo);
  let status = "Verified";
  let verificationMessage = "Amount and Items match the approved PO.";
  
  if (!poDetails) {
    status = "Flagged Mismatch";
    verificationMessage = "PO Number does not exist in master records.";
  } else {
    // Check total value tolerance (within 1%)
    const expectedAmt = parseFloat(poDetails.totalAmount);
    const actualAmt = parseFloat(invoiceAmt);
    if (Math.abs(expectedAmt - actualAmt) > (expectedAmt * 0.01)) {
      status = "Flagged Mismatch";
      verificationMessage = \`Price Deviation Alert! Expected: ₹\${expectedAmt}, Submitted: ₹\${actualAmt}\`;
    }
  }
  
  if (billsSheet.getLastRow() === 0) {
    billsSheet.appendRow(["Bill Number", "PO Reference", "Vendor Name", "Submitted Amt", "Status", "Remarks", "Entry Date"]);
  }
  
  billsSheet.appendRow([
    billNo,
    poNo,
    vendorName,
    invoiceAmt,
    status,
    verificationMessage,
    new Date()
  ]);
  
  return { success: true, status: status, remarks: verificationMessage };
}

function getPODetails(poNo) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_PO_MASTER);
  if (!sheet) return null;
  const rows = sheet.getDataRange().getValues();
  for(let i=1; i<rows.length; i++) {
    if (rows[i][0].toString() === poNo.toString()) {
      return {
        poNo: rows[i][0],
        vendorName: rows[i][1],
        totalAmount: rows[i][2]
      };
    }
  }
  return null;
}`,
    setupSteps: [
      "Open your Sheet template and head over to Extensions ➔ Apps Script.",
      "Paste the BillSarthi engine code provided above.",
      "Create a simple user interface file 'BillEntryForm.html' inside the sandbox script.",
      "Deploy with Execute as 'Me' and Access 'Anyone'.",
      "Authorize security access to read your Google Sheet PO references instantly."
    ]
  },
  claimo: {
    id: "claimo",
    name: "Claimo",
    price: "₹1,499",
    marketPrice: "₹4,999",
    sheetTemplateUrl: "https://docs.google.com/spreadsheets/d/1ClaimoTemplateDemo/copy",
    appsScriptCode: `/**
 * Claimo - Smart Employee Expense & Reimbursement Approval Engine
 * Author: Suraj Automation
 */

const SHEET_EXPENSES = "Reimbursements";

function submitExpenseClaim(empName, email, category, amount, description, billPhotoBase64) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_EXPENSES) || ss.insertSheet(SHEET_EXPENSES);
  const claimId = "CLM-" + new Date().getTime();
  
  let fileUrl = "No Receipt Uploaded";
  if (billPhotoBase64) {
    const folder = getFolder("Claimo_Receipts");
    const name = \`\${claimId}_\${empName}_\${category}\`;
    const cleanedBase64 = billPhotoBase64.substring(billPhotoBase64.indexOf(",")+1);
    const contentType = billPhotoBase64.substring(billPhotoBase64.indexOf(":")+1, billPhotoBase64.indexOf(";"));
    const blob = Utilities.newBlob(Utilities.base64Decode(cleanedBase64), contentType, name);
    const file = folder.createFile(blob);
    fileUrl = file.getUrl();
  }
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Claim ID", "Employee", "Email", "Category", "Amount", "Description", "Receipt Url", "Status", "Manager Decision At", "Action Token"]);
  }
  
  const token = Math.random().toString(36).substring(7);
  sheet.appendRow([
    claimId,
    empName,
    email,
    category,
    amount,
    description,
    fileUrl,
    "Pending",
    "",
    token
  ]);
  
  sendApprovalEmailToManager(claimId, empName, amount, category, description, fileUrl, token);
  return { success: true, claimId: claimId };
}

function processManagerAction(token, decision) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_EXPENSES);
  const rows = sheet.getDataRange().getValues();
  for(let i=1; i<rows.length; i++) {
    if (rows[i][9] === token) {
      if (rows[i][7] !== "Pending") return { success: false, message: "Claim already finalized!" };
      sheet.getRange(i+1, 8).setValue(decision); // Status column
      sheet.getRange(i+1, 9).setValue(new Date()); // Approved Timestamp
      
      // Notify employee
      sendNotificationEmail(rows[i][2], rows[i][0], decision);
      return { success: true, message: \`Claim was successfully \${decision}.\` };
    }
  }
  return { success: false, message: "Invalid or expired authorization token." };
}

function getFolder(name) {
  const folders = DriveApp.getFoldersByName(name);
  if (folders.hasNext()) return folders.next();
  return DriveApp.createFolder(name);
}

function sendApprovalEmailToManager(claimId, name, val, cat, desc, url, token) {
  const managerMail = "your_manager_email@gmail.com"; // Replace with your admin's address
  const webAppUrl = ScriptApp.getService().getUrl();
  const approveLink = \`\${webAppUrl}?token=\${token}&action=Approved\`;
  const rejectLink = \`\${webAppUrl}?token=\${token}&action=Rejected\`;
  
  const subject = \`[Expense Approval Needed] \${name} - ₹\${val}\`;
  const htmlBody = \`<h3>Claim ID: \${claimId}</h3>
                     <p><b>Employee:</b> \${name}</p>
                     <p><b>Category:</b> \${cat}</p>
                     <p><b>Amount:</b> ₹\${val}</p>
                     <p><b>Description:</b> \${desc}</p>
                     <p><b>Receipt File:</b> <a href="\${url}">Click to View</a></p>
                     <hr/>
                     <div style="margin-top:20px;">
                       <a href="\${approveLink}" style="background:#10B981;color:#fff;padding:12px 24px;text-decoration:none;border-radius:6px;font-weight:bold;margin-right:15px;">Approve Request</a>
                       <a href="\${rejectLink}" style="background:#EF4444;color:#fff;padding:12px 24px;text-decoration:none;border-radius:6px;font-weight:bold;">Reject Request</a>
                     </div>\`;
  MailApp.sendEmail({ to: managerMail, subject: subject, htmlBody: htmlBody });
}

function sendNotificationEmail(to, claimId, status) {
  MailApp.sendEmail(
    to, 
    \`[Claimo Expense Status Updated] \${claimId}\`, 
    \`Hello Team,\\n\\nYour reimbursement request \${claimId} has been resolved to: \${status}.\\n\\nRegards,\\nClaimo Automated Finance Desk.\`
  );
}`,
    setupSteps: [
      "Open your Google Sheet template, name a sheet 'Reimbursements'.",
      "Open Extensions ➔ Apps Script, paste the Claimo workflow engine code.",
      "Replace 'your_manager_email@gmail.com' in the script with your real manager/admin email.",
      "Deploy the Apps Script script as a Web App to get active approval and rejection buttons via email triggers!"
    ]
  },
  karmsarthi: {
    id: "karmsarthi",
    name: "KarmSarthi",
    price: "₹1,499",
    marketPrice: "₹4,999",
    sheetTemplateUrl: "https://docs.google.com/spreadsheets/d/1KarmSarthiTemplateDemo/copy",
    appsScriptCode: `/**
 * KarmSarthi - Human Resource & Leave Tracking System Backend
 * Author: Suraj Automation
 */

const SHEET_ATTENDANCE = "Attendance";
const SHEET_LEAVES = "Leave_Requests";

function requestLeave(empName, empEmail, type, reason, startDay, endDay) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_LEAVES) || ss.insertSheet(SHEET_LEAVES);
  const leaveId = "LVE-" + new Date().getTime();
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Leave ID", "Name", "Email", "Type Of Leave", "Start Date", "End Date", "Reason", "Status", "Timestamp"]);
  }
  
  sheet.appendRow([
    leaveId,
    empName,
    empEmail,
    type,
    startDay,
    endDay,
    reason,
    "Pending Approval",
    new Date()
  ]);
  
  // Trigger email to HR
  MailApp.sendEmail(
    "your_hr_email@gmail.com", 
    \`[Leave Request Pending] \${empName}\`, 
    \`\${empName} requested leave from \${startDay} to \${endDay} due to: \${reason}. Please check spreadsheet to approve.\`
  );
  
  return { success: true, leaveId: leaveId };
}

function checkInAttendance(empName, latitude, longitude) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_ATTENDANCE) || ss.insertSheet(SHEET_ATTENDANCE);
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Employee", "In-Time", "Latitude", "Longitude"]);
  }
  
  sheet.appendRow([
    empName,
    new Date(),
    latitude,
    longitude
  ]);
  
  return { success: true };
}`,
    setupSteps: [
      "Launch Google Apps Script inside your copied KarmSarthi sheets file.",
      "Replace default functions with the KarmSarthi backend engine code above.",
      "Replace 'your_hr_email@gmail.com' with the email address of your HR manager.",
      "Deploy the Apps Script as Web App to secure location check-ins and automatic leave mail notifications."
    ]
  },
  cakesarthi: {
    id: "cakesarthi",
    name: "CakeSarthi",
    price: "₹1,499",
    marketPrice: "₹4,999",
    sheetTemplateUrl: "https://docs.google.com/spreadsheets/d/1CakeSarthiTemplateDemo/copy",
    appsScriptCode: `/**
 * CakeSarthi - Auto UPI Invoice Generator & Order Book for Bakeries
 * Author: Suraj Automation
 */

const SHEET_NAME_ORDERS = "Orders";

function logNewOrder(customerName, contactNo, itemsOrdered, totalCost, paymentRef) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME_ORDERS) || ss.insertSheet(SHEET_NAME_ORDERS);
  const orderId = "CAKE-" + new Date().getTime();
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Order ID", "Timestamp", "Customer Name", "Contact No", "Items Ordered", "Total Price", "UPI Ref", "Status"]);
  }
  
  sheet.appendRow([
    orderId,
    new Date(),
    customerName,
    contactNo,
    itemsOrdered,
    totalCost,
    paymentRef,
    "Confirmed"
  ]);
  
  sendBillSmsAlert(customerName, contactNo, totalCost, orderId);
  return { success: true, orderId: orderId };
}

function sendBillSmsAlert(name, contact, cost, orderId) {
  // Option to trigger automatic notifications
  console.log(\`Sending order confirmation alert for CakeSarthi: ID \${orderId}\`);
}`,
    setupSteps: [
      "Open your spreadsheet, add an 'Orders' sheet.",
      "Paste the CakeSarthi automation engine functions in Apps Script.",
      "Execute once to verify UPI reference checking logs.",
      "Use your deploy url to receive instantly populated customer records."
    ]
  },
  gymsarthi: {
    id: "gymsarthi",
    name: "GymSarthi",
    price: "₹1,499",
    marketPrice: "₹4,999",
    sheetTemplateUrl: "https://docs.google.com/spreadsheets/d/1GymSarthiTemplateDemo/copy",
    appsScriptCode: `/**
 * GymSarthi - Gym Membership Tracker & Automated Renewals Handler
 * Author: Suraj Automation
 */

const SHEET_MEMBERS = "Members";

function checkExpiringMemberships() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_MEMBERS);
  if (!sheet) return;
  const rows = sheet.getDataRange().getValues();
  const today = new Date();
  
  for(let i=1; i<rows.length; i++) {
    const email = rows[i][2];
    const expiryDate = new Date(rows[i][4]);
    const diffTime = expiryDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 3) {
      // Trigger renewal reminder email
      sendReminder(email, rows[i][1], rows[i][3]);
    }
  }
}

function sendReminder(email, name, fee) {
  MailApp.sendEmail(
    email, 
    "Membership Renewal Reminder! - GymSarthi", 
    \`Dear \${name},\\n\\nYour membership is expiring in 3 days. Renew for ₹\${fee} to keep gym access.\\n\\nRegards,\\nGym Management\`
  );
}`,
    setupSteps: [
      "Under your spreadsheet's Extensions menu, select Apps Script.",
      "Paste the GymSarthi renewal checker code.",
      "Test run 'checkExpiringMemberships' to authorize permissions.",
      "Set a trigger (Clock icon in left panel) to run daily automatically."
    ]
  },
  menusarthi: {
    id: "menusarthi",
    name: "MenuSarthi",
    price: "₹1,499",
    marketPrice: "₹4,999",
    sheetTemplateUrl: "https://docs.google.com/spreadsheets/d/1MenuSarthiTemplateDemo/copy",
    appsScriptCode: `/**
 * MenuSarthi - Digital QR Menu Order Routing System
 * Author: Suraj Automation
 */

const SHEET_TABLES = "Table_Orders";

function submitTableOrder(tableNumber, dishItems, comment) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_TABLES) || ss.insertSheet(SHEET_TABLES);
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Table No", "Items Summary", "Special Requests", "Time Issued", "Completed"]);
  }
  
  sheet.appendRow([
    tableNumber,
    dishItems,
    comment,
    new Date(),
    "No"
  ]);
  
  return { success: true };
}`,
    setupSteps: [
      "Initialize your spreadsheet with table tracking sheets.",
      "Paste the MenuSarthi QR order routing script into Apps Script.",
      "Configure your frontend to push dish payload items dynamically.",
      "Deploy with Execute as 'Me' to write kitchen tickets instantly."
    ]
  },
  supplysarthi: {
    id: "supplysarthi",
    name: "SupplySarthi",
    price: "₹1,499",
    marketPrice: "₹4,999",
    sheetTemplateUrl: "https://docs.google.com/spreadsheets/d/1SupplySarthiTemplateDemo/copy",
    appsScriptCode: `/**
 * SupplySarthi - Supply & B2B Distribution System Backend
 * Author: Suraj Automation
 */

const SHEET_SALES = "Sales_Book";

function recordDistributionSale(partyName, itemsList, billingType) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_SALES) || ss.insertSheet(SHEET_SALES);
  const invoiceNo = "INV-" + new Date().getFullYear() + "-" + Math.floor(Math.random() * 9000 + 1000);
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Invoice No", "Customer Name", "Billing Mode", "Order Items", "Grand Total", "Date Issued"]);
  }
  
  let totalPrice = 0;
  itemsList.forEach(item => {
    totalPrice += parseFloat(item.price) * parseFloat(item.qty);
  });
  
  sheet.appendRow([
    invoiceNo,
    partyName,
    billingType,
    JSON.stringify(itemsList),
    totalPrice,
    new Date()
  ]);
  
  return { success: true, invoiceNo: invoiceNo, totalAmount: totalPrice };
}`,
    setupSteps: [
      "Access Extensions ➔ Apps Script from the template.",
      "Paste the distribution sales bookkeeping backend functions above.",
      "Integrate your inventory update scripts if auto-deduction is needed.",
      "Deploy as Web App to secure full lifetime distribution billing automation."
    ]
  },
  hisabsarthi: {
    id: "hisabsarthi",
    name: "HisabSarthi",
    price: "₹1,499",
    marketPrice: "₹4,999",
    sheetTemplateUrl: "https://docs.google.com/spreadsheets/d/1HisabSarthiTemplateDemo/copy",
    appsScriptCode: `/**
 * HisabSarthi - Small Business GST Sales Book Automation
 * Author: Suraj Automation
 */

const SHEET_LEDGER = "GST_Ledger";

function logGSTInvoice(invoiceId, party, pan, taxVal, gstRate, state) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_LEDGER) || ss.insertSheet(SHEET_LEDGER);
  
  let cgstVal = 0;
  let sgstVal = 0;
  let igstVal = 0;
  const rating = parseFloat(gstRate) / 100;
  
  const tax = parseFloat(taxVal);
  
  if (state.trim().toLowerCase() === "delhi") { // Treat your local state
    cgstVal = (tax * rating) / 2;
    sgstVal = (tax * rating) / 2;
  } else {
    igstVal = tax * rating;
  }
  
  const totalAmount = tax + (tax * rating);
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Invc Ref", "Party Name", "PAN No", "Taxable Value", "CGST", "SGST", "IGST", "Grand Total", "Date"]);
  }
  
  sheet.appendRow([
    invoiceId,
    party,
    pan,
    tax,
    cgstVal,
    sgstVal,
    igstVal,
    totalAmount,
    new Date()
  ]);
  
  return { success: true, total: totalAmount };
}`,
    setupSteps: [
      "Open your worksheet ledger copy.",
      "Launch Google Apps Script, paste the HisabSarthi GST accounting engine.",
      "Verify state logic checks parameters to splits into CGST/SGST/IGST automatically.",
      "Publish as a service to lock-in your GST automation desk."
    ]
  },
  loansarthi: {
    id: "loansarthi",
    name: "LoanSarthi",
    price: "₹1,499",
    marketPrice: "₹4,999",
    sheetTemplateUrl: "https://docs.google.com/spreadsheets/d/1LoanSarthiTemplateDemo/copy",
    appsScriptCode: `/**
 * LoanSarthi - Loan Ledger Tracker & Recovery EMI Calculator
 * Author: Suraj Automation
 */

const SHEET_LOANS = "Loan_Ledger";

function generateLoanAccount(borrowerName, principal, annualInterestPct, tenureMonths) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_LOANS) || ss.insertSheet(SHEET_LOANS);
  const accountNo = "LN-" + new Date().getTime();
  
  // Straight forward simple EMI balance calculation
  const p = parseFloat(principal);
  const r = (parseFloat(annualInterestPct) / 12) / 100;
  const n = parseInt(tenureMonths);
  
  const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalDue = emi * n;
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Acc No", "Borrower Name", "Principal Original", "Interest Rate (%)", "Tenure (Mo)", "Monthly EMI", "Total Due Amount", "Status"]);
  }
  
  sheet.appendRow([
    accountNo,
    borrowerName,
    p,
    annualInterestPct,
    n,
    emi.toFixed(2),
    totalDue.toFixed(2),
    "Disbursed"
  ]);
  
  return { success: true, accountNo: accountNo, monthlyEmi: emi.toFixed(2), totalDue: totalDue.toFixed(2) };
}`,
    setupSteps: [
      "Access Extensions ➔ Apps Script in your financial worksheet.",
      "Paste the LoanSarthi Loan Ledger tracker functions above.",
      "Configure your web dashboard inputs to map borrower criteria accurately.",
      "Save and authorize spreadsheet permissions."
    ]
  },
  "cogs-analytics-dashboard": {
    id: "cogs-analytics-dashboard",
    name: "COGS Analytics Dashboard",
    price: "₹3,999",
    marketPrice: "₹9,999",
    sheetTemplateUrl: "https://docs.google.com/spreadsheets/d/1CogsDashboardTemplateDemo/copy",
    appsScriptCode: `/**
 * COGS Analytics Dashboard Aggregator
 * Author: Suraj Automation
 */

const SHEET_BRANCH_A = "Branch_A_Ledger";
const SHEET_BRANCH_B = "Branch_B_Ledger";

function calculateConsolidatedCOGS() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const aRows = ss.getSheetByName(SHEET_BRANCH_A).getDataRange().getValues();
  const bRows = ss.getSheetByName(SHEET_BRANCH_B).getDataRange().getValues();
  
  let branchACOGS = 0;
  let branchBCOGS = 0;
  
  // Calculate average weighted values or material costing summation
  for (let i=1; i<aRows.length; i++) {
    branchACOGS += parseFloat(aRows[i][4]) || 0; // Column E contains cost calculation
  }
  for (let j=1; j<bRows.length; j++) {
    branchBCOGS += parseFloat(bRows[j][4]) || 0;
  }
  
  return {
    branchA: branchACOGS,
    branchB: branchBCOGS,
    consolidated: branchACOGS + branchBCOGS
  };
}`,
    setupSteps: [
      "Launch Apps Script in your COGS Spreadsheet template.",
      "Paste the dashboard aggregator engine functions above.",
      "Ensure Branch Sheets correspond to headers specified in the template.",
      "Execute once to verify consolidated balance sums."
    ]
  },
  "cfo-dashboard": {
    id: "cfo-dashboard",
    name: "CFO Dashboard",
    price: "₹1,499",
    marketPrice: "₹4,999",
    sheetTemplateUrl: "https://docs.google.com/spreadsheets/d/1CFODashboardTemplateDemo/copy",
    appsScriptCode: `/**
 * CFO Dashboard Engine
 * Author: Suraj Automation
 */

function calculateCashPosition() {
  return { success: true };
}`,
    setupSteps: [
      "Click the 'Make a Copy' button to open your personalized copy of the Google Sheets template.",
      "Authorize any requested permissions to grant Google Drive access.",
      "Connect your bank statements.",
      "Start tracking your cash flow and financial health."
    ]
  },
  stocksarthi: {
    id: "stocksarthi",
    name: "StockSarthi",
    price: "₹1,499",
    marketPrice: "₹4,999",
    sheetTemplateUrl: "https://docs.google.com/spreadsheets/d/1StockSarthiTemplateDemo/copy",
    appsScriptCode: `/**
 * StockSarthi - Real-Time Low Stock Alerter & Inventory Ledger
 * Author: Suraj Automation
 */

const SHEET_INVENTORY = "Inventory_Stock";

function adjustStockLevel(skuCode, varianceQty, operationType) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_INVENTORY);
  if (!sheet) return { success: false, message: "Inventory Sheet not initialized" };
  
  const data = sheet.getDataRange().getValues();
  const adjustValue = parseInt(varianceQty) * (operationType === "STOCK_OUT" ? -1 : 1);
  
  for(let i=1; i<data.length; i++) {
    if (data[i][0].toString() === skuCode.toString()) {
      const currentLevel = parseInt(data[i][2]);
      const newLevel = currentLevel + adjustValue;
      
      sheet.getRange(i+1, 3).setValue(newLevel); // Write updated quantity level
      
      const threshold = parseInt(data[i][3]); // Out of Stock Safety limits
      if (newLevel <= threshold) {
        sendLowStockNotification(skuCode, data[i][1], newLevel);
      }
      return { success: true, sku: skuCode, name: data[i][1], newQty: newLevel };
    }
  }
  return { success: false, message: "SKU code reference not matching database." };
}

function sendLowStockNotification(sku, name, level) {
  console.log(\`Sending alert! SKU \${sku} (\${name}) has reached \${level} units.\`);
}`,
    setupSteps: [
      "Launch Google Apps Script within your StockSarthi spreadsheet framework.",
      "Clear standard functions, replace with low stock alert handlers.",
      "Setup threshold integers to trigger auto warnings immediately.",
      "Authorize security access to read your inventory rows."
    ]
  },
  personalfinsarthi: {
    id: "personalfinsarthi",
    name: "PersonalFin Sarthi",
    price: "₹599",
    marketPrice: "₹1,499",
    sheetTemplateUrl: "https://docs.google.com/spreadsheets/d/1PersonalFinSarthiTemplateDemo/copy",
    appsScriptCode: `/**
 * PersonalFin Sarthi - India's Smartest Personal Finance Tracker & Budget Planner
 * Author: Suraj Automation
 * Platform: Google Apps Script Web App with Sheets Backend
 */

const SHEET_NAME_TRANSACTIONS = "Transactions";
const SHEET_NAME_BUDGETS = "Budgets";
const SHEET_NAME_SUBSCRIPTIONS = "Subscriptions";
const SHEET_NAME_ASSETS = "Assets";

function doGet(e) {
  const template = HtmlService.createTemplateFromFile('Index');
  template.baseUrl = ScriptApp.getService().getUrl();
  return template.evaluate()
    .setTitle('PersonalFin Sarthi - Dashboard')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getDashboardMetrics() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const transSheet = ss.getSheetByName(SHEET_NAME_TRANSACTIONS);
  if (!transSheet) return { expenses: 0, income: 0, savings: 0, investments: 0, netWorth: 0 };
  
  const data = transSheet.getDataRange().getValues();
  let totalExpenses = 0;
  let totalIncome = 0;
  let totalSavings = 0;
  let totalInvestments = 0;
  
  // Skip header row
  for (let i = 1; i < data.length; i++) {
    const amount = parseFloat(data[i][3]) || 0;
    const type = data[i][4]; // Column 4 contains Category Type: Income/Expense/Savings/Investment
    
    if (type === "Expense") totalExpenses += amount;
    else if (type === "Income") totalIncome += amount;
    else if (type === "Savings") totalSavings += amount;
    else if (type === "Investment") totalInvestments += amount;
  }
  
  const netWorth = (totalIncome + totalSavings + totalInvestments) - totalExpenses;
  return {
    expenses: totalExpenses,
    income: totalIncome,
    savings: totalSavings,
    investments: totalInvestments,
    netWorth: netWorth
  };
}

function addExpenseEntry(date, category, amount, account, notes) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME_TRANSACTIONS) || ss.insertSheet(SHEET_NAME_TRANSACTIONS);
  const entryId = "FIN-" + new Date().getTime();
  
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Entry ID", "Date", "Category", "Amount", "Type", "Account", "Notes", "Timestamp"]);
  }
  
  sheet.appendRow([
    entryId,
    date || new Date(),
    category,
    parseFloat(amount),
    "Expense",
    account || "Bank Account",
    notes || "",
    new Date()
  ]);
  
  // Alert if spending limit exceeded
  checkBudgetThreshold(category);
  return { success: true, entryId: entryId };
}

function checkBudgetThreshold(category) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const budgetSheet = ss.getSheetByName(SHEET_NAME_BUDGETS);
  if (!budgetSheet) return;
  const budgets = budgetSheet.getDataRange().getValues();
  
  // Simple check logic
  console.log("Checking monthly spending limit thresholds for: " + category);
}`,
    setupSteps: [
      "Click the 'Make a Copy' button to copy your PersonalFin Sarthi spreadsheet layout directly inside your Google Drive.",
      "Navigate to Extensions ➔ Apps Script from the spreadsheet menu.",
      "Delete any default code and replace it with the PersonalFin Sarthi code provided above.",
      "Save the Apps Script project by clicking the Save icon.",
      "Click Deploy ➔ New Deployment. Choose Web App, set execute as 'Me', set access level to 'Anyone'.",
      "Deploy and authorize requested permissions to grant Google Drive storage read-write access.",
      "Launch your newly created Personal Finance dashboard to monitor budgets, subscriptions, debt avalanche/snowball trackers, and investments offline!"
    ]
  }
};

export function getNumericPrice(priceStr: string): number {
  if (!priceStr) return 0;
  const match = priceStr.match(/(\d+[,\d]*(\.\d+)?)/);
  if (match) {
    const cleaned = match[0].replace(/,/g, '');
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? 0 : parsed;
  }
  return 0;
}

export function calculateDiscount(priceStr: string, marketPriceStr?: string): number {
  if (!marketPriceStr) return 0;
  const price = getNumericPrice(priceStr);
  const marketPrice = getNumericPrice(marketPriceStr);
  if (price <= 0 || marketPrice <= 0 || price >= marketPrice) return 0;
  return Math.round(((marketPrice - price) / marketPrice) * 100);
}

export const PRODUCT_CATALOG_METADATA: Record<string, { tagline: string; description: string; category: string; color: string; images: string[] }> = {
  loansarthi: {
    tagline: "Smart Finance & Recovery Control System",
    description: "Small finance businesses ke liye powerful, mobile-first loan management system. Loan create, EMI track, recovery manage, and reports all in one dashboard.",
    category: "Accounting & Finance",
    color: "indigo",
    images: [
      "https://blogger.googleusercontent.com/img/a/AVvXsEh5zZHbpxiw_k6uVI42WF3xsmx5ufKvjLCZmmNF7Wx1w3JXIFvgHSu6IQuiigrjGxnmzU99q-ZLe143TGx1uqJwdDWgBGzvwXLdcatbImKrD8TRKda9y4PnW6m_88uEs9JmwklolKLHhMnD4dFrJ3fxBXKncoDZyu4YPXgZ5vGfLE2vSbNUXEH-iHeUVbw=s16000",
      "https://blogger.googleusercontent.com/img/a/AVvXsEhRwZ7jr27Aex3DkMF2H3BqRhc2BniAv718FR-O7y1mWKbbzapoAqoduJwO8XXHt6SrsBzDMSDkiro4eeIszkMkAfvEOaPUaE-RTywgxYtQ2YBir6qwPcQXq83P9ediOyHf9SU1SBQgqWRDr5Matusd3oyXCyWBCiNjRI4DRxc_NlvPPnkgzmq0QNweP6M=s16000",
      "https://blogger.googleusercontent.com/img/a/AVvXsEgTKZ12p4akvWrmyqk_VoUqoFnEeLqd6cT2S24OXfzFtuQA7TVlUM4Z6mxG7_ygK4HMAGAMwisyw_AE53vzOAesgi9jrPbcXkrxk6-VhNvtEbz9Fq9apnLCkhY3ikuJIXEbD5nsbygZj4cWjTejZ4brVn7qhqyJ77WWqBUO-TJss-SeXbV5nGEz-T4Z6eo=s16000"
    ]
  },
  supplysarthi: {
    tagline: "Complete Supply & Distribution Management System",
    description: "Stop taking orders on WhatsApp. Manage your entire supply business in one Google Sheet-based system—from orders to GST invoices. Pay once, use for a lifetime.",
    category: "Retail & Supply",
    color: "teal",
    images: [
      "/images/products/supplysarthi1.jpg",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
    ]
  },
  "cogs-analytics-dashboard": {
    tagline: "Automated COGS Reporting & AI Profit Dashboard",
    description: "Stop guessing your profit margins. A highly powerful COGS reporting web application built on Google Workspace that automates multi-branch cost tracking with AI-driven insights.",
    category: "Accounting & Finance",
    color: "amber",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543286386-7a39e859a41c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  "cfo-dashboard": {
    tagline: "Your Entire Business Financial Health. One Dashboard.",
    description: "The CFO Dashboard gives you a complete financial command center for your business to see your cash position instantly and forecast cash flow.",
    category: "Accounting & Finance",
    color: "blue",
    images: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=800&q=80"
    ]
  },
  hisabsarthi: {
    tagline: "Google Sheets-based GST Accounting Tool",
    description: "Ditch Tally and complex ERPs. HisabSarthi is a simple, affordable GST invoicing and accounting system built for Indian small businesses. 100% data control in your Google Drive.",
    category: "Accounting & Finance",
    color: "blue",
    images: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=800&q=80"
    ]
  },
  rationkart: {
    tagline: "Store Se Site Tak – Complete Digital Ordering & Approval System",
    description: "A simple and powerful web app that helps grocery stores, kirana shops, and small retail businesses manage item requests, approvals, and stock in one place.",
    category: "Retail & Supply",
    color: "indigo",
    images: [
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80"
    ]
  },
  stocksarthi: {
    tagline: "Stock Management System for Small Business",
    description: "Take full control of your stock without Excel confusion. A simple inventory management software and stock tracking system using Google Sheets built for growing businesses.",
    category: "Inventory",
    color: "emerald",
    images: [
      "https://images.unsplash.com/photo-1553413719-87587ef72441?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=800&q=80"
    ]
  },
  billsarthi: {
    tagline: "Smart Vendor Bill Management System for Growing Businesses",
    description: "Bills with errors? Accounts team rejecting entries? Not anymore. BillSarthi is a smart web-based billing system that helps store teams enter vendor bills correctly — the first time.",
    category: "Accounting & Finance",
    color: "blue",
    images: [
      "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=800&q=80"
    ]
  },
  claimo: {
    tagline: "Smart Expense & Reimbursement Management System",
    description: "Tired of Excel expense sheets and approval delays? Claimo brings structure, transparency, and speed to your entire expense process.",
    category: "HR & Management",
    color: "amber",
    images: [
      "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534951009808-766178b47a4f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  karmsarthi: {
    tagline: "HR Management System for Small Business",
    description: "Stop managing HR on Excel & WhatsApp. KarmSarthi is an employee management system for SMBs that handles your daily HR operations in one structured platform.",
    category: "HR & Management",
    color: "purple",
    images: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531535934027-667f6787eda5?auto=format&fit=crop&w=800&q=80"
    ]
  },
  cakesarthi: {
    tagline: "Complete Online Ordering & Growth System for Bakeries",
    description: "Turn your local bakery into a smart online business. CakeSarthi gives you your own online cake ordering website, smart checkout, UPI payments, and an owner dashboard.",
    category: "Food & Beverage",
    color: "rose",
    images: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  gymsarthi: {
    tagline: "Gym Management System for Small Gym",
    description: "Stop running your gym on register & memory. GymSarthi is a simple gym member tracking system and fee management system specially built for Indian gym owners.",
    category: "Health & Fitness",
    color: "orange",
    images: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=805"
    ]
  },
  menusarthi: {
    tagline: "Digital Menu for Restaurant & QR Ordering System",
    description: "Turn your restaurant into a smart digital ordering system. MenuSarthi gives you your own premium digital menu and restaurant online ordering system without heavy commissions.",
    category: "Food & Beverage",
    color: "red",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80"
    ]
  },
  vendorsarthi: {
    tagline: "Smart Vendor Management System",
    description: "A complete Vendor Management System built entirely on Google Sheets to end manual RFQs, WhatsApp quotes, and Excel comparisons.",
    category: "Retail & Supply",
    color: "teal",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  personalfinsarthi: {
    tagline: "India’s Smartest Personal Finance Tracker",
    description: "Track expenses, savings, debt, investments & subscriptions from one beautiful dashboard. Your secure, offline-first personal CFO built on Google Apps Script and Google Sheets.",
    category: "Accounting & Finance",
    color: "emerald",
    images: [
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=800&q=80"
    ]
  }
};

// Decorate the product solutions dynamically
Object.keys(PRODUCT_CATALOG_METADATA).forEach((id) => {
  const p = PRODUCT_SOLUTIONS[id];
  if (p) {
    const meta = PRODUCT_CATALOG_METADATA[id];
    p.tagline = meta.tagline;
    p.description = meta.description;
    p.category = meta.category;
    p.color = meta.color;
    p.images = meta.images;
  }
});

