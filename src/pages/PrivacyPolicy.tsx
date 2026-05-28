import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Lock, Eye, Database } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-sans">
      <Link to="/" className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
      </Link>
      
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
        <div className="flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-2xl text-emerald-600 mb-8">
          <ShieldCheck className="w-8 h-8" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate-500 mb-10">Last updated: {new Date().toLocaleDateString('en-IN')}</p>

        <div className="space-y-10 text-slate-700 leading-relaxed">
          <section>
            <p className="text-lg text-slate-600">
              At Suraj Automation, your privacy and data security are our highest priorities. Because we design business systems, CRM integrations, and customized Google Apps Script products for SMBs, we understand the critical importance of keeping your operational data secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
               <Eye className="w-6 h-6 text-slate-400" />
               1. Information We Collect
            </h2>
            <p className="mb-4">
              When you visit our website, explore our products, or engage our services, we may collect the following types of information:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Personal Identification Data:</strong> Name, email address, phone number, and business details provided during contact inquiries or purchases (e.g. Admin Portal setup).</li>
              <li><strong>Technical Data:</strong> Account IDs, environment details, or Google Workspace scopes necessary for deploying and configuring automation scripts like Bill Sarthi, RationKart, or Vendor Sarthi.</li>
              <li><strong>Usage Data:</strong> Basic analytics related to how you navigate our website to help us improve user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Database className="w-6 h-6 text-slate-400" />
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              The data we collect is strictly utilized to provide and fulfill our services to you:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To construct, deploy, and tailor tools like Dynamic Product Pages or custom Dashboards for your business.</li>
              <li>To process payments securely through our checkout systems (e.g. Razorpay integrations).</li>
              <li>To provide ongoing support, bug fixes, and updates for the scripts and tools you purchase.</li>
              <li>To communicate securely with you regarding project milestones or policy updates.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Lock className="w-6 h-6 text-slate-400" />
              3. Data Security and Access
            </h2>
            <p className="mb-4">
              Our automated solutions operate heavily within the Google Workspace ecosystem (Sheets, Drive, Gmail). We adhere strictly to standard API security guidelines:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Our scripts execute within your own Google environments. We do NOT extract, harvest, or independently store your sensitive business data on external databases unless explicitly commissioned as part of your architecture.</li>
              <li>Any credentials or API keys shared for configuration purposes are handled with strict confidentiality and discarded upon project completion.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              4. Third-Party Services
            </h2>
            <p className="mb-4">
              We may utilize third-party services for payments (e.g., Razorpay) and communication (e.g., WhatsApp widgets). These services operate under their respective privacy policies. We do not sell, trade, or rent your personal information to any third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              5. Your Rights
            </h2>
            <p className="mb-4">
              You have the right to request access to the personal information we hold about you, to request corrections, or to request the deletion of your contact data from our active systems. 
            </p>
          </section>

          <section className="bg-slate-50 p-6 rounded-2xl md:p-8 mt-8 border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              6. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data handling practices, please connect with us at:
              <br />
              <a href="mailto:suraj.gasdeveloper@gmail.com" className="text-indigo-600 hover:text-indigo-800 font-medium mt-2 inline-block transition-colors">suraj.gasdeveloper@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
