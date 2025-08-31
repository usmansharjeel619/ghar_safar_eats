import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${
        isScrolled ? "shadow-sm" : ""
      }`}
      style={{
        backgroundColor: "white",
        transition: "all 0.3s ease",
        padding: isScrolled ? "0.5rem 0" : "1rem 0",
      }}
    >
      <div className="container">
        <img
          src="/logo1.png"
          alt="Gharsafareats.pk Logo"
          height="50"
          className="me-2"
          style={{ objectFit: "contain" }}
        />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-secondary-custom fw-semibold"
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-secondary-custom fw-semibold"
                onClick={() => scrollToSection("weekly-plans")}
              >
                Weekly Plans
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-secondary-custom fw-semibold"
                onClick={() => scrollToSection("reviews")}
              >
                Reviews
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-secondary-custom fw-semibold"
                onClick={() => scrollToSection("faq")}
              >
                FAQ
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-secondary-custom fw-semibold"
                onClick={() => scrollToSection("about")}
              >
                About Us
              </button>
            </li>
            <li className="nav-item ms-2">
              <button
                className="btn btn-primary-custom px-4"
                onClick={() => scrollToSection("order-form")}
              >
                Order Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
