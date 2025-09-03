import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-secondary-custom mb-3">
            A journey from our kitchen to your desk.
          </h2>
        </div>

        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="pe-lg-4">
              <p className="fs-5 text-muted mb-4 lh-lg">
                A journey from one hostel room to hundreds of lunchboxes.
              </p>
              <p className="fs-5 text-muted mb-4 lh-lg">
                When Abdul Muiz first came to Islamabad in 2021 for a job, life
                away from home was tougher than expected. Living in a hostel
                meant no real home-cooked food — and eating out every day wasn’t
                the answer. The city had plenty of hotels, but only a few truly
                served meals that tasted like home. Good food was either too
                expensive, too oily, or just not satisfying.
              </p>
              <p className="fs-5 text-muted mb-4 lh-lg">
                Seeing so many office workers, hostel students, and
                professionals facing the same struggle, Abdul Muiz and his wife
                Asmara decided to change that. They launched{" "}
                <strong className="text-primary-custom">
                  Gharsafareats.pk
                </strong>{" "}
                with a simple goal: to deliver healthy, home-style meals to
                people who deserve better than just another hotel menu.
              </p>
              <p className="fs-5 text-muted mb-4 lh-lg">
                Today, every dish is cooked in our own kitchen with fresh
                ingredients, packed with care, and delivered right to your door.
                Whether you’re an office employee or living away from family,
                Gharsafareats.pk makes sure your meals are as warm and wholesome
                as home.
              </p>

              <div className="d-flex align-items-center p-4 bg-white rounded-4 shadow-sm">
                <div className="flex-shrink-0 me-4">
                  <div
                    className="bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="bi bi-heart-fill fs-4"></i>
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold text-secondary-custom mb-2">
                    Our Mission
                  </h5>
                  <p className="text-muted mb-0">
                    Make sure no one in Islamabad ever feels far from home at
                    mealtime.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {/* Large Image Section */}
            <div className="position-relative">
              <div
                className="rounded-4 overflow-hidden shadow-lg position-relative"
                style={{
                  height: "500px",
                  background: "none",
                  position: "relative",
                }}
              >
                {/* Placeholder for founders image */}
                <img
                  src="/about-us.jpg"
                  alt="Founders of Gharsafareats.pk"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
                {/* Overlay for text readability */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(135deg, rgba(12,26,45,0.7) 0%, rgba(236,109,0,0.5) 100%)",
                    zIndex: 1,
                  }}
                ></div>
                {/* Text on image */}
                <div
                  className="d-flex align-items-center justify-content-center h-100 text-white"
                  style={{ position: "relative", zIndex: 2 }}
                >
                  <div className="text-center w-100">
                    <h4
                      className="fw-bold mb-2"
                      style={{
                        textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                        fontSize: "2rem",
                      }}
                    >
                      Abdul Muiz & Asmara
                    </h4>
                    <p
                      className="mb-0 opacity-90"
                      style={{
                        textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                        fontSize: "1.2rem",
                      }}
                    >
                      Founders of Gharsafareats.pk
                    </p>
                    <p
                      className="small opacity-75 mt-2"
                      style={{
                        textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                        fontSize: "1rem",
                      }}
                    >
                      Cooking with love since 2021
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="position-absolute top-0 end-0 p-4">
                  <div
                    className="bg-white bg-opacity-10 rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  ></div>
                </div>
                <div className="position-absolute bottom-0 start-0 p-4">
                  <div
                    className="bg-white bg-opacity-10 rounded-circle"
                    style={{ width: "60px", height: "60px" }}
                  ></div>
                </div>
              </div>

              {/* Stats Cards */}
              <div
                className="position-absolute bottom-0 start-0 translate-middle-y ms-4"
                style={{ zIndex: 10 }}
              >
                <div
                  className="card border-0 shadow-lg"
                  style={{ width: "200px" }}
                >
                  <div className="card-body text-center py-4">
                    <h3 className="fw-bold text-primary-custom mb-1">500+</h3>
                    <p className="text-muted mb-0 small">Happy Customers</p>
                  </div>
                </div>
              </div>

              <div
                className="position-absolute top-0 end-0 translate-middle-y me-4"
                style={{ zIndex: 10 }}
              >
                <div
                  className="card border-0 shadow-lg"
                  style={{ width: "180px" }}
                >
                  <div className="card-body text-center py-4">
                    <h3 className="fw-bold text-success mb-1">3+</h3>
                    <p className="text-muted mb-0 small">Years of Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div
              className="p-5 rounded-4 text-center text-white position-relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0C1A2D 0%, #EC6D00 100%)",
              }}
            >
              <div className="position-relative z-index-2">
                <h3 className="fw-bold mb-4">Our Vision for the Future</h3>
                <p className="fs-5 mb-4 opacity-90">
                  Our vision is to make sure no one in Islamabad ever feels far
                  from home at mealtime. And as we grow, we want to create
                  opportunities for others who share our mission.
                </p>
                <div className="row g-4 mt-4">
                  <div className="col-md-4">
                    <div className="text-center">
                      <div className="mb-3">
                        <i
                          className="bi bi-house-heart-fill"
                          style={{ fontSize: "2.5rem" }}
                        ></i>
                      </div>
                      <h5 className="fw-semibold">Home-Style Cooking</h5>
                      <p className="small opacity-75">
                        Every meal prepared with family recipes
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center">
                      <div className="mb-3">
                        <i
                          className="bi bi-clock-fill"
                          style={{ fontSize: "2.5rem" }}
                        ></i>
                      </div>
                      <h5 className="fw-semibold">Always On Time</h5>
                      <p className="small opacity-75">
                        Fresh meals delivered when you need them
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center">
                      <div className="mb-3">
                        <i
                          className="bi bi-heart-pulse-fill"
                          style={{ fontSize: "2.5rem" }}
                        ></i>
                      </div>
                      <h5 className="fw-semibold">Healthy & Fresh</h5>
                      <p className="small opacity-75">
                        Nutritious ingredients, prepared daily
                      </p>
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

export default AboutUs;
