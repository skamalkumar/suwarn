export default function InvestmentAnalysisPage() {
    return (
      <div className="bg-black min-h-screen">
        <div className="text-yellow-400 p-6 max-w-4xl mx-auto py-10">
          <h1 className="text-4xl font-bold text-yellow-500 mb-6 border-b border-yellow-600 pb-2">
            Investment Analysis
          </h1>
  
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Introduction</h2>
            <p className="text-yellow-200 mb-4">
              Investment analysis is the process of evaluating financial assets, such as stocks, bonds, mutual funds, or real estate,
              to determine their potential for growth, income, or value appreciation. It helps investors make informed decisions
              aligned with their financial goals and risk tolerance.
            </p>
          </section>
  
          {/* Why Investment Analysis Matters */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Why It Matters</h2>
            <p className="text-yellow-200 mb-4">
              Proper investment analysis reduces uncertainty, manages risk, and enhances long-term returns. Whether you're a
              first-time investor or managing a diversified portfolio, understanding where your money goes is essential to building
              sustainable wealth.
            </p>
          </section>
  
          {/* Types of Investment Analysis */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Types of Analysis We Use</h2>
            <ul className="list-disc list-inside text-yellow-200 space-y-2 mb-4">
              <li><strong className="text-yellow-500">Fundamental Analysis:</strong> Examining a company's financials, industry trends, and economic indicators.</li>
              <li><strong className="text-yellow-500">Technical Analysis:</strong> Using charts, patterns, and indicators to predict future price movements.</li>
              <li><strong className="text-yellow-500">Quantitative Analysis:</strong> Leveraging data models, ratios, and algorithms for objective evaluation.</li>
              <li><strong className="text-yellow-500">Qualitative Analysis:</strong> Assessing leadership quality, brand value, and competitive positioning.</li>
            </ul>
          </section>
  
          {/* Benefits of Investment Analysis */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Benefits of Smart Analysis</h2>
            <ul className="list-disc list-inside text-yellow-200 space-y-2 mb-4">
              <li>Identifies undervalued or high-potential assets</li>
              <li>Improves risk-adjusted returns</li>
              <li>Optimizes asset allocation and diversification</li>
              <li>Informs buy, hold, or sell decisions</li>
              <li>Aligns investments with personal goals and market conditions</li>
            </ul>
          </section>
  
          {/* Our Approach */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Our Approach to Investment Analysis</h2>
            <p className="text-yellow-200 mb-4">
              At <span className="text-yellow-500 font-bold">Global Consultant</span>, we use a hybrid approach combining human expertise and advanced analytics
              to assess your investments. Our recommendations are tailored, unbiased, and built to support long-term success.
            </p>
          </section>
  
          {/* CTA */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Ready to Optimize Your Portfolio?</h2>
            <p className="text-yellow-200 mb-6">
              Let us help you uncover hidden opportunities and avoid common pitfalls. Book a consultation and elevate your
              investment game with confidence.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded transition">
              Start Your Analysis
            </button>
          </section>
        </div>
      </div>
    );
  }
  