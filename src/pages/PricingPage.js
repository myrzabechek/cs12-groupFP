import React from "react";
import "./../styles/PricingPage.css";

const PricingPage = () => {
  return (
    <div className="pricing-container">
      <header className="pricing-header">
        <h1>Flexible Pricing Plans</h1>
        <p>Choose a plan tailored to your business goals.</p>
      </header>

      <section className="pricing-plans">
        <PlanCard
          title="Starter"
          price="$19/month"
          features={[
            "Up to 3 users",
            "Basic automation",
            "Email support",
          ]}
          buttonText="Get Started"
        />
        <PlanCard
          title="Professional"
          price="$49/month"
          features={[
            "Up to 10 users",
            "Advanced automation",
            "Priority support",
            "Custom reports",
          ]}
          isPopular
          buttonText="Get Started"
        />
        <PlanCard
          title="Enterprise"
          price="Custom Pricing"
          features={[
            "Unlimited users",
            "Full automation",
            "Dedicated account manager",
            "Custom integrations",
          ]}
          buttonText="Contact Sales"
        />
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>Can I cancel anytime?</h3>
          <p>Yes, you can cancel your subscription at any time without penalties.</p>
        </div>
        <div className="faq-item">
          <h3>Is there a free trial?</h3>
          <p>We offer a 14-day free trial for all plans. No credit card required.</p>
        </div>
        <div className="faq-item">
          <h3>Do you offer annual discounts?</h3>
          <p>Yes, annual plans come with a 20% discount.</p>
        </div>
      </section>
    </div>
  );
};

const PlanCard = ({ title, price, features, isPopular, buttonText }) => {
  return (
    <div className={`plan-card ${isPopular ? "popular" : ""}`}>
      {isPopular && <span className="badge">Most Popular</span>}
      <h2>{title}</h2>
      <p className="price">{price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="plan-button">{buttonText}</button>
    </div>
  );
};

export default PricingPage;
