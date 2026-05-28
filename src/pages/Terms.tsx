import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldAlert, FileText, RotateCcw } from 'lucide-react';

export default function Terms() {
  return (
    <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-sans">
      <Link to="/" className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
      </Link>
      
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
        <div className="flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-2xl text-indigo-600 mb-8">
          <FileText className="w-8 h-8" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Terms and Conditions
        </h1>
        <p className="text-slate-500 mb-10">Last updated: {new Date().toLocaleDateString('en-IN')}</p>

        <div className="space-y-10 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
               1. Terms of Service
            </h2>
            <p className="mb-4">
              Welcome to Suraj Automation. By accessing our website, purchasing our scripts, software products, or engaging our Google Apps Script automation services, you agree to be bound by these Terms and Conditions. Please read them carefully.
            </p>
            <p>
              Our systems are customized exclusively for SMBs and designed to streamline operations. Unauthorized reproduction, resale, or distribution of our proprietary code and systems is strictly prohibited unless specifically licensed.
            </p>
          </section>

          <section className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <RotateCcw className="w-6 h-6 text-indigo-600" />
              2. Refund Policy
            </h2>
            <p className="mb-4">
              We stand behind the quality and functionality of our digital products and automation tools. However, due to the nature of digital goods and customized code, we enforce a strict refund policy:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>3-Day Window:</strong> Refund requests must be initiated strictly within <strong>3 days</strong> of the original purchase or deployment date.</li>
              <li><strong>Eligibility:</strong> Refunds are only applicable if the product fundamentally fails to perform as described, and our support team is unable to resolve the technical issue.</li>
              <li><strong>Non-Refundable:</strong> Services involving extensive custom consulting, completed custom script development, or changes in your business requirements post-purchase are not eligible for a refund.</li>
            </ul>
            <p className="text-sm text-slate-500 italic">
              After the 3-day resolution window expires, all sales are considered final and no refunds will be processed under any circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              3. Licensing and Usage
            </h2>
            <p className="mb-4">
              Products purchased from Suraj Automation are granted a non-exclusive, non-transferable license for use within your own organization. You may not distribute our scripts or software as your own intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              4. Support and Maintenance
            </h2>
            <p className="mb-4">
              Free support is provided for any bug or defect inherent to the original product configuration for the stated support period. Issues caused by third-party modifications, unauthorized changes to the script, or changes in Google’s API policies are outside the scope of free support and may incur additional consulting fees.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <ShieldAlert className="w-6 h-6 text-slate-900" />
              5. Limitation of Liability
            </h2>
            <p>
              Suraj Automation shall not be held liable for any direct, indirect, incidental, or consequential damages, including data loss or business interruption, arising out of the use or inability to use our systems and software. Always ensure you have appropriate backups of your Google Workspace data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              6. Contact Information
            </h2>
            <p>
              If you have any questions regarding these terms, your purchase, or our refund policy, please contact us immediately at:
              <br />
              <a href="mailto:suraj.gasdeveloper@gmail.com" className="text-indigo-600 hover:text-indigo-800 font-medium mt-2 inline-block transition-colors">suraj.gasdeveloper@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
