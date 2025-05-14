import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-black text-white">
      <main className="px-3 py-5">
        <h2 className="mb-4">Terms of Service</h2>

        <h3 className="mt-4 mb-2">Acceptance of Terms</h3>
        <p>
          By accessing or using our services, you agree to be bound by these
          Terms of Service and all applicable laws and regulations.
        </p>

        <h3 className="mb-4">User Responsibilities</h3>
        <ul className="list-inside pl-4">
          <li>Maintain accurate account information</li>
          <li>Protect your account credentials</li>
          <li>Use services in compliance with laws</li>
          <li>Respect intellectual property rights</li>
        </ul>

        <h3 className="mt-4 mb-2">Service Usage</h3>
        <p>
          Our services are provided "as is" and "as available" without
          warranties of any kind, either express or implied.
        </p>
        <ul className="list-inside pl-4">
          <li>Fair usage policies apply</li>
          <li>Services availability may vary</li>
          <li>Features may change without notice</li>
        </ul>

        <h3 className="mt-4 mb-2">Intellectual Property</h3>
        <p>
          All content, features, and functionality are owned by Ai Tools and
          protected by international copyright laws.
        </p>

        <h3 className="mt-4 mb-2">Termination</h3>
        <p>
          We reserve the right to terminate or suspend access to our services
          immediately without prior notice or liability, for any reason.
        </p>

        <h3 className="mt-4 mb-2">Changes to Terms</h3>
        <p>
          We reserve the right to modify or replace these terms at any time.
          Changes will be effective immediately upon posting to our website.
        </p>
      </main>
    </div>
  );
};

export default TermsOfService;
