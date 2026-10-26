import { ArrowRight, Mail, Phone } from "lucide-react";
import "../../styles/contact.css";

function ContactCTA() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      const headerHeight = 78;

      const targetPosition =
        contactSection.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="contact-cta" id="contact">
      <div className="contact-cta-content">

        <span className="contact-cta-label">
          READY TO GET STARTED?
        </span>

        <h2>
          Simplify Your Academic
          <br />
          <strong>Result Management</strong>
        </h2>

        <p>
          Bring your institution's academic result management into one
          secure, reliable, and easy-to-use digital platform.
        </p>

        <div className="contact-cta-actions">

          {/* Get Started */}
          <button
            className="contact-primary-btn"
            onClick={scrollToContact}
          >
            Get Started
            <ArrowRight size={18} />
          </button>

          {/* Contact Us */}
          <button
            className="contact-secondary-btn"
            onClick={scrollToContact}
          >
            Contact Us
          </button>

        </div>
      </div>

      <div className="contact-info">

        <div className="contact-info-item">
          <div className="contact-info-icon">
            <Mail size={20} />
          </div>

          <div>
            <span>Email</span>
            <strong>support@srms.com</strong>
          </div>
        </div>

        <div className="contact-info-item">
          <div className="contact-info-icon">
            <Phone size={20} />
          </div>

          <div>
            <span>Support</span>
            <strong>Available 24/7</strong>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactCTA;