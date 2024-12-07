import React from "react";
import "./../styles/ResourcesPage.css";

const ResourcesPage = () => {
  return (
    <div className="container">
      <section className="articles-section">
        <h2>Recent articles and resources</h2>
        <div className="articles">
          <ArticleCard
            title="EPM vs. ERP: Optimize your account and finance operations"
            image={require('../image/1_1.png')}
          />
          <ArticleCard
            title="Understanding actual budget and variance"
            image={require('../image/2_1.png')}
          />
          <ArticleCard
            title="Top 19 small business tools that you need in 2023"
            image={require('../image/3_1.png')}
          />
        </div>
      </section>

      <section className="help-section">
        <h2>Need extra help staying on top of your finances?</h2>
        <p>Our expert bookkeepers and advisors are here to help</p>
        <button>Try for free</button>
      </section>
    </div>
  );
};

const ArticleCard = ({ title, image }) => {
  return (
    <div className="article-card">
      <img src={image} alt="Article preview" />
      <h3>{title}</h3>
      <a href="#">Read more</a>
    </div>
  );
};

export default ResourcesPage;