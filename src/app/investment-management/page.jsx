export default function InvestmentManagementPage() {
    return (
      <div className="bg-black min-h-screen">
        <div className="text-yellow-400 p-6 max-w-4xl mx-auto py-10">
          <h1 className="text-4xl font-bold text-yellow-500 mb-6 border-b border-yellow-600 pb-2">
            Investment Management
          </h1>
  
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Introduction</h2>
            <p className="text-yellow-200 mb-4">
              Investment management is the professional handling of financial assets and portfolios to meet specific
              investment goals. It encompasses strategic asset allocation, risk management, and continuous monitoring of
              performance to generate sustainable returns for individuals, families, or institutions.
            </p>
          </section>
  
          {/* Why Investment Management Matters */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Why It Matters</h2>
            <p className="text-yellow-200 mb-4">
              In today’s volatile markets, smart investment decisions require more than just luck—they require insight,
              discipline, and adaptability. Professional investment management ensures your money is working efficiently,
              helping you build wealth while minimizing risk.
            </p>
          </section>
  
          {/* Core Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Core Services</h2>
            <ul className="list-disc list-inside text-yellow-200 space-y-2 mb-4">
              <li><strong className="text-yellow-500">Portfolio Management:</strong> Custom-built portfolios based on your goals, time horizon, and risk profile.</li>
              <li><strong className="text-yellow-500">Asset Allocation:</strong> Strategic diversification across equities, debt, real estate, and alternative investments.</li>
              <li><strong className="text-yellow-500">Risk Assessment:</strong> Identifying and managing market, credit, and liquidity risks to protect your capital.</li>
              <li><strong className="text-yellow-500">Performance Review:</strong> Ongoing analysis and rebalancing to align with changing market conditions and life goals.</li>
            </ul>
          </section>
  
          {/* Benefits of Working With Us */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Benefits of Working With Us</h2>
            <ul className="list-disc list-inside text-yellow-200 space-y-2 mb-4">
              <li>Tailored investment strategies backed by data-driven insights</li>
              <li>Transparent fee structures with no hidden costs</li>
              <li>Regular reporting and proactive communication</li>
              <li>Access to exclusive investment opportunities</li>
              <li>Goal-based planning for long-term wealth creation</li>
            </ul>
          </section>
  
          {/* Our Approach */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Our Approach</h2>
            <p className="text-yellow-200 mb-4">
              At <span className="text-yellow-500 font-bold">Global Consultant</span>, we use a disciplined, research-driven process to deliver personalized
              investment solutions. Whether you’re planning for retirement, funding education, or seeking passive income, our team is here to guide you at every step.
            </p>
          </section>
  
          {/* Call to Action */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Start Your Investment Journey</h2>
            <p className="text-yellow-200 mb-6">
              Unlock your financial potential by partnering with our experienced investment managers. Schedule a free
              consultation today and let’s grow your wealth—strategically and securely.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded transition">
              Book a Consultation
            </button>
          </section>
        </div>
      </div>
    );
  }
  