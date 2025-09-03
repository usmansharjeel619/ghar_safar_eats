import React, { useState } from "react";

const OrderForm = () => {
  // Delivery sectors
  const freeSectors = [
    "H13",
    "G13",
    "G11",
    "G10",
    "G9",
    "G8",
    "F11",
    "F10",
    "F8",
    "E11",
  ];
  const otherSectors = [
    "D-12",
    "E-7",
    "E-8",
    "E-9",
    "E-10",
    "F-5",
    "F-6",
    "F-7",
    "G-5",
    "G-6",
    "G-7",
    "G-12",
    "G-14",
    "H-8",
    "H-9",
    "H-10",
    "H-11",
    "H-12",
    "I-8",
    "I-9",
    "I-10",
    "I-11",
    "I-12",
  ];
  const extraDeliveryCharge = 700;

  const [selectedSector, setSelectedSector] = useState("free");
  const [selectedOtherSector, setSelectedOtherSector] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    mealPlan: "lunch",
    week: "1",
    paymentScreenshot: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      paymentScreenshot: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: "",
          phone: "",
          address: "",
          mealPlan: "lunch",
          week: "1",
          paymentScreenshot: null,
        });
      }, 3000);
    }, 2000);
  };

  const getPriceByPlan = (plan) => {
    switch (plan) {
      case "lunch":
        return "2,900";
      case "dinner":
        return "2,900";
      case "both":
        return "5,800";
      default:
        return "2,900";
    }
  };

  // Calculate total cost
  const getTotalCost = () => {
    const base = parseInt(getPriceByPlan(formData.mealPlan).replace(/,/g, ""));
    const weekCount = parseInt(formData.week);
    let delivery = 0;
    if (selectedSector === "other") {
      delivery = extraDeliveryCharge * weekCount;
    }
    return base * weekCount + delivery;
  };

  const getPlanDescription = (plan) => {
    switch (plan) {
      case "lunch":
        return "Lunch Only (Monday to Friday)";
      case "dinner":
        return "Dinner Only (Monday to Friday)";
      case "both":
        return "Lunch + Dinner (Monday to Friday)";
      default:
        return "Lunch Only (Monday to Friday)";
    }
  };

  return (
    <section id="order-form" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-secondary-custom mb-3">
            Place Your Order
          </h2>
          <p className="lead text-muted">
            Ready to taste home? Fill out the form below to get started
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            {submitSuccess ? (
              <div className="card border-0 shadow-lg">
                <div
                  className="card-body text-center p-5 text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
                  }}
                >
                  <div className="mb-4">
                    <i
                      className="bi bi-check-circle-fill"
                      style={{ fontSize: "4rem" }}
                    ></i>
                  </div>
                  <h3 className="fw-bold mb-3">Order Placed Successfully!</h3>
                  <p className="mb-4 fs-5">
                    Thank you for choosing Gharsafareats.pk. We'll contact you
                    shortly to confirm your order.
                  </p>
                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <a
                      href="https://wa.me/923292893399"
                      className="btn btn-light btn-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-whatsapp me-2"></i>
                      WhatsApp Us
                    </a>
                    <a
                      href="tel:+923292893399"
                      className="btn btn-outline-light btn-lg"
                    >
                      <i className="bi bi-telephone-fill me-2"></i>
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      {/* Personal Information */}
                      <div className="col-12">
                        <h4 className="fw-bold text-secondary-custom mb-3">
                          <i className="bi bi-person-fill me-2"></i>
                          Personal Information
                        </h4>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          className="form-control form-control-lg"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+92 xxx xxx xxxx"
                          style={{ borderRadius: "10px" }}
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label fw-semibold">
                          Address / Delivery Location *
                        </label>
                        <textarea
                          className="form-control form-control-lg"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          rows="3"
                          placeholder="Enter your complete address with landmarks"
                          style={{ borderRadius: "10px" }}
                        ></textarea>
                      </div>

                      {/* Delivery Area Selection */}
                      <div className="col-12">
                        <h4 className="fw-bold text-secondary-custom mb-3 mt-4">
                          <i className="bi bi-geo-alt-fill me-2"></i>
                          Select Your Delivery Area
                        </h4>
                        <div className="row g-2 mb-2">
                          {freeSectors.map((sector) => (
                            <div key={sector} className="col-md-2 col-4">
                              <button
                                type="button"
                                className={`btn w-100 ${
                                  selectedSector === sector
                                    ? "btn-primary-custom text-white"
                                    : "btn-outline-custom"
                                }`}
                                style={{
                                  borderRadius: "20px",
                                  fontWeight: "600",
                                  fontSize: "1rem",
                                }}
                                onClick={() => {
                                  setSelectedSector(sector);
                                  setSelectedOtherSector("");
                                }}
                              >
                                {sector}
                              </button>
                            </div>
                          ))}
                          <div className="col-md-3 col-6">
                            <button
                              type="button"
                              className={`btn w-100 ${
                                selectedSector === "other"
                                  ? "btn-primary-custom text-white"
                                  : "btn-outline-custom"
                              }`}
                              style={{
                                borderRadius: "20px",
                                fontWeight: "600",
                                fontSize: "1rem",
                              }}
                              onClick={() => setSelectedSector("other")}
                            >
                              None of these
                            </button>
                          </div>
                        </div>
                        {selectedSector === "other" && (
                          <div className="mt-3">
                            <label className="form-label fw-semibold">
                              Select Other Sector (PKR {extraDeliveryCharge}
                              /week extra)
                            </label>
                            <select
                              className="form-select"
                              value={selectedOtherSector}
                              onChange={(e) =>
                                setSelectedOtherSector(e.target.value)
                              }
                              style={{ borderRadius: "10px" }}
                            >
                              <option value="">Choose sector</option>
                              {otherSectors.map((sector) => (
                                <option key={sector} value={sector}>
                                  {sector}
                                </option>
                              ))}
                            </select>
                            <div className="mt-2 text-danger fw-semibold">
                              Extra delivery charge: PKR {extraDeliveryCharge}{" "}
                              per week
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Meal Plan Selection */}
                      <div className="col-12">
                        <h4 className="fw-bold text-secondary-custom mb-3 mt-4">
                          <i className="bi bi-calendar-week-fill me-2"></i>
                          Select Your Plan
                        </h4>
                      </div>

                      <div className="col-12">
                        <label className="form-label fw-semibold">
                          Meal Plan *
                        </label>
                        <div className="row g-3">
                          {[
                            {
                              value: "lunch",
                              label: "Lunch Only",
                              price: "2,900",
                            },
                            {
                              value: "dinner",
                              label: "Dinner Only",
                              price: "2,900",
                            },
                            {
                              value: "both",
                              label: "Lunch + Dinner",
                              price: "5,800",
                              popular: true,
                            },
                          ].map((plan) => (
                            <div key={plan.value} className="col-md-4">
                              <div className={`card h-100 border-light`}>
                                {plan.popular && (
                                  <div className="position-absolute top-0 start-50 translate-middle">
                                    <span className="badge bg-warning text-dark px-2 py-1 rounded-pill small">
                                      Popular
                                    </span>
                                  </div>
                                )}
                                <div className="card-body text-center p-3">
                                  <input
                                    type="radio"
                                    className="btn-check"
                                    name="mealPlan"
                                    id={`plan-${plan.value}`}
                                    value={plan.value}
                                    checked={formData.mealPlan === plan.value}
                                    onChange={handleInputChange}
                                  />
                                  <label
                                    className={`btn w-100 h-100 d-flex flex-column justify-content-center ${
                                      formData.mealPlan === plan.value
                                        ? "bg-primary-custom text-white"
                                        : "btn-outline-custom"
                                    }`}
                                    htmlFor={`plan-${plan.value}`}
                                    style={{ minHeight: "120px" }}
                                  >
                                    <h6 className="fw-bold mb-2">
                                      {plan.label}
                                    </h6>
                                    <div
                                      className={`fw-bold fs-5 ${
                                        formData.mealPlan === plan.value
                                          ? "text-white"
                                          : "text-primary-custom"
                                      }`}
                                    >
                                      PKR {plan.price}
                                    </div>
                                    <small
                                      className={
                                        formData.mealPlan === plan.value
                                          ? "text-white opacity-75"
                                          : "text-muted"
                                      }
                                    >
                                      /week
                                    </small>
                                  </label>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Week Selection *
                        </label>
                        <select
                          className="form-select form-select-lg"
                          name="week"
                          value={formData.week}
                          onChange={handleInputChange}
                          style={{ borderRadius: "10px" }}
                        >
                          <option value="1">1 Week</option>
                          <option value="2">2 Weeks</option>
                          <option value="3">3 Weeks</option>
                          <option value="4">4 Weeks</option>
                        </select>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Payment Screenshot *
                        </label>
                        <input
                          type="file"
                          className="form-control form-control-lg"
                          accept="image/jpeg,image/png,image/jpg"
                          onChange={handleFileChange}
                          required
                          style={{ borderRadius: "10px" }}
                        />
                        <small className="text-muted">
                          Upload payment screenshot (JPEG/PNG)
                        </small>
                      </div>

                      {/* Order Summary */}
                      <div className="col-12">
                        <div className="card bg-light border-0 mt-4">
                          <div className="card-body p-4">
                            <h5 className="fw-bold text-secondary-custom mb-3">
                              Order Summary
                            </h5>
                            <div className="d-flex justify-content-between mb-2">
                              <span>Plan:</span>
                              <span className="fw-semibold">
                                {getPlanDescription(formData.mealPlan)}
                              </span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                              <span>Week:</span>
                              <span className="fw-semibold">
                                Week {formData.week}
                              </span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                              <span>Duration:</span>
                              <span className="fw-semibold">
                                5 days (Mon-Fri)
                              </span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                              <span className="fs-5 fw-bold">
                                Total Amount:
                              </span>
                              <span className="fs-4 fw-bold text-primary-custom">
                                PKR {getTotalCost().toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Payment Instructions */}
                      <div className="col-12">
                        <div
                          className="alert border-0 mt-3"
                          style={{
                            backgroundColor: "#fff3cd",
                            borderColor: "#ffeaa7",
                          }}
                        >
                          <h6 className="fw-bold mb-2">
                            <i className="bi bi-info-circle-fill me-2"></i>
                            Payment Instructions
                          </h6>
                          <p className="mb-2">Please transfer the amount to:</p>
                          <ul className="mb-2">
                            <li>
                              <strong>Bank:</strong> [Bank Name]
                            </li>
                            <li>
                              <strong>Account:</strong> [Account Number]
                            </li>
                            <li>
                              <strong>Name:</strong> Gharsafareats.pk
                            </li>
                          </ul>
                          <small className="text-muted">
                            After payment, upload the screenshot above and
                            submit your order.
                          </small>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          className="btn btn-primary-custom btn-lg px-5 py-3 text-white"
                          disabled={isSubmitting}
                          style={{ borderRadius: "15px" }}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2"></span>
                              Processing Order...
                            </>
                          ) : (
                            <>
                              <i className="bi bi-cart-check-fill me-2"></i>
                              Place Order
                            </>
                          )}
                        </button>

                        <div className="mt-3">
                          <small className="text-muted">
                            By placing an order, you agree to our terms and
                            conditions
                          </small>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Alternative */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-6 text-center">
            <div className="p-4 bg-light rounded-4">
              <h5 className="fw-bold text-secondary-custom mb-3">
                Prefer to order directly?
              </h5>
              <p className="text-muted mb-3">
                Contact us directly for immediate assistance
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a
                  href="https://wa.me/923292893399"
                  className="btn btn-success d-flex align-items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                  WhatsApp: +92 329 289 3399
                </a>
                <a
                  href="tel:+923292893399"
                  className="btn btn-primary-custom d-flex align-items-center gap-2 text-white"
                >
                  <i className="bi bi-telephone-fill"></i>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
