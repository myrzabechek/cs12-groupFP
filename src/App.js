import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import ResourcesPage from "./pages/ResourcesPage";
import AnotherPage from "./pages/AnotherPage";
import ExpenseTracker from "./pages/ExpenseTracker";


const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/another" element={<AnotherPage />} />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
     </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;