import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

import "../../styles/registration/registration-common.css";
import "../../styles/registration/role-selector.css";

import AdminRegistration from "./registration/AdminRegistration";
import DataEntryRegistration from "./registration/DataEntryRegistration";
import FacultyRegistration from "./registration/FacultyRegistration";
import StudentRegistration from "./registration/StudentRegistration";
import RoleSelector from "./RoleSelector";

function RegistrationForm() {
  const navigate = useNavigate();
  const location = useLocation();

  // =========================================================
  // SELECTED COLLEGE
  // =========================================================

  const selectedCollege = location.state?.college;

  // =========================================================
  // SELECTED ROLE
  // =========================================================

  const [selectedRole, setSelectedRole] = useState("null");

  // =========================================================
  // NO COLLEGE SELECTED
  // =========================================================

  if (!selectedCollege) {
    return (
      <main className="registration-page">
        <section className="registration-empty">
          <ShieldCheck size={44} />

          <h1>College Not Selected</h1>

          <p>
            Please select your college or institution before
            continuing registration.
          </p>

          <button
            type="button"
            onClick={() => navigate("/register/college")}
          >
            <ArrowLeft size={18} />
            Select College
          </button>
        </section>
      </main>
    );
  }

  // =========================================================
  // RENDER SELECTED ROLE FORM
  // =========================================================

  const renderRoleForm = () => {
    switch (selectedRole) {
      // -------------------------------------------------------
      // ADMIN
      // -------------------------------------------------------

      case "admin":
        return (
          <AdminRegistration
            selectedCollege={selectedCollege}
          />
        );

      // -------------------------------------------------------
      // DATA ENTRY OPERATOR
      // -------------------------------------------------------

      case "data-entry":
        return (
          <DataEntryRegistration
            selectedCollege={selectedCollege}
          />
        );

      // -------------------------------------------------------
      // STUDENT
      // -------------------------------------------------------

      case "student":
        return (
          <StudentRegistration
            selectedCollege={selectedCollege}
          />
        );

      // -------------------------------------------------------
      // FACULTY
      // -------------------------------------------------------

      case "faculty":
        return (
          <FacultyRegistration
            selectedCollege={selectedCollege}
          />
        );

      default:
        return null;
    }
  };

  // =========================================================
  // MAIN UI
  // =========================================================

  return (
    <main className="registration-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="registration-header">
        <div className="registration-brand">

          <div className="registration-logo">
            SRMS
          </div>

          <div>
            <h2>
              Student Result Management System
            </h2>

            <p>
              Institutional Registration
            </p>
          </div>

        </div>

        <div className="registration-secure">
          <ShieldCheck size={18} />

          <span>
            Secure & Trusted Platform
          </span>
        </div>
      </header>

      {/* =====================================================
          PROGRESS
      ===================================================== */}

      <section className="registration-progress">

        <div className="progress-step completed">

          <div className="progress-number">
            1
          </div>

          <div>
            <strong>
              Select Your College
            </strong>

            <span>
              Choose your institution
            </span>
          </div>

        </div>

        <div className="progress-line active" />

        <div className="progress-step active">

          <div className="progress-number">
            2
          </div>

          <div>
            <strong>
              Select Role & Register
            </strong>

            <span>
              Choose your role and fill details
            </span>
          </div>

        </div>

        <div className="progress-line" />

        <div className="progress-step">

          <div className="progress-number">
            3
          </div>

          <div>
            <strong>
              Account Created
            </strong>

            <span>
              Start using SRMS
            </span>
          </div>

        </div>

      </section>

      {/* =====================================================
          ROLE SELECTION
      ===================================================== */}

      <RoleSelector
        selectedRole={selectedRole}
        onRoleChange={setSelectedRole}
      />

      {/* =====================================================
          SELECTED ROLE FORM
      ===================================================== */}

      {selectedRole && (
  <section className="registration-container">
    {renderRoleForm()}
  </section>
)}

    </main>
  );
}

export default RegistrationForm;