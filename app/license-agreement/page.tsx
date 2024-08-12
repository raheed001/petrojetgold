// app/license-agreement/page.tsx

export default function LicenseAgreement() {
    return (
      <div className="max-w-3xl mx-auto p-6 pt-52">
        <h1 className="text-4xl font-bold mb-6">License Agreement</h1>
        <p className="mb-4">
          This License Agreement ("Agreement") is made between Petrojet Gold and
          the user ("Licensee"). By using our products and services, you agree to
          the terms of this Agreement.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Grant of License</h2>
        <p className="mb-4">
          Petrojet Gold grants the Licensee a non-exclusive, non-transferable
          license to use our products and services subject to the terms of this
          Agreement.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Restrictions</h2>
        <p className="mb-4">
          The Licensee may not copy, modify, distribute, or create derivative
          works based on our products and services without the express written
          consent of Petrojet Gold.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Termination</h2>
        <p className="mb-4">
          This Agreement is effective until terminated by either party. Petrojet
          Gold may terminate this Agreement at any time if the Licensee breaches
          any of the terms.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this License Agreement, please contact
          us at <a href="mailto:info@petrojetgold.com" className="text-blue-500 underline">info@petrojetgold.com</a>.
        </p>
      </div>
    );
  }
  