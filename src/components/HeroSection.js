import React from "react";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const slides = [
    {
      title: "Homemade food, delivered to your desk.",
      subtitle:
        "Fresh meals for office workers, hostel students, and busy professionals.",
      buttonText: "Order Now",
      action: () => scrollToSection("order-form"),
      image: "/hero-image-1.jpg", // Replace with actual image paths
    },
    {
      title: "Choose your plan, Monday to Friday.",
      subtitle: "Lunch, dinner, or both — no compromise on taste.",
      buttonText: "View Menu",
      action: () => scrollToSection("weekly-plans"),
      image: "/hero-image-2.jpg", // Replace with actual image paths
    },
    {
      title: "Made with love, packed with care.",
      subtitle: "Affordable weekly meal plans for people far from home.",
      buttonText: "Get Started",
      action: () => scrollToSection("weekly-plans"),
      image: "/hero-image-3.jpg", // Replace with actual image paths
    },
  ];

  return (
    <section id="home" style={{ marginTop: "76px" }}>
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                className="d-flex align-items-center justify-content-center text-white position-relative"
                style={{
                  minHeight: "90vh",
                  position: "relative",
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Dark overlay for text readability */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(12, 26, 45, 0.7)",
                    zIndex: 1,
                  }}
                ></div>

                <div
                  className="container text-center"
                  style={{ position: "relative", zIndex: 2 }}
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInUp">
                        {slide.title}
                      </h1>
                      <p className="lead fs-4 mb-5 animate__animated animate__fadeInUp animate__delay-1s">
                        {slide.subtitle}
                      </p>
                      <button
                        className="btn btn-primary-custom btn-lg px-5 py-3 fw-semibold animate__animated animate__fadeInUp animate__delay-2s"
                        onClick={slide.action}
                        style={{
                          borderRadius: "15px",
                          fontSize: "1.2rem",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = "translateY(-3px)";
                          e.target.style.boxShadow =
                            "0 10px 25px rgba(236,109,0,0.3)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        {slide.buttonText} →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
