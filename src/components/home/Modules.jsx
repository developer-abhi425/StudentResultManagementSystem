import {
  GraduationCap,
  Users,
  Database,
  ClipboardCheck,
  ShieldCheck,
} from "lucide-react";
import "../../styles/modules.css";
function Modules() {
  const modules = [
    {
      icon: GraduationCap,
      title: "Student Module",
      description:
        "Students can securely log in, view their results, download result documents, and verify results using QR codes.",
    },
    {
      icon: Users,
      title: "Faculty Module",
      description:
        "Faculty members can manage academic information, marks, and student-related result activities.",
    },
    {
      icon: Database,
      title: "Data Entry Operator",
      description:
        "Data entry operators can efficiently enter and update student, examination, and result information.",
    },
    {
      icon: ClipboardCheck,
      title: "Examiner Module",
      description:
        "Examiners can review examination information and manage assigned result evaluation activities.",
    },
    {
      icon: ShieldCheck,
      title: "Admin Module",
      description:
        "Administrators can manage users, roles, academic data, results, and overall system operations.",
    },
  ];

  return (
    <section className="modules-section" id="modules">
      <div className="modules-heading">
        <span>SYSTEM MODULES</span>

        <h2>
          One Platform,
          <br />
          <strong>Multiple Roles</strong>
        </h2>

        <p>
          SRMS provides dedicated modules so every user can access the
          features and information relevant to their responsibilities.
        </p>
      </div>

      <div className="modules-grid">
        {modules.map((module, index) => {
          const Icon = module.icon;

          return (
            <div className="module-card" key={index}>
              <div className="module-icon">
                <Icon size={28} />
              </div>

              <h3>{module.title}</h3>

              <p>{module.description}</p>

              <span className="module-number">
                0{index + 1}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Modules;