import React from 'react';
import Header from '../../../components/Header/Header';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const PrivacyPolicy = () => {
  return (
    <>
    <Header/>
    <Navbar/>

    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8 px-4">
      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Privacy Policy</h1>

        <p className="text-lg text-gray-600 mb-4">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>

        <div className="space-y-8">

          {/* Section 1: Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Information We Collect</h2>
            <p className="text-gray-600 mb-2">
              We collect personal information that you provide to us directly, such as your name, email address, phone number, and any other details you submit through our website.
            </p>
            <p className="text-gray-600">
              We also collect information automatically when you interact with our website, such as IP addresses, browser type, and usage data.
            </p>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. How We Use Your Information</h2>
            <p className="text-gray-600">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to inquiries and requests</li>
              <li>Send promotional materials or offers</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Section 3: Sharing Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Sharing Your Information</h2>
            <p className="text-gray-600">
              We may share your information with third parties in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>With service providers who assist us in running our services</li>
              <li>When required by law, such as to comply with legal processes or respond to government requests</li>
              <li>To protect our rights, property, or safety, and that of our users</li>
            </ul>
          </section>

          {/* Section 4: Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Data Security</h2>
            <p className="text-gray-600">
              We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 5: Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Your Rights</h2>
            <p className="text-gray-600">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Access the personal information we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Request the portability of your data</li>
            </ul>
          </section>

          {/* Section 6: Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Cookies</h2>
            <p className="text-gray-600">
              We use cookies and similar technologies to enhance your experience on our website. Cookies are small files stored on your device that help us remember your preferences and provide personalized content.
            </p>
            <p className="text-gray-600">
              You can control the use of cookies through your browser settings. However, disabling cookies may affect certain features of our website.
            </p>
          </section>

          {/* Section 7: Changes to This Privacy Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Last Updated" date will be revised accordingly. Please review this Privacy Policy periodically.
            </p>
          </section>

          {/* Section 8: Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">8. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:support@yourcompany.com" className="text-blue-600 underline">support@yourcompany.com</a>.
            </p>
          </section>

        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            By using our services, you agree to the collection and use of your information in accordance with this Privacy Policy.
          </p>
        </div>
      </div>
    </div>

    <Footer />

    </>
  );
};

export default PrivacyPolicy;
