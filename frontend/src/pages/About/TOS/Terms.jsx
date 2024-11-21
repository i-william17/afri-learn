import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';

const Terms = () => {
  return (
    <>
    <Header/>
    <Navbar/>

    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8 px-4">
      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Terms of Service</h1>

        <p className="text-lg text-gray-600 mb-4">
          Welcome to [Your Company Name]. By accessing or using our services, you agree to comply with the following terms and conditions. Please read them carefully.
        </p>

        <div className="space-y-8">

          {/* Section 1: Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
            <p className="text-gray-600">
              These terms of service govern your use of [Your Company Name]'s website and services. If you do not agree with these terms, please refrain from using our services.
            </p>
          </section>

          {/* Section 2: User Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. User Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>You agree to use our services only for lawful purposes.</li>
              <li>You will not engage in any activity that may disrupt or damage our services.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            </ul>
          </section>

          {/* Section 3: Privacy Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Privacy Policy</h2>
            <p className="text-gray-600">
              We respect your privacy. Please review our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a> to understand how we collect and use your personal information.
            </p>
          </section>

          {/* Section 4: Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Limitation of Liability</h2>
            <p className="text-gray-600">
              To the maximum extent permitted by law, [Your Company Name] shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
            </p>
          </section>

          {/* Section 5: Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Termination</h2>
            <p className="text-gray-600">
              We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these terms or is harmful to others.
            </p>
          </section>

          {/* Section 6: Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Governing Law</h2>
            <p className="text-gray-600">
              These terms of service are governed by the laws of [Your Country/State]. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in [Your City/State].
            </p>
          </section>

          {/* Section 7: Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Changes to Terms</h2>
            <p className="text-gray-600">
              We may update these terms from time to time. Any changes will be posted on this page, and the "Last Updated" date at the top will be revised accordingly. Please review these terms periodically.
            </p>
          </section>

          {/* Section 8: Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">8. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about these terms of service, please contact us at <a href="mailto:support@yourcompany.com" className="text-blue-600 underline">support@yourcompany.com</a>.
            </p>
          </section>

        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            By using our services, you acknowledge that you have read and agree to the terms and conditions outlined above.
          </p>
        </div>
      </div>
    </div>

    <Footer/>

    </>
  );
};

export default Terms;
