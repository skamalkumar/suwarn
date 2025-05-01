export default function RetirementPlanningPage() {
    return (
      <div className="bg-black min-h-screen">
        <div className="text-yellow-400 p-6 max-w-4xl mx-auto py-10">
          <h1 className="text-4xl font-bold text-yellow-500 mb-6 border-b border-yellow-600 pb-2">
            Retirement Planning
          </h1>
  
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Introduction</h2>
            <p className="text-yellow-200 mb-4">
              Retirement planning is the process of determining your retirement income goals and the actions needed to
              achieve them. It involves assessing your current financial standing, estimating future needs, and building a
              roadmap to ensure a comfortable and secure post-retirement life.
            </p>
          </section>
  
          {/* Why Retirement Planning is Essential */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Why Retirement Planning is Essential</h2>
            <p className="text-yellow-200 mb-4">
              With increasing life expectancy and rising living costs, relying solely on pensions or government support
              is not enough. A robust retirement plan helps you maintain your lifestyle, handle healthcare costs, and
              remain financially independent in your golden years.
            </p>
          </section>
  
          {/* Key Elements */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Key Elements of Retirement Planning</h2>
            <ul className="list-disc list-inside text-yellow-200 space-y-2 mb-4">
              <li><strong className="text-yellow-500">Retirement Goals:</strong> Identifying your desired retirement age and lifestyle preferences.</li>
              <li><strong className="text-yellow-500">Income Sources:</strong> Estimating pensions, savings, investments, and other post-retirement income.</li>
              <li><strong className="text-yellow-500">Expense Forecasting:</strong> Projecting future costs including inflation, healthcare, travel, and hobbies.</li>
              <li><strong className="text-yellow-500">Investment Strategy:</strong> Aligning investments with your time horizon and risk tolerance.</li>
              <li><strong className="text-yellow-500">Contingency Planning:</strong> Preparing for medical emergencies, long-term care, or market downturns.</li>
            </ul>
          </section>
  
          {/* Benefits */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Benefits of Early Retirement Planning</h2>
            <ul className="list-disc list-inside text-yellow-200 space-y-2 mb-4">
              <li>Financial independence after retirement</li>
              <li>Reduced stress and uncertainty in later life</li>
              <li>Optimized tax-saving opportunities</li>
              <li>Improved control over lifestyle choices</li>
              <li>Peace of mind for you and your loved ones</li>
            </ul>
          </section>
  
          {/* Our Approach */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Our Retirement Planning Approach</h2>
            <p className="text-yellow-200 mb-4">
              At <span className="text-yellow-500 font-bold">Global Consultant</span>, we create personalized retirement roadmaps tailored to your aspirations and
              financial realities. Our planners ensure you make smart choices today that translate to freedom and fulfillment
              tomorrow.
            </p>
          </section>
  
          {/* Call to Action */}
          <section>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Plan for a Future You Deserve</h2>
            <p className="text-yellow-200 mb-6">
              Whether retirement is decades away or just around the corner, now is the best time to start. Book a session
              with our experts and build the foundation for your worry-free future.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded transition">
              Schedule a Session
            </button>
          </section>
        </div>
      </div>
    );
  }
  