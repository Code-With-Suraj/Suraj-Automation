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
}

export const PRODUCT_SOLUTIONS: Record<string, ProductSolution> = {
  rationkart: {
    id: "rationkart",
    name: "RationKart",
    price: "₹1,499",
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
  "cogs-dashboard": {
    id: "cogs-dashboard",
    name: "Custom COGS Dashboard",
    price: "₹1,499",
    sheetTemplateUrl: "https://docs.google.com/spreadsheets/d/1CogsDashboardTemplateDemo/copy",
    appsScriptCode: `/**
 * Custom COGS Dashboard Aggregator
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
  stocksarthi: {
    id: "stocksarthi",
    name: "StockSarthi",
    price: "₹1,499",
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
  }
};
