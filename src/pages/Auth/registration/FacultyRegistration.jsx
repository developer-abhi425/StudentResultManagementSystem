import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Building2,
  User,
  KeyRound,
  GraduationCap,
  Users,
  Mail,
  Phone,
  BriefcaseBusiness,
  Eye,
  EyeOff,
  CircleCheck,
  Info,
  BookOpen,
  UserRoundCog,
} from "lucide-react";

import "../../../styles/registration/registration-common.css";
import "../../../styles/registration/faculty-registration.css";

function FacultyRegistration({ selectedCollege }) {
  const navigate = useNavigate();

  // =========================================================
  // PASSWORD VISIBILITY
  // =========================================================

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  // =========================================================
  // FACULTY ACCESS VERIFICATION
  // =========================================================

  const [accessVerified, setAccessVerified] = useState(false);

  // =========================================================
  // FORM DATA
  // =========================================================

  const [formData, setFormData] = useState({
    institutionCode: "",
    collegeType: "",
    affiliatedUniversity: "",

    fullName: "",
    employeeId: "",
    department: "",
    designation: "",
    specialization: "",
    qualification: "",
    officialEmail: "",
    mobileNumber: "",

    password: "",
    confirmPassword: "",

    accessCode: "",
  });

  // =========================================================
  // HANDLE INPUT
  // =========================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // If access code changes after verification,
    // verification becomes invalid.
    if (name === "accessCode") {
      setAccessVerified(false);
    }
  };

  // =========================================================
  // VERIFY FACULTY ACCESS
  // =========================================================

  const handleVerifyAccess = () => {
    if (!formData.accessCode.trim()) {
      alert("Please enter Faculty Access Code.");
      return;
    }

    /*
      Temporary frontend verification.

      Later connect with backend API:

      POST /api/access/verify-faculty

      {
        accessCode,
        employeeId,
        institutionCode
      }
    */

    setAccessVerified(true);

    alert(
      "Faculty access verified successfully."
    );
  };

  // =========================================================
  // SUBMIT REGISTRATION
  // =========================================================

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!accessVerified) {
      alert(
        "Please verify your Faculty access code first."
      );
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert("Passwords do not match.");
      return;
    }

    console.log(
      "Faculty Registration Data:",
      {
        college: selectedCollege,
        systemRole: "faculty",
        formData,
      }
    );

    alert(
      "Faculty registration submitted successfully."
    );
  };

  return (
    <div className="registration-layout">

      {/* =====================================================
          MAIN FORM
      ===================================================== */}

      <form
        className="registration-form faculty-registration"
        onSubmit={handleSubmit}
      >

        {/* ===================================================
            MAIN HEADING
        =================================================== */}

        <div className="form-main-heading">

          <div className="form-main-icon">
            <GraduationCap size={25} />
          </div>

          <div className="faculty-heading-content">

            <h2>
              Faculty Registration
            </h2>

            <p>
              Register as an authorized faculty member
              of your institution.
            </p>

          </div>

          <div className="faculty-info-note">

            <Info size={17} />

            <span>
              Faculty members can manage assigned
              academic activities, courses and student
              records according to institutional
              permissions.
            </span>

          </div>

        </div>


        {/* ===================================================
            SECTION 1 - FACULTY ACCESS VERIFICATION
        =================================================== */}

        <div className="registration-form-section faculty-access-section">

          <div className="section-title">

            <div className="section-number">
              1
            </div>

            <div className="section-title-icon access">
              <ShieldCheck size={19} />
            </div>

            <div>

              <h3>
                Faculty Access Verification
              </h3>

              <p>
                Verify the access code provided by
                your institution administrator.
              </p>

            </div>

          </div>


          <div className="faculty-access-code-group">

            {/* LABEL */}

            <div className="faculty-access-label-row">

              <label>
                Faculty Access Code
                <span>*</span>
              </label>

            </div>


            {/* INPUT + BUTTON */}

            <div className="faculty-access-input-row">

              <div className="input-icon-wrapper faculty-access-input">

                <KeyRound size={17} />

                <input
                  type="text"
                  name="accessCode"
                  value={formData.accessCode}
                  onChange={handleChange}
                  placeholder="Enter faculty access code"
                  required
                  disabled={accessVerified}
                />

              </div>


              <button
                type="button"
                className={`faculty-verify-btn ${
                  accessVerified ? "verified" : ""
                }`}
                onClick={handleVerifyAccess}
                disabled={accessVerified}
              >

                {accessVerified ? (
                  <>
                    <CircleCheck size={18} />
                    Access Verified
                  </>
                ) : (
                  <>
                    <ShieldCheck size={18} />
                    Verify Access
                    <ArrowRight size={17} />
                  </>
                )}

              </button>

            </div>


            {/* HELP TEXT */}

            <div className="faculty-access-help">

              <small>
                Enter the access code provided by
                your institution administrator.
              </small>

            </div>

          </div>

        </div>


        {/* ===================================================
            SECTION 2 - INSTITUTION INFORMATION
        =================================================== */}

        <div
          className={`registration-form-section ${
            !accessVerified ? "locked-section" : ""
          }`}
        >

          <div className="section-title">

            <div className="section-number">
              2
            </div>

            <div className="section-title-icon">
              <Building2 size={19} />
            </div>

            <div>

              <h3>
                Institution Information
              </h3>

              <p>
                Basic information about your institution.
              </p>

            </div>

          </div>


          <div className="form-grid institution-grid">

            {/* SELECTED COLLEGE */}

            <div className="form-group">

              <label>
                Selected College / Institution
              </label>

              <div className="selected-college-field">

                <Building2 size={17} />

                <span>
                  {selectedCollege?.name ||
                    "Selected Institution"}
                </span>

              </div>

            </div>


            {/* INSTITUTION CODE */}

            <div className="form-group">

              <label>
                Institution Code
                <span>*</span>
              </label>

              <div className="input-icon-wrapper">

                <Building2 size={17} />

                <input
                  type="text"
                  name="institutionCode"
                  value={formData.institutionCode}
                  onChange={handleChange}
                  placeholder="Enter institution code"
                  required
                  disabled={!accessVerified}
                />

              </div>

            </div>


            {/* COLLEGE TYPE */}

            <div className="form-group">

              <label>
                College Type
                <span>*</span>
              </label>

              <select
                name="collegeType"
                value={formData.collegeType}
                onChange={handleChange}
                required
                disabled={!accessVerified}
              >

                <option value="">
                  Select college type
                </option>

                <option value="college">
                  College
                </option>

                <option value="university">
                  University
                </option>

                <option value="institute">
                  Institute
                </option>

                <option value="autonomous">
                  Autonomous Institution
                </option>

                <option value="deemed">
                  Deemed University
                </option>

              </select>

            </div>


            {/* AFFILIATED UNIVERSITY */}

            <div className="form-group">

              <label>
                Affiliated University
                <span>*</span>
              </label>

              <div className="input-icon-wrapper">

                <GraduationCap size={17} />

                <select
                  name="affiliatedUniversity"
                  value={
                    formData.affiliatedUniversity
                  }
                  onChange={handleChange}
                  required
                  disabled={!accessVerified}
                >

                  <option value="">
                    Select affiliated university
                  </option>

                  <option value="aktu">
                    Dr. A.P.J. Abdul Kalam
                    Technical University (AKTU)
                  </option>

                  <option value="ccsu">
                    Chaudhary Charan Singh
                    University (CCSU)
                  </option>

                  <option value="gbu">
                    Gautam Buddha University
                  </option>

                  <option value="other">
                    Other University
                  </option>

                </select>

              </div>

            </div>

          </div>

        </div>


        {/* ===================================================
            SECTION 3 - FACULTY INFORMATION
        =================================================== */}

        <div
          className={`registration-form-section ${
            !accessVerified ? "locked-section" : ""
          }`}
        >

          <div className="section-title">

            <div className="section-number">
              3
            </div>

            <div className="section-title-icon">
              <UserRoundCog size={19} />
            </div>

            <div>

              <h3>
                Faculty Information
              </h3>

              <p>
                Enter your official faculty information.
              </p>

            </div>

          </div>


          <div className="form-grid faculty-grid">

            {/* FULL NAME */}

            <div className="form-group">

              <label>
                Full Name
                <span>*</span>
              </label>

              <div className="input-icon-wrapper">

                <User size={17} />

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  disabled={!accessVerified}
                />

              </div>

            </div>


            {/* EMPLOYEE ID */}

            <div className="form-group">

              <label>
                Employee ID
                <span>*</span>
              </label>

              <div className="input-icon-wrapper">

                <BriefcaseBusiness size={17} />

                <input
                  type="text"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  placeholder="Enter employee ID"
                  required
                  disabled={!accessVerified}
                />

              </div>

            </div>


            {/* DEPARTMENT */}

            <div className="form-group">

              <label>
                Department
                <span>*</span>
              </label>

              <div className="input-icon-wrapper">

                <Building2 size={17} />

                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="Enter department"
                  required
                  disabled={!accessVerified}
                />

              </div>

            </div>


            {/* DESIGNATION */}

            <div className="form-group">

              <label>
                Designation
                <span>*</span>
              </label>

              <div className="input-icon-wrapper">

                <BriefcaseBusiness size={17} />

                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Enter designation"
                  required
                  disabled={!accessVerified}
                />

              </div>

            </div>


            {/* SPECIALIZATION */}

            <div className="form-group">

              <label>
                Specialization
                <span>*</span>
              </label>

              <div className="input-icon-wrapper">

                <BookOpen size={17} />

                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  placeholder="Enter subject specialization"
                  required
                  disabled={!accessVerified}
                />

              </div>

            </div>


            {/* QUALIFICATION */}

            <div className="form-group">

              <label>
                Highest Qualification
                <span>*</span>
              </label>

              <div className="input-icon-wrapper">

                <GraduationCap size={17} />

                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder="e.g. MCA, M.Tech, Ph.D."
                  required
                  disabled={!accessVerified}
                />

              </div>

            </div>


            {/* OFFICIAL EMAIL */}

            <div className="form-group">

              <label>
                Official Email
                <span>*</span>
              </label>

              <div className="input-icon-wrapper">

                <Mail size={17} />

                <input
                  type="email"
                  name="officialEmail"
                  value={formData.officialEmail}
                  onChange={handleChange}
                  placeholder="Enter official email address"
                  required
                  disabled={!accessVerified}
                />

              </div>

            </div>


            {/* MOBILE NUMBER */}

            <div className="form-group">

              <label>
                Mobile Number
                <span>*</span>
              </label>

              <div className="input-icon-wrapper">

                <Phone size={17} />

                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  required
                  disabled={!accessVerified}
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div className="form-group full-width">

              <label>
                Password
                <span>*</span>
              </label>

              <div className="input-icon-wrapper password-wrapper">

                <KeyRound size={17} />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  required
                  disabled={!accessVerified}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      (previous) => !previous
                    )
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  disabled={!accessVerified}
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>

              </div>

            </div>


            {/* CONFIRM PASSWORD */}

            <div className="form-group full-width">

              <label>
                Confirm Password
                <span>*</span>
              </label>

              <div className="input-icon-wrapper password-wrapper">

                <KeyRound size={17} />

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  value={
                    formData.confirmPassword
                  }
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                  disabled={!accessVerified}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      (previous) => !previous
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  disabled={!accessVerified}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>

              </div>

            </div>

          </div>

        </div>


        {/* ===================================================
            ACTION BUTTONS
        =================================================== */}

        <div className="registration-actions">

          <button
            type="button"
            className="registration-back-btn"
            onClick={() =>
              navigate("/register/college")
            }
          >
            <ArrowLeft size={18} />
            Back to College Selection
          </button>

          <button
            type="submit"
            className="registration-submit-btn"
            disabled={!accessVerified}
          >
            Complete Registration
            <ArrowRight size={19} />
          </button>

        </div>

      </form>


      {/* =====================================================
          FACULTY INFORMATION CARDS
      ===================================================== */}

      <aside className="registration-sidebar">

        {/* ACCESS DETAILS */}

        <div className="sidebar-card faculty-access-card">

          <div className="sidebar-card-heading">

            <div className="sidebar-icon blue">
              <ShieldCheck size={19} />
            </div>

            <div>

              <h3>
                Access Details
              </h3>

              <span>
                Faculty Access
              </span>

            </div>

          </div>


          <div className="subscription-info-list">

            <div>

              <span>
                <ShieldCheck size={15} />
                Access Status
              </span>

              <strong
                className={
                  accessVerified
                    ? "status-active"
                    : ""
                }
              >
                {accessVerified
                  ? "Verified"
                  : "-"}
              </strong>

            </div>


            <div>

              <span>
                <KeyRound size={15} />
                Access Type
              </span>

              <strong>
                Faculty
              </strong>

            </div>


            <div>

              <span>
                <Users size={15} />
                Institution
              </span>

              <strong>
                {selectedCollege?.name ||
                  "SRMS"}
              </strong>

            </div>

          </div>

        </div>


        {/* FACULTY RESPONSIBILITIES */}

        <div className="sidebar-card faculty-responsibilities-card">

          <div className="sidebar-card-heading">

            <div className="sidebar-icon yellow">
              <BookOpen size={19} />
            </div>

            <div>

              <h3>
                Faculty Responsibilities
              </h3>

            </div>

          </div>


          <ul className="permission-list">

            <li>
              <CircleCheck size={16} />
              <span>
                Manage assigned courses and subjects
              </span>
            </li>

            <li>
              <CircleCheck size={16} />
              <span>
                Manage student academic records
              </span>
            </li>

            <li>
              <CircleCheck size={16} />
              <span>
                Enter and update assigned results
              </span>
            </li>

            <li>
              <CircleCheck size={16} />
              <span>
                Track student academic performance
              </span>
            </li>

            <li>
              <CircleCheck size={16} />
              <span>
                Access academic information according
                to assigned permissions
              </span>
            </li>

          </ul>

        </div>


        {/* IMPORTANT INFORMATION */}

        <div className="sidebar-card faculty-important-card">

          <div className="sidebar-card-heading">

            <div className="sidebar-icon orange">
              <Info size={19} />
            </div>

            <div>

              <h3>
                Important Information
              </h3>

            </div>

          </div>


          <ul className="faculty-important-list">

            <li>
              <CircleCheck size={16} />
              <span>
                Faculty access must be authorized
                by the institution.
              </span>
            </li>

            <li>
              <CircleCheck size={16} />
              <span>
                Employee ID should match the
                institution's official record.
              </span>
            </li>

            <li>
              <CircleCheck size={16} />
              <span>
                Faculty permissions are controlled
                by the authorized administrator.
              </span>
            </li>

          </ul>

        </div>

      </aside>

    </div>
  );
}

export default FacultyRegistration;