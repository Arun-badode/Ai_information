import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-black text-white py-5">
      <main className="container">
        {/* Title */}
        <h2 className="text-center text-warning mb-4">Terms and Conditions</h2>
        <p className="text-center text-muted mb-5">
          Effective Date: <strong>[Insert Date]</strong>
        </p>

        {/* Introduction */}
        <section className="mb-5 p-4 bg-secondary bg-opacity-10 rounded">
          <p>
            Welcome to <strong>Kiaan Technology Pvt. Ltd.</strong> By accessing or using our website and services,
            you agree to comply with and be bound by the following Terms and Conditions ("Terms").
            Please read these Terms carefully before using our website. If you do not agree with these
            Terms, you should not use the website.
          </p>
        </section>

        {/* 1. Acceptance of Terms */}
        <section className="mb-5 p-4 bg-secondary bg-opacity-10 rounded">
          <h4 className="h5 text-warning border-bottom border-warning pb-2">1. Acceptance of Terms</h4>
          <p>
            By using the services of <strong>Kiaan Technology Pvt. Ltd.</strong>, you agree to abide by these Terms
            and Conditions. We may update these Terms from time to time, and we will notify you of any material
            changes by updating the "Effective Date" above.
          </p>
        </section>

        {/* 2. Use of Services */}
        <section className="mb-5 p-4 bg-secondary bg-opacity-10 rounded">
          <h4 className="h5 text-warning border-bottom border-warning pb-2">2. Use of Services</h4>
          <ul className="ms-4">
            <li>
              <strong>Eligibility:</strong> You must be at least 18 years old to use our services. By agreeing to these
              Terms, you confirm that you are 18 or older.
            </li>
            <li>
              <strong>Account Responsibility:</strong> If you create an account with us, you are responsible for maintaining
              the confidentiality of your account details, including your username and password, and for all activities
              under your account.
            </li>
            <li>
              <strong>Prohibited Uses:</strong> You agree not to use the website or services for any unlawful purpose or in
              any way that could harm, disable, overburden, or impair the website or interfere with any other party's use
              of the website.
            </li>
          </ul>
        </section>

        {/* 3. Intellectual Property */}
        <section className="mb-5 p-4 bg-secondary bg-opacity-10 rounded">
          <h4 className="h5 text-warning border-bottom border-warning pb-2">3. Intellectual Property</h4>
          <p>
            All content, including but not limited to text, graphics, logos, images, audio clips, video clips,
            and software, available on this website is the property of <strong>Kiaan Technology Pvt. Ltd.</strong>
            and is protected by applicable copyright and intellectual property laws. You may not copy, distribute,
            modify, or create derivative works without prior written permission from us.
          </p>
        </section>

        {/* 4. Privacy Practices */}
        <section className="mb-5 p-4 bg-secondary bg-opacity-10 rounded">
          <h4 className="h5 text-warning border-bottom border-warning pb-2">4. Privacy Practices</h4>
          <p>
            By using our website, you consent to the collection and use of details as outlined in our
            <a href="/privacy-policy" className="text-warning ms-1">
              Privacy Policy
            </a>.
          </p>
        </section>

        {/* 5. Payment Terms */}
        <section className="mb-5 p-4 bg-secondary bg-opacity-10 rounded">
          <h4 className="h5 text-warning border-bottom border-warning pb-2">5. Payment Terms</h4>
          <p>
            For paid services offered on our website, you agree to pay all applicable fees and charges. Payments are processed
            securely, and you are responsible for ensuring the accuracy of your billing details.
          </p>
        </section>

        {/* 6. Limitation of Liability */}
        <section className="mb-5 p-4 bg-secondary bg-opacity-10 rounded">
          <h4 className="h5 text-warning border-bottom border-warning pb-2">6. Limitation of Liability</h4>
          <p>
            <strong>No Warranties:</strong> Our website and services are provided "as is" and without warranties of any kind,
            either express or implied. We do not guarantee that the website will be free from errors or interruptions.
          </p>
          <p>
            <strong>Limitation of Liability:</strong> To the maximum extent permitted by law, <strong>Kiaan Technology Pvt. Ltd.</strong>
            shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use
            of the website.
          </p>
        </section>

        {/* 7. Indemnification */}
        <section className="mb-5 p-4 bg-secondary bg-opacity-10 rounded">
          <h4 className="h5 text-warning border-bottom border-warning pb-2">7. Indemnification</h4>
          <p>
            You agree to indemnify, defend, and hold harmless <strong>Kiaan Technology Pvt. Ltd.</strong>, its officers,
            directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses,
            and expenses arising from your use of the website or any violation of these Terms.
          </p>
        </section>

        {/* 8. Third-Party Links */}
        <section className="mb-5 p-4 bg-secondary bg-opacity-10 rounded">
          <h4 className="h5 text-warning border-bottom border-warning pb-2">8. Third-Party Links</h4>
          <p>
            Our website may contain links to third-party websites that are not operated or controlled by us. We are not responsible
            for the content, privacy practices, or activities of these third-party sites.
          </p>
        </section>

        {/* 9. Termination */}
        <section className="mb-5 p-4 bg-secondary bg-opacity-10 rounded">
          <h4 className="h5 text-warning border-bottom border-warning pb-2">9. Termination</h4>
          <p>
            We reserve the right to suspend or terminate your access to the website if we believe you have violated these Terms.
            Upon termination, your right to use the website will immediately cease.
          </p>
        </section>

        {/* 10. Governing Law */}
        <section className="mb-5 p-4 bg-secondary bg-opacity-10 rounded">
          <h4 className="h5 text-warning border-bottom border-warning pb-2">10. Governing Law</h4>
          <p>
            These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country/Region],
            without regard to its conflict of law principles. Any disputes arising under or in connection with these Terms shall
            be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
          </p>
        </section>

        {/* 11. Changes to Terms */}
        <section className="p-4 bg-secondary bg-opacity-10 rounded">
          <h4 className="h5 text-warning border-bottom border-warning pb-2">11. Changes to Terms</h4>
          <p>
            We may modify or update these Terms at any time. Any changes will be posted on this page, and the updated Terms
            will take effect immediately upon posting. It is your responsibility to review these Terms periodically.
          </p>
        </section>
      </main>
    </div>
  );
};

export default TermsOfService;
