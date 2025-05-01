export default function FinancialPlanningPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="text-yellow-400 p-6 max-w-4xl mx-auto py-10">
        <h1 className="text-4xl font-bold text-yellow-500 mb-6 border-b border-yellow-600 pb-2">
          Financial Planning
        </h1>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Introduction</h2>
          <p className="text-yellow-200 mb-4">
            Financial planning is a comprehensive, dynamic process designed to help individuals, families, and businesses
            achieve their financial goals. It involves evaluating current financial status, determining objectives, and devising
            strategic plans to manage income, expenses, investments, taxes, and insurance efficiently.
          </p>
        </section>

        {/* Importance */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Importance of Financial Planning</h2>
          <p className="text-yellow-200 mb-4">
            A well-structured financial plan is crucial for creating a secure financial future. It enables informed decisions,
            fosters disciplined saving, and ensures preparedness for life's uncertainties such as medical emergencies, job losses,
            or economic downturns.
          </p>
        </section>

        {/* Key Components */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Key Components</h2>
          <ul className="list-disc list-inside text-yellow-200 space-y-2 mb-4">
            <li><strong className="text-yellow-500">Budgeting & Saving:</strong> Track spending and allocate savings.</li>
            <li><strong className="text-yellow-500">Debt Management:</strong> Reduce high-interest debt and manage loans responsibly.</li>
            <li><strong className="text-yellow-500">Goal Setting:</strong> For goals like buying a house, education, travel, or retirement.</li>
            <li><strong className="text-yellow-500">Emergency Fund:</strong> Save 3-6 months of expenses for the unexpected.</li>
            <li><strong className="text-yellow-500">Investment Planning:</strong> Strategies to grow wealth over time.</li>
            <li><strong className="text-yellow-500">Insurance Coverage:</strong> Protect against financial risks and liabilities.</li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Benefits</h2>
          <ul className="list-disc list-inside text-yellow-200 space-y-2 mb-4">
            <li>Clear financial direction</li>
            <li>Better control over income and expenses</li>
            <li>Improved investment strategies</li>
            <li>Peace of mind and financial security</li>
            <li>Preparation for unexpected events</li>
            <li>Structured approach to wealth building</li>
          </ul>
        </section>

        {/* Our Approach */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Our Approach</h2>
          <p className="text-yellow-200 mb-4">
            At <span className="text-yellow-500 font-bold">Global Consultant</span>, we tailor financial planning solutions to your unique needs and goals.
            Our advisors work closely with you to align strategies with your values and priorities.
          </p>
        </section>

        {/* CTA */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Ready to Start?</h2>
          <p className="text-yellow-200 mb-6">
            Take the first step toward financial confidence by scheduling a consultation with one of our experienced financial planners.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded transition">
            Contact Us Today
          </button>
        </section>
      </div>
    </div>
  );
}
