import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white py-5">
      <main className="container">
        {/* Title */}
        <h2 className="mb-5 text-center text-warning">Privacy Policy for Kiaan Technology Pvt. Ltd.</h2>

        {/* Intro */}
        <section className="mb-5 p-4 bg-secondary bg-opacity-10 rounded">
          <p className="lead">
            At Kiaan Technology Pvt. Ltd., we are committed to protecting your privacy. This Privacy Policy explains how
            we collect, use, and safeguard your personal data when you visit our website or use our services.
          </p>
        </section>

        {/* Data We Collect */}
        <section className="mb-5 p-4 bg-secondary bg-opacity-10 rounded">
          <h4 className="h5 text-warning border-bottom border-warning pb-2">1. Data We Collect</h4>
          <p>We collect data in the following ways:</p>
          <ol className="ms-4">
            <li>
              <strong>Personal Data:</strong> When you visit our website, create an account, or use our services, we may
              collect personal details such as your name, email address, phone number, and billing details.
            </li>
            <li>
              <strong>Usage Data:</strong> We automatically collect certain details when you access or use our services,
              including your IP address, browser type, device information, pages visited, and the duration of your visit.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies to enhance your experience. Cookies are small files stored on your
              device that help us analyze web traffic and provide a personalized experience.
            </li>
          </ol>
        </section>

        {/* How We Use Your Data */}
        <section className="mb-5 p-4 bg-secondary bg-opacity-10 rounded">
          <h4 className="h5 text-warning border-bottom border-warning pb-2">2. How We Use Your Data</h4>
          <p>We use your data for the following purposes:</p>
          <ul className="ms-4">
            <li>To provide and improve our services</li>
            <li>To personalize content and advertisements</li>
            <li>
              To communicate with you, including responding to inquiries and sending newsletters or promotional
              materials (you can opt-out at any time)
            </li>
            <li>To analyze website usage and improve the user experience</li>
          </ul>
        </section>

        {/* Sharing Your Data */}
        <section className="mb-5 p-4 bg-secondary bg-opacity-10 rounded">
          <h4 className="h5 text-warning border-bottom border-warning pb-2">3. Sharing Your Data</h4>
          <p>We do not sell or rent your personal data. However, we may share your data in the following cases:</p>
          <ul className="ms-4">
            <li>
              <strong>With Service Providers:</strong> We may share your data with third-party service providers to
              perform functions on our behalf, such as hosting, payment processing, or email services.
            </li>
            <li>
              <strong>For Legal Purposes:</strong> We may disclose your data if required by law or in response to legal
              requests by public authorities.
            </li>
            <li><strong>Business Partners:</strong> with your consent.</li>
          </ul>
        </section>

        {/* Security of Your Data */}
        <section className="mb-5 p-4 bg-secondary bg-opacity-10 rounded">
          <h4 className="h5 text-warning border-bottom border-warning pb-2">4. Security of Your Data</h4>
          <p>
            We implement industry-standard security measures to protect your personal data from unauthorized access,
            alteration, or disclosure. However, please note that no method of transmission over the internet is 100%
            secure, and we cannot guarantee absolute security.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-5 p-4 bg-secondary bg-opacity-10 rounded">
          <h4 className="h5 text-warning border-bottom border-warning pb-2">5. Your Rights</h4>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="ms-4">
            <li>Access the data we hold about you</li>
            <li>Correct any inaccuracies in your personal data</li>
            <li>Request the deletion of your personal data (subject to certain legal exceptions)</li>
          </ul>
        </section>

        {/* Third-Party Links */}
        <section className="mb-5 p-4 bg-secondary bg-opacity-10 rounded">
          <h4 className="h5 text-warning border-bottom border-warning pb-2">6. Third-Party Links</h4>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or
            content of those sites. We encourage you to read the privacy policies of any third-party websites you visit.
          </p>
        </section>

        {/* Changes to Privacy Policy */}
        <section className="p-4 bg-secondary bg-opacity-10 rounded">
          <h4 className="h5 text-warning border-bottom border-warning pb-2">7. Changes to This Privacy Policy</h4>
          <p>
            We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with
            an updated "Effective Date." We encourage you to review this policy periodically.
          </p>
        </section>

      </main>
    </div>
  );
};

export default PrivacyPolicy;
