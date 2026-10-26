import {
  FileText,
  Users,
  ShieldCheck,
  Bell,
  QrCode,
  Download,
} from "lucide-react";
import "../../styles/features.css";
function Features() {
  const features = [
    {
      icon: FileText,
      title: "Result Management",
      description:
        "Create, update, publish, and manage student results efficiently.",
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description:
        "Separate access for students, faculty, examiners, data entry operators, and admins.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Authentication",
      description:
        "Protect academic information with secure login and role-based permissions.",
    },
    {
      icon: Bell,
      title: "Email Notifications",
      description:
        "Send result updates and important academic notifications directly to students.",
    },
    {
      icon: QrCode,
      title: "QR Result Verification",
      description:
        "Generate QR codes that make digital result verification quick and reliable.",
    },
    {
      icon: Download,
      title: "Digital Result Download",
      description:
        "Allow students to view and download their results digitally anytime.",
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-heading">
        <span>POWERFUL FEATURES</span>

        <h2>
          Everything You Need for
          <br />
          <strong>Modern Result Management</strong>
        </h2>

        <p>
          A complete set of features designed to make academic result
          management simple, secure, and efficient.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <Icon size={26} />
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;