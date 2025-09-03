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
                className={`card pricing-card h-100 position-relative ${
                  plan.popular ? "border-warning" : "border-0"
                }`}
                style={{ marginTop: "20px" }}
              >
                {plan.popular && (
                  <div
                    className="position-absolute top-0 start-50 translate-middle-x"
                    style={{ top: "-12px !important" }}
                  >
                    <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-semibold shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <div
                  className={`card-body text-center ${
                    plan.popular ? "pt-4" : "p-4"
                  }`}
                >
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
            <div className="card border-0 shadow-sm bg-white">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h3 className="fw-bold text-secondary-custom mb-4">
                    Weekly Menu
                  </h3>

                  {/* Week Selection Tabs - Clean Design */}
                  <div className="d-flex justify-content-center mb-4">
                    <div
                      className="bg-light rounded-pill p-1 shadow-sm"
                      style={{ display: "inline-flex" }}
                    >
                      {[1, 2, 3, 4].map((week) => (
                        <button
                          key={week}
                          type="button"
                          className={`btn rounded-pill px-4 py-2 mx-1 fw-semibold ${
                            selectedWeek === week
                              ? "btn-primary-custom text-white"
                              : "btn-light text-secondary-custom"
                          }`}
                          onClick={() => setSelectedWeek(week)}
                          style={{
                            border: "none",
                            transition: "all 0.3s ease",
                            backgroundColor:
                              selectedWeek === week ? "#EC6D00" : "transparent",
                          }}
                        >
                          Week {week}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Menu Table - Professional Design */}
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th
                          className="text-white text-center py-3 fw-bold"
                          style={{
                            borderRadius: "10px 0 0 10px",
                            width: "20%",
                            fontSize: "1.25rem",
                            background:
                              "linear-gradient(90deg, #EC6D00 0%, #ff8c42 100%)",
                            boxShadow: "0 2px 8px rgba(236,109,0,0.15)",
                            letterSpacing: "1px",
                          }}
                        >
                          Day
                        </th>
                        <th
                          className="text-white text-center py-3 fw-bold"
                          style={{
                            width: "40%",
                            fontSize: "1.25rem",
                            background:
                              "linear-gradient(90deg, #EC6D00 0%, #ff8c42 100%)",
                            boxShadow: "0 2px 8px rgba(236,109,0,0.15)",
                            letterSpacing: "1px",
                          }}
                        >
                          Lunch
                        </th>
                        <th
                          className="text-white text-center py-3 fw-bold"
                          style={{
                            borderRadius: "0 10px 10px 0",
                            width: "40%",
                            fontSize: "1.25rem",
                            background:
                              "linear-gradient(90deg, #EC6D00 0%, #ff8c42 100%)",
                            boxShadow: "0 2px 8px rgba(236,109,0,0.15)",
                            letterSpacing: "1px",
                          }}
                        >
                          Dinner
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {weeklyMenus[selectedWeek].map((menu, index) => (
                        <tr key={index}>
                          <td
                            className="bg-light text-center py-3 fw-semibold text-secondary-custom"
                            style={{
                              borderRadius:
                                index === 0
                                  ? "10px 0 0 0"
                                  : index === 4
                                  ? "0 0 0 10px"
                                  : "0",
                              borderBottom:
                                index < 4 ? "2px solid white" : "none",
                            }}
                          >
                            {menu.day.substring(0, 3)}
                          </td>
                          <td
                            className="bg-light text-center py-3 text-muted"
                            style={{
                              borderBottom:
                                index < 4 ? "2px solid white" : "none",
                              textTransform: "capitalize",
                            }}
                          >
                            {menu.lunch}
                          </td>
                          <td
                            className="bg-light text-center py-3 text-muted"
                            style={{
                              borderRadius:
                                index === 0
                                  ? "0 10px 0 0"
                                  : index === 4
                                  ? "0 0 10px 0"
                                  : "0",
                              borderBottom:
                                index < 4 ? "2px solid white" : "none",
                              textTransform: "capitalize",
                            }}
                          >
                            {menu.dinner}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Menu Features */}
                <div className="row mt-4">
                  <div className="col-md-4 text-center">
                    <div className="p-3">
                      <div
                        className="mx-auto d-flex align-items-center justify-content-center mb-2"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#f8f9fa",
                          borderRadius: "50%",
                        }}
                      >
                        <i className="bi bi-clock text-primary-custom fs-5"></i>
                      </div>
                      <small className="text-muted fw-semibold">
                        Monday to Friday
                      </small>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="p-3">
                      <div
                        className="mx-auto d-flex align-items-center justify-content-center mb-2"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#f8f9fa",
                          borderRadius: "50%",
                        }}
                      >
                        <i className="bi bi-heart text-primary-custom fs-5"></i>
                      </div>
                      <small className="text-muted fw-semibold">
                        Home-style Cooking
                      </small>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="p-3">
                      <div
                        className="mx-auto d-flex align-items-center justify-content-center mb-2"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#f8f9fa",
                          borderRadius: "50%",
                        }}
                      >
                        <i className="bi bi-truck text-primary-custom fs-5"></i>
                      </div>
                      <small className="text-muted fw-semibold">
                        Fresh Daily Delivery
                      </small>
                    </div>
                  </div>
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
