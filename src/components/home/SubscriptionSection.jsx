import { useNavigate } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

import "../../styles/subscription-section.css";

function SubscriptionSection() {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Basic",
      price: "₹49,999",
      description: "Essential tools for small colleges.",
      students: "Up to 2,000 Students",
      features: [
        "Student Management",
        "Faculty Management",
        "Result Management",
        "Examination Management",
        "Basic Reports",
        "Email Notifications",
      ],
    },
    {
      name: "Professional",
      price: "₹99,999",
      description: "Complete solution for growing institutions.",
      students: "Up to 10,000 Students",
      recommended: true,
      features: [
        "Everything in Basic",
        "Advanced Analytics",
        "Multiple Departments",
        "Examiner Management",
        "QR Result Verification",
        "PDF Result Generation",
        "Email + SMS Notifications",
        "Role-Based Access",
      ],
    },
    {
      name: "Enterprise",
      price: "₹1,99,999+",
      description: "Advanced solution for universities.",
      students: "10,000+ Students",
      features: [
        "Everything in Professional",
        "Multiple Campuses",
        "Custom Roles & Permissions",
        "Advanced Analytics",
        "Custom Branding",
        "API Integration",
        "Dedicated Support",
        "Custom Deployment",
      ],
    },
  ];

  return (
    <section id="subscription" className="subscription-section">

      {/* Section Heading */}
      <div className="subscription-heading">

        <span className="subscription-tag">
          Institutional Subscription
        </span>

        <h2>
          Plans Designed for
          <span> Educational Institutions</span>
        </h2>

        <p>
          Choose a subscription plan that fits the size and
          requirements of your college or university.
        </p>

      </div>

      {/* Plans */}
      <div className="subscription-grid">

        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`subscription-card ${
              plan.recommended ? "recommended" : ""
            }`}
          >

            {plan.recommended && (
              <div className="recommended-badge">
                Most Recommended
              </div>
            )}

            <div className="subscription-card-header">
              <div>
                <h3>{plan.name}</h3>

                <p>{plan.description}</p>
              </div>
            </div>

            <div className="subscription-price">
              <strong>{plan.price}</strong>
              <span>/ year</span>
            </div>

            <div className="student-limit">
              {plan.students}
            </div>

            <div className="subscription-line"></div>

            <ul className="subscription-features">

              {plan.features.map((feature) => (
                <li key={feature}>
                  <span className="feature-icon">
                    <Check size={15} />
                  </span>

                  <span>{feature}</span>
                </li>
              ))}

            </ul>

            {/* View Plan */}
            <button
              type="button"
              className="subscription-plan-btn"
              onClick={() => navigate("/subscription/plans")}
            >
              Get Started
              <ArrowRight size={17} />
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default SubscriptionSection;