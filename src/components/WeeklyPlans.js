import React, { useState } from "react";

const WeeklyPlans = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);

  const pricingPlans = [
    {
      title: "Lunch Only",
      price: "2,900",
      period: "/week",
      description: "Perfect for office workers",
      features: [
        "Monday to Friday",
        "Fresh daily meals",
        "Timely delivery",
        "Home-style cooking",
      ],
      color: "primary",
    },
    {
      title: "Dinner Only",
      price: "2,900",
      period: "/week",
      description: "Ideal for evening comfort",
      features: [
        "Monday to Friday",
        "Hearty portions",
        "Late delivery available",
        "Comfort food",
      ],
      color: "secondary",
    },
    {
      title: "Lunch + Dinner",
      price: "5,800",
      period: "/week",
      description: "Complete meal solution",
      features: [
        "Monday to Friday",
        "Two meals daily",
        "Maximum savings",
        "Full nutrition",
      ],
      color: "success",
      popular: true,
    },
  ];

  const weeklyMenus = {
    1: [
      { day: "Monday", lunch: "Chana Pulao", dinner: "Haleem" },
      { day: "Tuesday", lunch: "Chicken Korma", dinner: "Fried Rice" },
      { day: "Wednesday", lunch: "Vegetable Curry", dinner: "Chicken Korma" },
      { day: "Thursday", lunch: "Aloo Gosht", dinner: "Aloo Matar" },
      { day: "Friday", lunch: "Chicken Biryani", dinner: "Daal Channa" },
    ],
    2: [
      { day: "Monday", lunch: "Fried Rice", dinner: "Aloo Gosht" },
      { day: "Tuesday", lunch: "Chicken Korma", dinner: "Haleem" },
      { day: "Wednesday", lunch: "Vegetable Curry", dinner: "Chicken Biryani" },
      { day: "Thursday", lunch: "Aloo Matar Keema", dinner: "Daal Channa" },
      { day: "Friday", lunch: "Beef Pulao", dinner: "Aloo Matar" },
    ],
    3: [
      { day: "Monday", lunch: "Fried Rice", dinner: "Haleem" },
      { day: "Tuesday", lunch: "Chicken Korma", dinner: "Chana Pulao" },
      { day: "Wednesday", lunch: "Vegetable Curry", dinner: "Chicken Korma" },
      { day: "Thursday", lunch: "Aloo Gosht", dinner: "Daal Channa" },
      { day: "Friday", lunch: "Chicken Biryani", dinner: "Aloo Matar Keema" },
    ],
    4: [
      { day: "Monday", lunch: "Chicken Biryani", dinner: "Vegetable Curry" },
      { day: "Tuesday", lunch: "Chicken Korma", dinner: "Haleem" },
      { day: "Wednesday", lunch: "Daal Chawal", dinner: "Aloo Gosht" },
      { day: "Thursday", lunch: "Aloo Matar Keema", dinner: "Daal Channa" },
      { day: "Friday", lunch: "Beef Pulao", dinner: "Aloo Matar" },
    ],
  };

  return (
    <section id="weekly-plans" className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-secondary-custom mb-3">
            Pick your plan — simple, flexible, tasty.
          </h2>
          <p className="lead text-muted col-lg-8 mx-auto">
            Order for one week at a time (Monday to Friday). Minimum order: 1
            week. Change your menu every week or stick with your favorite.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="row g-4 mb-5">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className={`card pricing-card h-100 ${
                  plan.popular ? "border-warning" : "border-0"
                }`}
              >
                {plan.popular && (
                  <div className="position-absolute top-0 start-50 translate-middle">
                    <span className="badge bg-warning text-dark px-3 py-2 rounded-pill">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="card-body text-center p-4">
                  <h4 className="card-title fw-bold text-secondary-custom">
                    {plan.title}
                  </h4>
                  <p className="text-muted mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="display-6 fw-bold text-primary-custom">
                      PKR {plan.price}
                    </span>
                    <span className="fs-6 text-muted">{plan.period}</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`btn ${
                      plan.popular ? "btn-primary-custom" : "btn-outline-custom"
                    } w-100`}
                    onClick={() => {
                      const element = document.getElementById("order-form");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Menu */}
        <div className="row">
          <div className="col-12">
            <div className="card border-0 shadow-lg">
              <div className="card-header bg-secondary-custom text-white text-center py-4">
                <h3 className="mb-3 fw-bold">Weekly Menu (Day & Night)</h3>
                <div className="btn-group" role="group">
                  {[1, 2, 3, 4].map((week) => (
                    <button
                      key={week}
                      type="button"
                      className={`btn ${
                        selectedWeek === week
                          ? "btn-warning"
                          : "btn-outline-light"
                      }`}
                      onClick={() => setSelectedWeek(week)}
                    >
                      Week {week}
                    </button>
                  ))}
                </div>
              </div>
              <div className="card-body p-4">
                <div className="row g-3">
                  {weeklyMenus[selectedWeek].map((menu, index) => (
                    <div key={index} className="col-lg-6">
                      <div className="card bg-light border-0 h-100">
                        <div className="card-body">
                          <div className="d-flex align-items-center mb-3">
                            <div
                              className="rounded-circle bg-primary-custom text-white d-flex align-items-center justify-content-center me-3"
                              style={{ width: "40px", height: "40px" }}
                            >
                              <span className="fw-bold">
                                {menu.day.charAt(0)}
                              </span>
                            </div>
                            <h5 className="mb-0 fw-bold text-secondary-custom">
                              {menu.day}
                            </h5>
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <div className="text-center p-3 bg-white rounded-3">
                                <div className="text-warning mb-2">☀️</div>
                                <h6 className="fw-semibold mb-1">Lunch</h6>
                                <p className="small text-muted mb-0">
                                  {menu.lunch}
                                </p>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="text-center p-3 bg-white rounded-3">
                                <div className="text-info mb-2">🌙</div>
                                <h6 className="fw-semibold mb-1">Dinner</h6>
                                <p className="small text-muted mb-0">
                                  {menu.dinner}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyPlans;
