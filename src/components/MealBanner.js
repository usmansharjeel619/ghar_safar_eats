import React, { useState } from "react";

const MealBanner = () => {
  const [activeTab, setActiveTab] = useState("lunch");

  const meals = {
    lunch: [
      { name: "Chana Pulao", description: "Pure homemade flavor", image: "🍛" },
      { name: "Chicken Korma", description: "Comfort on a plate", image: "🍗" },
      { name: "Aloo Gosht", description: "Rich taste of home", image: "🍖" },
      {
        name: "Vegetable Curry",
        description: "Fresh and healthy",
        image: "🥘",
      },
      { name: "Dal Chawal", description: "Classic comfort food", image: "🍚" },
    ],
    dinner: [
      { name: "Haleem", description: "Traditional favorite", image: "🍲" },
      { name: "Fried Rice", description: "Perfectly seasoned", image: "🍚" },
      { name: "Aloo Matar", description: "Home-style cooking", image: "🥔" },
      { name: "Daal Channa", description: "Protein-rich delight", image: "🫘" },
      {
        name: "Chicken Biryani",
        description: "Aromatic and flavorful",
        image: "🍛",
      },
    ],
    both: [
      {
        name: "Full Day Plan",
        description: "Lunch + Dinner combo",
        image: "🍽️",
      },
      {
        name: "Variety Pack",
        description: "Different meals daily",
        image: "🥘",
      },
      {
        name: "Complete Nutrition",
        description: "Balanced meals",
        image: "🍱",
      },
    ],
  };

  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-secondary-custom mb-3">
            What's cooking this week?
          </h2>
          <p className="lead text-muted">
            Discover our delicious homemade meals prepared with love
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6">
            <ul className="nav nav-pills nav-justified bg-white rounded-pill p-1 shadow-sm">
              {Object.keys(meals).map((tab) => (
                <li key={tab} className="nav-item">
                  <button
                    className={`nav-link rounded-pill fw-semibold text-capitalize ${
                      activeTab === tab ? "active" : "text-secondary-custom"
                    }`}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      backgroundColor:
                        activeTab === tab ? "#EC6D00" : "transparent",
                      border: "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {tab === "both" ? "Lunch + Dinner" : tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Meal Cards */}
        <div className="row g-4">
          {meals[activeTab].map((meal, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card card-custom h-100 border-0">
                <div className="card-body text-center p-4">
                  <div
                    className="mb-4 mx-auto d-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#f8f9fa",
                      border: "2px solid #EC6D00",
                      borderRadius: "50%",
                      fontSize: "2.5rem",
                    }}
                  >
                    {meal.image}
                  </div>
                  <h5 className="card-title fw-bold text-secondary-custom mb-2">
                    {meal.name}
                  </h5>
                  <p className="card-text text-muted">{meal.description}</p>
                  <div className="mt-3">
                    <span className="badge bg-primary-custom px-3 py-2 rounded-pill">
                      Homemade
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ready to taste home section - Clean professional design */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm bg-white">
              <div className="card-body p-5 text-center">
                <div className="mb-4">
                  <div
                    className="mx-auto d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#EC6D00",
                      borderRadius: "50%",
                    }}
                  >
                    <i className="bi bi-house-heart-fill text-white fs-2"></i>
                  </div>
                </div>
                <h4 className="fw-bold text-secondary-custom mb-3">
                  Ready to taste home?
                </h4>
                <p className="text-muted mb-4">
                  Join hundreds of satisfied customers who trust us for their
                  daily meals
                </p>
                <button
                  className="btn btn-primary-custom btn-lg px-4 fw-semibold"
                  onClick={() => {
                    const element = document.getElementById("weekly-plans");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{ borderRadius: "25px" }}
                >
                  <i className="bi bi-arrow-right-circle me-2"></i>
                  View All Plans
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealBanner;
