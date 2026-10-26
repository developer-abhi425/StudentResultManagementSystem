import { useEffect, useState } from "react";

import {
  BarChart3,
  ShieldCheck,
  Zap,
  Cloud,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

import hero from "../../assets/hero.png";
import "../../styles/hero.css";

function Hero() {
  const fullText = "Student Result\nManagement System";

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && text === fullText) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && text === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    } else {
      timer = setTimeout(() => {
        if (isDeleting) {
          setText(fullText.substring(0, text.length - 1));
        } else {
          setText(fullText.substring(0, text.length + 1));
        }
      }, isDeleting ? 60 : 100);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, fullText]);

  // Learn More button
  const handleLearnMore = () => {
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      const headerHeight = 78;

      const targetPosition =
        aboutSection.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">

        {/* Hero Label */}
        <div className="hero-label">
          <span>SMART</span>
          <span>|</span>
          <span>SECURE</span>
          <span>|</span>
          <span>SCALABLE</span>
          <i></i>
        </div>

        {/* Hero Title */}
        <h1 className="hero-title">
          <span className="typing-wrapper">
            {text}
            <span className="typing-cursor"></span>
          </span>
        </h1>

        {/* Hero Description */}
        <p>
          A flexible and easy-to-use platform designed to manage student
          results, academic records, and notifications for any college or
          university.
        </p>

        {/* Hero Benefits */}
        <div className="hero-benefits">

          <div className="benefit">
            <BarChart3 className="benefit-icon chart-icon" />
            <span>
              Accurate
              <br />
              Results
            </span>
          </div>

          <div className="benefit">
            <ShieldCheck className="benefit-icon shield-icon" />
            <span>
              Secure
              <br />
              & Reliable
            </span>
          </div>

          <div className="benefit">
            <Zap className="benefit-icon zap-icon" />
            <span>
              Fast
              <br />
              & Efficient
            </span>
          </div>

          <div className="benefit">
            <Cloud className="benefit-icon cloud-icon" />
            <span>
              Access
              <br />
              Anywhere
            </span>
          </div>

        </div>

        {/* Learn More Button */}
        <button
          className="learn-more-btn"
          onClick={handleLearnMore}
        >
          <span>Learn More</span>
          <ArrowRight size={18} />
        </button>

      </div>

      {/* Education Card */}
      <div className="hero-card">

        <div className="hero-card-icon">
          <GraduationCap size={28} />
        </div>

        <div>
          <h3>Empowering</h3>
          <h3>Educational Institutions</h3>

          <p>
            Simplify result processing and academic
            management with a modern digital solution.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Hero;