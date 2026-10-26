import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/header.css";

function Header() {
  const navigate = useNavigate();
  const [active, setActive] = useState("home");

  const handleNavClick = (event, section) => {
    event.preventDefault();

    const target = document.getElementById(section);

    if (target) {
      setActive(section);

      const headerHeight = 78;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="main-header">

      {/* Logo */}
      <div className="header-brand">
        <h2>SRMS</h2>
        <p>Student Result Management System</p>
      </div>

      {/* Navigation */}
      <nav>

        {/* Home */}
        <a
          href="#home"
          className={active === "home" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "home")}
        >
          Home
        </a>

        {/* About */}
        <a
          href="#about"
          className={active === "about" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "about")}
        >
          About
        </a>

        {/* Features */}
        <a
          href="#features"
          className={active === "features" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "features")}
        >
          Features
        </a>

        {/* Modules */}
        <a
          href="#modules"
          className={active === "modules" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "modules")}
        >
          Modules
        </a>

        {/* Why SRMS */}
        <a
          href="#why-srms"
          className={active === "why-srms" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "why-srms")}
        >
          Why SRMS
        </a>

        {/* Subscription */}
        <a
          href="#subscription"
          className={active === "subscription" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "subscription")}
        >
          Subscription
        </a>

        {/* Contact */}
        <a
          href="#contact"
          className={active === "contact" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "contact")}
        >
          Contact
        </a>

      </nav>

      {/* Buttons */}
      <div className="header-actions">

        {/* Register */}
        <button
          type="button"
          className="register-btn"
          onClick={() => navigate("/register/college")}
        >
          Register
        </button>

        {/* Login */}
        <button
          type="button"
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

      </div>

    </header>
  );
}

export default Header;