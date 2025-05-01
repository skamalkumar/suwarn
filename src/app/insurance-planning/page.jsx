export default function InsurancePlanningPage() {
    return (
      <div className="bg-black min-h-screen">
        <div className="text-yellow-400 p-6 max-w-4xl mx-auto py-10">
          <h1 className="text-4xl font-bold text-yellow-500 mb-6 border-b border-yellow-600 pb-2">
            Insurance Planning
          </h1>
  
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Introduction</h2>
            <p className="text-yellow-200 mb-4">
              Insurance planning is the process of identifying financial risks and securing appropriate coverage to protect yourself,
              your family, or your business against unforeseen losses. It forms a crucial part of a sound financial strategy.
            </p>
          </section>
  
          {/* Why Insurance Planning Is Important */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Why It Matters</h2>
            <p className="text-yellow-200 mb-4">
              Life is unpredictable, and the right insurance coverage helps mitigate financial stress during critical events like
              illness, accidents, death, or natural disasters. Insurance planning ensures peace of mind and long-term security.
            </p>
          </section>
  
          {/* Types of Insurance */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Types of Insurance Coverage</h2>
            <ul className="list-disc list-inside text-yellow-200 space-y-2 mb-4">
              <li><strong className="text-yellow-500">Life Insurance:</strong> Protects loved ones financially in case of untimely death.</li>
              <li><strong className="text-yellow-500">Health Insurance:</strong> Covers medical expenses for illnesses, treatments, and surgeries.</li>
              <li><strong className="text-yellow-500">Disability Insurance:</strong> Provides income in case of temporary or permanent disability.</li>
              <li><strong className="text-yellow-500">Property Insurance:</strong> Covers damage or loss of property due to fire, theft, or natural events.</li>
              <li><strong className="text-yellow-500">Liability Insurance:</strong> Protects against legal claims and third-party damages.</li>
            </ul>
          </section>
  
          {/* Benefits */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Key Benefits</h2>
            <ul className="list-disc list-inside text-yellow-200 space-y-2 mb-4">
              <li>Reduces financial risk exposure</li>
              <li>Ensures timely financial support during emergencies</li>
              <li>Protects family, assets, and business interests</li>
              <li>Complements wealth and retirement planning</li>
              <li>Offers tax benefits on certain policies</li>
            </ul>
          </section>
  
          {/* Our Approach */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Our Approach</h2>
            <p className="text-yellow-200 mb-4">
              At <span className="text-yellow-500 font-bold">Global Consultant</span>, we offer customized insurance planning services. 
              We assess your risk profile, life goals, and financial commitments to recommend policies that provide maximum protection 
              without overpaying for coverage.
            </p>
          </section>
  
          {/* CTA */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Secure Your Future Today</h2>
            <p className="text-yellow-200 mb-6">
              Don’t wait for the unexpected. Reach out to us and let our experts help you build a safety net for life’s uncertainties.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded transition">
              Talk to an Insurance Advisor
            </button>
          </section>
        </div>
      </div>
    );
  }
  