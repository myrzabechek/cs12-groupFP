import React, { useState } from "react";
import "./../styles/FeaturesPage.css";
import chartImage from '../image/key_metrics.png';

const FeaturesPage = () => {
  const [activeTab, setActiveTab] = useState("Finance teams");

  return (
    <div className="app">
      <header className="header">
        <h1>
          You know the business.<br />
          We know the numbers.
        </h1>
        <div className="menu">
          {["Finance teams", "Investors", "Accountants"].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "menu-button active" : "menu-button"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      <section className="content">
        <div className="info">
          <h2>gini provides flexible, shareable financial forecasting for finance teams</h2>
          <p>
            Easily consolidate and create financial reports and expense forecasts.
            With gini, financial data automatically syncs with your accounting software.
            Easily share reports with founders and investors so you can invest more time in strategic planning.
          </p>
          <button className="try-button">Try for free</button>
        </div>
        <div className="metrics">
          <h3>Key Metrics</h3>
          <div className="chart-placeholder">
            <img src={chartImage} alt="Chart Image"/>
          </div>
        </div>
      </section>

      <section className="companies">
        <h2>Join &gt;700 companies that save time with gini</h2>
        <div className="testimonials">
          <div className="testimonial">
            <h4>Gerardo Salandra</h4>
            <p>"A must-have for any SaaS company"</p>
            <p>
              This tool completely blew my mind...
              Reports are updated daily—A dream come true.
            </p>
          </div>
          <div className="testimonial">
            <h4>Victor Lake</h4>
            <p>"Easy Financial predictions and evaluations"</p>
            <p>
              We have implemented this tool and it's working fine...
              It saves us time and improves accuracy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
