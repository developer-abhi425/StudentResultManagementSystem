import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ShieldCheck,
  GraduationCap,
  Users,
  Database,
  UserRoundCog,
  LockKeyhole,
  Mail,
  Eye,
  EyeOff,
  ArrowLeft,
  LogIn,
} from "lucide-react";

import "../../styles/login/login.css";

function Login() {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const roles = [
    {
      id: "student",
      title: "Student",
      description: "Access your academic records",
      icon: GraduationCap,
    },
    {
      id: "faculty",
      title: "Faculty",
      description: "Manage academic activities",
      icon: Users,
    },
    {
      id: "data-entry",
      title: "Data Entry Operator",
      description: "Manage academic data",
      icon: Database,
    },
    {
      id: "admin",
      title: "Admin",
      description: "Manage institution and users",
      icon: UserRoundCog,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);

    setFormData({
      identifier: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedRole) {
      alert("Please select your login role.");
      return;
    }

    if (!formData.identifier.trim()) {
      alert(
        selectedRole === "student"
          ? "Please enter your enrollment or roll number."
          : "Please enter your email or user ID."
      );
      return;
    }

    if (!formData.password.trim()) {
      alert("Please enter your password.");
      return;
    }

    // Backend authentication will be connected here later.
    console.log({
      role: selectedRole,
      identifier: formData.identifier,
      password: formData.password,
    });

    alert("Login API will be connected here.");
  };

  const getIdentifierLabel = () => {
    if (selectedRole === "student") {
      return "Enrollment Number / Roll Number";
    }

    return "Official Email / User ID";
  };

  const getIdentifierPlaceholder = () => {
    if (selectedRole === "student") {
      return "Enter enrollment or roll number";
    }

    return "Enter official email or user ID";
  };

  const getIdentifierIcon = () => {
    if (selectedRole === "student") {
      return <GraduationCap size={18} />;
    }

    return <Mail size={18} />;
  };

  return (
    <main className="login-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="login-header">

        <div className="login-brand">

          <div className="login-logo">
            SRMS
          </div>

          <div>
            <h1>
              Student Result Management System
            </h1>

            <p>
              Secure Institutional Login
            </p>
          </div>

        </div>

        <div className="login-secure">
          <ShieldCheck size={18} />
          <span>Secure & Trusted Platform</span>
        </div>

      </header>

      {/* =====================================================
          LOGIN CONTENT
      ===================================================== */}

      <section className="login-container">

        <div className="login-card">

          {/* Heading */}

          <div className="login-heading">

            <div className="login-heading-icon">
              <LockKeyhole size={24} />
            </div>

            <h2>
              Welcome Back
            </h2>

            <p>
              Sign in to access your SRMS account
            </p>

          </div>

          {/* =================================================
              ROLE SELECTION
          ================================================= */}

          <div className="login-role-section">

            <div className="login-section-title">
              Select Login Role
            </div>

            <div className="login-role-grid">

              {roles.map((role) => {
                const Icon = role.icon;

                const isSelected =
                  selectedRole === role.id;

                return (
                  <button
                    type="button"
                    key={role.id}
                    className={`login-role-card ${
                      isSelected ? "selected" : ""
                    }`}
                    onClick={() => handleRoleChange(role.id)}
                  >

                    <div className="login-role-icon">
                      <Icon size={21} />
                    </div>

                    <div className="login-role-content">

                      <h3>
                        {role.title}
                      </h3>

                      <p>
                        {role.description}
                      </p>

                    </div>

                    <div className="login-role-radio">
                      {isSelected && "✓"}
                    </div>

                  </button>
                );
              })}

            </div>

          </div>

          {/* =================================================
              LOGIN FORM
          ================================================= */}

          {selectedRole && (
            <form
              className="login-form"
              onSubmit={handleSubmit}
            >

              <div className="login-form-divider" />

              {/* Identifier */}

              <div className="login-field">

                <label htmlFor="identifier">
                  {getIdentifierLabel()}
                  <span>*</span>
                </label>

                <div className="login-input-wrapper">

                  {getIdentifierIcon()}

                  <input
                    id="identifier"
                    name="identifier"
                    type="text"
                    value={formData.identifier}
                    onChange={handleChange}
                    placeholder={getIdentifierPlaceholder()}
                    autoComplete="username"
                  />

                </div>

              </div>

              {/* Password */}

              <div className="login-field">

                <label htmlFor="password">
                  Password
                  <span>*</span>
                </label>

                <div className="login-input-wrapper">

                  <LockKeyhole size={18} />

                  <input
                    id="password"
                    name="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

              </div>

              {/* Forgot Password */}

              <div className="login-forgot">
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "Forgot password flow will be added later."
                    )
                  }
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}

              <button
                type="submit"
                className="login-submit"
              >
                <LogIn size={18} />
                Login
              </button>

            </form>
          )}

          {/* No Role Selected */}

          {!selectedRole && (
            <div className="login-select-message">
              <ShieldCheck size={18} />

              <span>
                Please select your role to continue.
              </span>
            </div>
          )}

          {/* Register */}

          <div className="login-register">

            <span>
              Don't have an account?
            </span>

            <button
              type="button"
              onClick={() =>
                navigate("/register/college")
              }
            >
              Register Now
            </button>

          </div>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="login-footer">

        <button
          type="button"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>

        <span>
          © 2026 Student Result Management System
        </span>

      </footer>

    </main>
  );
}

export default Login;