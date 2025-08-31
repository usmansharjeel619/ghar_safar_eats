import React from "react";

const Reviews = () => {
  const textReviews = [
    {
      text: "Finally, I get home-style food at work. Can't recommend it enough!",
      author: "Ahmed R.",
      rating: 5,
      role: "Office Worker",
    },
    {
      text: "Meals taste like mom made them. Five stars!",
      author: "Fatima K.",
      rating: 5,
      role: "University Student",
    },
    {
      text: "Affordable, fresh, and always on time.",
      author: "Bilal S.",
      rating: 5,
      role: "Software Engineer",
    },
    {
      text: "I switched to Gharsafareats.pk last month and feel healthier already.",
      author: "Sana M.",
      rating: 5,
      role: "Marketing Executive",
    },
  ];

  const videoReviews = [
    {
      title: "Best decision for my office lunch — no more junk food!",
      author: "Ahmed R.",
      thumbnail: "👨‍💼",
    },
    {
      title: "It's like my mom is cooking for me again.",
      author: "Fatima K.",
      thumbnail: "👩‍🎓",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`bi ${
          index < rating ? "bi-star-fill" : "bi-star"
        } text-warning`}
      ></i>
    ));
  };

  return (
    <section id="reviews" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-secondary-custom mb-3">
            What our customers say about us
          </h2>
          <p className="lead text-muted">
            Real feedback from real people who trust us with their daily meals
          </p>
        </div>

        {/* Video Reviews Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="text-center mb-4 fw-bold text-secondary-custom">
              Video Reviews
            </h3>
            <div className="row g-4">
              {videoReviews.map((video, index) => (
                <div key={index} className="col-lg-6">
                  <div className="card card-custom border-0 overflow-hidden">
                    <div
                      className="position-relative bg-gradient text-white d-flex align-items-center justify-content-center"
                      style={{
                        height: "250px",
                        background:
                          "linear-gradient(135deg, #0C1A2D 0%, #EC6D00 100%)",
                      }}
                    >
                      <div className="text-center">
                        <div className="mb-3" style={{ fontSize: "4rem" }}>
                          {video.thumbnail}
                        </div>
                        <div
                          className="btn btn-light btn-lg rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                          style={{ width: "80px", height: "80px" }}
                        >
                          <i
                            className="bi bi-play-fill"
                            style={{ fontSize: "2rem", marginLeft: "4px" }}
                          ></i>
                        </div>
                      </div>
                      <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-dark bg-opacity-75">
                        <h6 className="mb-1 fw-semibold">"{video.title}"</h6>
                        <small className="text-light opacity-75">
                          — {video.author}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text Reviews Section */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-center mb-4 fw-bold text-secondary-custom">
              Customer Testimonials
            </h3>
            <div className="row g-4">
              {textReviews.map((review, index) => (
                <div key={index} className="col-lg-6">
                  <div className="card card-custom h-100 border-0">
                    <div className="card-body p-4">
                      <div className="d-flex mb-3">
                        {renderStars(review.rating)}
                      </div>
                      <blockquote className="mb-4">
                        <p className="fs-5 text-muted fst-italic">
                          "{review.text}"
                        </p>
                      </blockquote>
                      <div className="d-flex align-items-center">
                        <div
                          className="rounded-circle bg-primary-custom text-white d-flex align-items-center justify-content-center me-3"
                          style={{ width: "50px", height: "50px" }}
                        >
                          <span className="fw-bold">
                            {review.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-0 text-secondary-custom">
                            {review.author}
                          </h6>
                          <small className="text-muted">{review.role}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div
              className="row g-0 rounded-4 overflow-hidden shadow-lg"
              style={{
                background: "linear-gradient(135deg, #EC6D00 0%, #0C1A2D 100%)",
              }}
            >
              <div className="col-md-3">
                <div className="p-4 text-center text-white border-end border-white border-opacity-20">
                  <h2 className="display-6 fw-bold mb-2">500+</h2>
                  <p className="mb-0 opacity-90">Happy Customers</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-4 text-center text-white border-end border-white border-opacity-20">
                  <h2 className="display-6 fw-bold mb-2">4.9</h2>
                  <div className="mb-2">{renderStars(5)}</div>
                  <p className="mb-0 opacity-90 small">Average Rating</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-4 text-center text-white border-end border-white border-opacity-20">
                  <h2 className="display-6 fw-bold mb-2">10K+</h2>
                  <p className="mb-0 opacity-90">Meals Delivered</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-4 text-center text-white">
                  <h2 className="display-6 fw-bold mb-2">95%</h2>
                  <p className="mb-0 opacity-90">Repeat Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center">
            <div className="p-5 bg-light rounded-4">
              <h3 className="fw-bold text-secondary-custom mb-3">
                Ready to join our satisfied customers?
              </h3>
              <p className="text-muted mb-4">
                Experience the taste of home delivered fresh to your doorstep
              </p>
              <button
                className="btn btn-primary-custom btn-lg px-5"
                onClick={() => {
                  const element = document.getElementById("order-form");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Start Your Food Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
