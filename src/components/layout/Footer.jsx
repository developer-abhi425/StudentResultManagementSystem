import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import "../../styles/footer.css";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>SRMS</h2>

          <p className="footer-title">
            Student Result Management System
          </p>

          <p>
            A smart, secure, and scalable platform designed to simplify
            academic result management for colleges and universities.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Twitter">𝕏</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#why-srms">About</a>
          <a href="#features">Features</a>
          <a href="#modules">Modules</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Features */}
        <div className="footer-column">
          <h3>Our Features</h3>

          <a href="#features">Result Management</a>
          <a href="#features">Role-Based Access</a>
          <a href="#features">Secure Authentication</a>
          <a href="#features">Email Notifications</a>
          <a href="#features">QR Verification</a>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h3>Support</h3>

          <a href="#contact">Help Center</a>
          <a href="#contact">Contact Support</a>
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Terms & Conditions</a>
          <a href="#contact">FAQs</a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Information</h3>

          <div className="footer-contact-item">
            <MapPin size={18} />
            <span>
              Educational Institutions,
              <br />
              India
            </span>
          </div>

          <div className="footer-contact-item">
            <Mail size={18} />
            <span>support@srms.com</span>
          </div>

          <div className="footer-contact-item">
            <Phone size={18} />
            <span>Available 24/7</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} SRMS. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Terms & Conditions</a>
          <a href="#home">Sitemap</a>
        </div>

        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;