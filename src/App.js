import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MealBanner from "./components/MealBanner";
import WeeklyPlans from "./components/WeeklyPlans";
import AboutUs from "./components/AboutUs";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <MealBanner />
      <WeeklyPlans />
      <AboutUs />
      <Reviews />
      <FAQ />
      <OrderForm />
      <Footer />
    </div>
  );
}

export default App;
