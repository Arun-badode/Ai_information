import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white">
      <main className="container py-5">
        <h2 className="mb-4">Privacy Policy</h2>

        <h3 className="mt-4 mb-2">Information Collection</h3>
        <p>
          We collect information that you provide directly to us, including when
          you create an account, make a purchase, or contact us for support.
        </p>
        <ul className="list-inside pl-4">
          <li>Personal information (name, email, phone number)</li>
          <li>Payment information</li>
          <li>Usage data and preferences</li>
          <li>Device and browser information</li>
        </ul>

        <h3 className="mt-4 mb-2">How We Use Your Information</h3>
        <p>We use the information we collect to:</p>
        <ul className="list-inside pl-4">
          <li>Provide and maintain our services</li>
          <li>Process your transactions</li>
          <li>Send you updates and marketing communications</li>
          <li>Improve our services and develop new features</li>
        </ul>

        <h3 className="mt-4 mb-2">Information Sharing</h3>
        <p>
          We do not sell your personal information. We may share your
          information with:
        </p>
        <ul className="list-inside pl-4">
          <li>Service providers who assist in our operations</li>
          <li>Law enforcement when required by law</li>
          <li>Business partners with your consent</li>
        </ul>

        <h3 className="mt-4 mb-2">Your Rights</h3>
        <p>You have the right to:</p>
        <ul className="list-inside pl-4">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
