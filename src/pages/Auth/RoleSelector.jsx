import {
  ShieldCheck,
  GraduationCap,
  Users,
  Database,
  Check,
} from "lucide-react";

function RoleSelector({ selectedRole, onRoleChange }) {
  const roles = [
    {
      id: "admin",
      title: "Admin",
      description: "Manage institution, users and system settings",
      icon: ShieldCheck,
    },
    {
      id: "student",
      title: "Student",
      description: "Access academic records and student services",
      icon: GraduationCap,
    },
    {
      id: "faculty",
      title: "Faculty",
      description: "Manage academic and student-related activities",
      icon: Users,
    },
    {
      id: "data-entry",
      title: "Data Entry Operator",
      description: "Enter and manage student academic data",
      icon: Database,
    },
  ];

  return (
    <section className="role-section">
      <div className="role-heading">
        <div>
          <h2>Select Registration Role</h2>
          <p>
            Choose your role in the institution to continue registration.
          </p>
        </div>
      </div>

      <div className="role-grid">
        {roles.map((role) => {
          const Icon = role.icon;
          const isSelected = selectedRole === role.id;

          return (
            <button
              type="button"
              key={role.id}
              className={`role-card ${isSelected ? "selected" : ""}`}
              onClick={() => onRoleChange(role.id)}
            >
              <div className="role-icon">
                <Icon size={22} />
              </div>

              <div className="role-content">
                <h3>{role.title}</h3>
                <p>{role.description}</p>
              </div>

              <div className="role-radio">
                {isSelected && <Check size={14} />}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default RoleSelector;