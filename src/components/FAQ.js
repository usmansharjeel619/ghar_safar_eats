import React, { useState } from "react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What's the minimum order?",
      answer:
        "One week (Monday to Friday). We believe in providing consistent, quality meals throughout your work week.",
    },
    {
      question: "How do I pay?",
      answer:
        "Bank transfer or mobile wallet. Simply upload your payment screenshot when placing the order through our website.",
    },
    {
      question: "Can I change meals mid-week?",
      answer:
        "Not mid-week, but you can switch menus every week. This helps us maintain freshness and plan our cooking schedule effectively.",
    },
    {
      question: "Where do you deliver?",
      answer:
        "We deliver to offices, hostels, and universities within city limits. Free delivery areas include H13, H12, H11, H10, H9, H8, G13, G11, G10, G9, G8, G7, G6, F11, F10, F8, E11. Other I or D sectors have a PKR 1,050/week delivery charge.",
    },
    {
      question: "What time do you deliver?",
      answer:
        "Lunch is delivered between 12:00 PM - 1:30 PM, and dinner between 7:00 PM - 8:30 PM. We ensure your meals arrive fresh and on time.",
    },
    {
      question: "Are the meals healthy?",
      answer:
        "Absolutely! All our meals are prepared with fresh ingredients, balanced nutrition, and traditional home-style cooking methods. No preservatives or artificial additives.",
    },
    {
      question: "Can I customize my meals?",
      answer:
        "While we have set weekly menus, you can choose between lunch only, dinner only, or both. You can also switch between different weekly menu options.",
    },
    {
      question: "What if I'm not satisfied?",
      answer:
        "Customer satisfaction is our priority. If you're not happy with your meal, please contact us immediately and we'll make it right.",
    },
  ];

  const feedbackSection = {
    title: "Have a suggestion for us?",
    description:
      "Tell us what you'd love to eat, and we'll try to add it to our menu.",
  };

  return (
    <section id="faq" className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-secondary-custom mb-3">
            Frequently Asked Questions
          </h2>
          <p className="lead text-muted">
            Everything you need to know about our service
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion accordion-flush" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div key={index} className="accordion-item border-0 mb-3">
                  <div className="card card-custom border-0">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          openFAQ === index ? "" : "collapsed"
                        } fw-semibold`}
                        type="button"
                        onClick={() =>
                          setOpenFAQ(openFAQ === index ? -1 : index)
                        }
                        style={{
                          backgroundColor:
                            openFAQ === index ? "#EC6D00" : "white",
                          color: openFAQ === index ? "white" : "#0C1A2D",
                          border: "none",
                          borderRadius: "15px 15px 0 0",
                          boxShadow: "none",
                        }}
                      >
                        <span className="me-3">
                          <i
                            className={`bi ${
                              openFAQ === index
                                ? "bi-question-circle-fill"
                                : "bi-question-circle"
                            }`}
                          ></i>
                        </span>
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${
                        openFAQ === index ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body p-4">
                        <div className="d-flex">
                          <div className="me-3 mt-1">
                            <i className="bi bi-arrow-right-circle-fill text-primary-custom"></i>
                          </div>
                          <p className="text-muted mb-0 lh-lg">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Have a suggestion for us? - Clean professional design */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm bg-white">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div
                    className="mx-auto d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#f8f9fa",
                      border: "2px solid #EC6D00",
                      borderRadius: "50%",
                    }}
                  >
                    <i
                      className="bi bi-lightbulb-fill text-primary-custom"
                      style={{ fontSize: "2.5rem" }}
                    ></i>
                  </div>
                  <h3 className="fw-bold text-secondary-custom mb-3">
                    {feedbackSection.title}
                  </h3>
                  <p className="text-muted mb-4 fs-5">
                    {feedbackSection.description}
                  </p>
                </div>

                <form className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Your Name"
                      required
                      style={{ borderRadius: "15px" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Your Email"
                      required
                      style={{ borderRadius: "15px" }}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control form-control-lg"
                      rows="4"
                      placeholder="What dish would you like us to add to our menu?"
                      required
                      style={{ borderRadius: "15px" }}
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary-custom btn-lg px-5 fw-semibold text-white"
                      style={{ borderRadius: "25px" }}
                    >
                      <i className="bi bi-send-fill me-2"></i>
                      Submit Suggestion
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="row justify-content-center mt-4">
          <div className="col-lg-6 text-center">
            <p className="text-muted mb-3">Still have questions?</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a
                href="tel:+923292893399"
                className="btn btn-primary-custom btn-lg d-flex align-items-center gap-2 text-white"
                style={{ borderRadius: "25px" }}
              >
                <i className="bi bi-telephone-fill"></i>
                Call Us
              </a>
              <a
                href="https://wa.me/923292893399"
                className="btn btn-success btn-lg d-flex align-items-center gap-2"
                style={{ borderRadius: "25px" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
