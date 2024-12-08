import React from "react";
import "./../styles/AnotherPage.css";
import Card from "../components/AnotherPageAdilhan/Card";
// import image from './AnotherPageAdilhan/77ae880fca9f6acba65021352c5f78d5.png';
const image = './AnotherPageAdilhan/77ae880fca9f6acba65021352c5f78d5.png' ;
const AnotherPage = () => 
    <div>
    <h1 style={{textAlign:"left"}}>How to forecast business <br></br> finances with gini</h1>
<Card src="src\components\FeatureAdilhan\IMAGE.png" heading="Run Instant Analysis"
text="Quick sync your accounting software to experience fast-track automation that produces power-packed financial reports. S
elect parameters to run forecasts and access relevant metrics."/>;

<Card src="../components/AnotherPageAdilhan/IMAGE.jpg"  heading="Design and Forecast" 
text="Find all of your data in a flexible spreadsheet for easy viewing and custom modeling. Study real-time repor
ts and quickly forecast with simplified tools that put you in charge."/>


<Card src="../components/AnotherPageAdilhan/IMAGE(1).jpg" heading="Collaborate with Purpose"
text="Enjoy one-click sharing with interactive capabilities that bring your entire team to the same page. Collaboratively map out finan
cial plans with the purpose-driven data you need to make big decisions."/>

<div className="GoogleSheets">
    <h1>Automated flows and templates for Google Sheets</h1>
    <h4 className="want">I want to...</h4>
     <div className="SheetsCard">
        <img src="#"/>
        <span>Automate my cash flow forecasting</span>
     </div>
     <div className="SheetsCard">
        <img src="#"/>
        <span>Automate my cash flow forecasting</span>
     </div>
     <div className="SheetsCard">
        <img src="#"/>
        <span>Automate my cash flow forecasting</span>
     </div>
     <div className="SheetsCard">
        <img src="#"/>
        <span>Automate my cash flow forecasting</span>
     </div>
     <div className="SheetsCard">
        <img src="#"/>
        <span>Automate my cash flow forecasting</span>
     </div>
     <h5>See more models and reports</h5>
     <img src={image} className="lastImage"/>
</div>

        
   </div>
   
export default AnotherPage;