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
  FileText,
  Mail,
  Phone,
  BriefcaseBusiness,
  Eye,
  EyeOff,
  CircleCheck,
  Info,
  Crown,
  CalendarDays,
  UserRoundCog,
  Settings,
} from "lucide-react";

import "../../../styles/registration/registration-common.css";
import "../../../styles/registration/admin-registration.css";

function AdminRegistration({ selectedCollege }) {
  const navigate = useNavigate();

  /* =========================================================
     PASSWORD VISIBILITY
     ========================================================= */

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  /* =========================================================
     LICENSE STATUS
     ========================================================= */

  const [licenseVerified, setLicenseVerified] = useState(false);

  /* =========================================================
     FORM DATA
     ========================================================= */

  const [formData, setFormData] = useState({
    institutionCode: "",
    collegeType: "",
    affiliatedUniversity: "",

    fullName: "",
    adminId: "",
    institutionalRole: "",
    designation: "",
    officialEmail: "",
    mobileNumber: "",

    password: "",
    confirmPassword: "",

    licenseKey: "",
    activationCode: "",
  });

  /* =========================================================
     HANDLE INPUT
     ========================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    /* -------------------------------------------------------
       If license information changes after verification,
       verification becomes invalid again.
       ------------------------------------------------------- */

    if (
      name === "licenseKey" ||
      name === "activationCode"
    ) {
      setLicenseVerified(false);
    }
  };

  /* =========================================================
     VERIFY LICENSE
     ========================================================= */

  const handleVerifyLicense = () => {
    if (
      !formData.licenseKey.trim() ||
      !formData.activationCode.trim()
    ) {
      alert(
        "Please enter License Key and Activation Code."
      );

      return;
    }

    /*
      Temporary frontend verification.

      Later this can be connected with backend API:

      POST /api/subscription/verify-license

      {
        licenseKey,
        activationCode,
        institutionCode
      }
    */

    setLicenseVerified(true);

    alert(
      "Subscription license verified successfully."
    );
  };

  /* =========================================================
     SUBMIT ADMIN REGISTRATION
     ========================================================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    /* License must be verified first */

    if (!licenseVerified) {
      alert(
        "Please verify your subscription license first."
      );

      return;
    }

    /* Password confirmation */

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert("Passwords do not match.");

      return;
    }

    /* Temporary frontend output */

    console.log("Admin Registration Data:", {
      college: selectedCollege,
      systemRole: "admin",
      formData,
    });

    alert(
      "Admin registration submitted successfully."
    );
  };

  return (
    <div className="registration-layout">

      {/* =====================================================
          MAIN ADMIN FORM
          ===================================================== */}

      <form
        className="registration-form"
        onSubmit={handleSubmit}
      >

        {/* ===================================================
            MAIN HEADING
            =================================================== */}

        <div className="form-main-heading">

          <div className="form-main-icon">
            <Settings size={25} />
          </div>

          <div>
            <h2>
              Admin Registration
            </h2>

            <p>
              Register as an institution administrator
              with valid subscription license.
            </p>
          </div>

          <div className="admin-info-note">

            <Info size={17} />

            <span>
              As an admin, you will get full access
              to manage your institution, departments,
              users and academic data after license
              activation.
            </span>

          </div>

        </div>


        {/* ===================================================
            SECTION 1 - SUBSCRIPTION LICENSE
            FIRST STEP
            =================================================== */}

        <div className="registration-form-section">

          <div className="section-title">

            <div className="section-number">
              1
            </div>

            <div className="section-title-icon license">
              <KeyRound size={19} />
            </div>

            <div>
              <h3>
                Subscription License Activation
              </h3>

              <p>
                Verify your subscription before
                entering institution and admin details.
              </p>
            </div>

          </div>


          <div className="license-grid">

            {/* =================================================
                LICENSE KEY
                ================================================= */}

            <div className="form-group">

              <label>
                License Key
                <span>*</span>
              </label>

              <div className="input-icon-wrapper">

                <KeyRound size={17} />

                <input
                  type="text"
                  name="licenseKey"
                  value={formData.licenseKey}
                  onChange={handleChange}
                  placeholder="Enter subscription license key"
                  required
                />

              </div>

              <small>
                Enter the license key provided
                for your institution.
              </small>

            </div>


            {/* =================================================
                ACTIVATION CODE
                ================================================= */}

            <div className="form-group">

              <label>
                Activation Code
                <span>*</span>
              </label>

              <div className="input-icon-wrapper">

                <ShieldCheck size={17} />

                <input
                  type="text"
                  name="activationCode"
                  value={formData.activationCode}
                  onChange={handleChange}
                  placeholder="Enter activation code"
                  required
                />

              </div>

              <small>
                Enter the activation code provided
                with your subscription.
              </small>

            </div>


            {/* =================================================
                VERIFY LICENSE
                ================================================= */}

            <div className="verify-license-box">

              <button
                type="button"
                className={`verify-license-btn ${
                  licenseVerified
                    ? "verified"
                    : ""
                }`}
                onClick={handleVerifyLicense}
              >

                {licenseVerified ? (
                  <>
                    <CircleCheck size={19} />

                    License Verified
                  </>
                ) : (
                  <>
                    <ShieldCheck size={19} />

                    Verify License

                    <ArrowRight size={18} />
                  </>
                )}

              </button>

              <small>
                {licenseVerified
                  ? "Your subscription is verified. You can continue registration."
                  : "Verify your subscription before entering institution details."}
              </small>

            </div>

          </div>

        </div>


        {/* ===================================================
            SECTION 2 - INSTITUTION INFORMATION
            LOCKED UNTIL LICENSE VERIFIED
            =================================================== */}

        <fieldset
          className={`registration-fieldset ${
            !licenseVerified
              ? "locked-section"
              : ""
          }`}
          disabled={!licenseVerified}
        >

          <div className="registration-form-section">

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

              {/* =================================================
                  SELECTED COLLEGE
                  ================================================= */}

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


              {/* =================================================
                  INSTITUTION CODE
                  ================================================= */}

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
                  />

                </div>

              </div>


              {/* =================================================
                  COLLEGE TYPE
                  ================================================= */}

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


              {/* =================================================
                  AFFILIATED UNIVERSITY
                  ================================================= */}

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

        </fieldset>


        {/* ===================================================
            SECTION 3 - ADMIN INFORMATION
            LOCKED UNTIL LICENSE VERIFIED
            =================================================== */}

        <fieldset
          className={`registration-fieldset ${
            !licenseVerified
              ? "locked-section"
              : ""
          }`}
          disabled={!licenseVerified}
        >

          <div className="registration-form-section">

            <div className="section-title">

              <div className="section-number">
                3
              </div>

              <div className="section-title-icon">
                <User size={19} />
              </div>

              <div>
                <h3>
                  Admin Information
                </h3>

                <p>
                  Your personal and professional information.
                </p>
              </div>

            </div>


            <div className="form-grid admin-grid">

              {/* =================================================
                  FULL NAME
                  ================================================= */}

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
                  />

                </div>

              </div>


              {/* =================================================
                  ADMIN ID
                  ================================================= */}

              <div className="form-group">

                <label>
                  Admin ID / Employee ID
                  <span>*</span>
                </label>

                <div className="input-icon-wrapper">

                  <BriefcaseBusiness size={17} />

                  <input
                    type="text"
                    name="adminId"
                    value={formData.adminId}
                    onChange={handleChange}
                    placeholder="Enter admin ID"
                    required
                  />

                </div>

              </div>


              {/* =================================================
                  INSTITUTIONAL ROLE
                  ================================================= */}

              <div className="form-group">

                <label>
                  Institutional Role
                  <span>*</span>
                </label>

                <div className="input-icon-wrapper">

                  <UserRoundCog size={17} />

                  <select
                    name="institutionalRole"
                    value={
                      formData.institutionalRole
                    }
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select your institutional role
                    </option>

                    <option value="director">
                      Director
                    </option>

                    <option value="dean">
                      Dean
                    </option>

                    <option value="hod">
                      Head of Department (HOD)
                    </option>

                    <option value="registrar">
                      Registrar
                    </option>

                    <option value="authorized-administrator">
                      Authorized Administrator
                    </option>

                    <option value="other">
                      Other
                    </option>

                  </select>

                </div>

              </div>


              {/* =================================================
                  DESIGNATION
                  ================================================= */}

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
                    placeholder="Enter your designation"
                    required
                  />

                </div>

              </div>


              {/* =================================================
                  OFFICIAL EMAIL
                  ================================================= */}

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
                  />

                </div>

              </div>


              {/* =================================================
                  MOBILE NUMBER
                  ================================================= */}

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
                  />

                </div>

              </div>


              {/* =================================================
                  PASSWORD
                  ================================================= */}

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
                  >

                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}

                  </button>

                </div>

              </div>


              {/* =================================================
                  CONFIRM PASSWORD
                  ================================================= */}

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

        </fieldset>


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
            disabled={!licenseVerified}
          >

            Complete Registration

            <ArrowRight size={19} />

          </button>

        </div>

      </form>


      {/* =====================================================
          ADMIN INFORMATION CARDS
          ===================================================== */}

      <aside className="registration-sidebar">

        {/* ===================================================
            SUBSCRIPTION DETAILS
            =================================================== */}

        <div className="sidebar-card subscription-details-card">

          <div className="sidebar-card-heading">

            <div className="sidebar-icon green">
              <FileText size={19} />
            </div>

            <div>

              <h3>
                Subscription Details
              </h3>

              <span>
                {licenseVerified
                  ? "Verified"
                  : "After Verification"}
              </span>

            </div>

          </div>


          <div className="subscription-info-list">

            <div>

              <span>
                <ShieldCheck size={15} />
                Subscription Plan
              </span>

              <strong>
                {licenseVerified
                  ? "Verified"
                  : "-"}
              </strong>

            </div>


            <div>

              <span>
                <KeyRound size={15} />
                License Status
              </span>

              <strong
                className={
                  licenseVerified
                    ? "status-active"
                    : ""
                }
              >
                {licenseVerified
                  ? "Active"
                  : "-"}
              </strong>

            </div>


            <div>

              <span>
                <CalendarDays size={15} />
                Start Date
              </span>

              <strong>
                {licenseVerified
                  ? "After Activation"
                  : "-"}
              </strong>

            </div>


            <div>

              <span>
                <CalendarDays size={15} />
                Expiry Date
              </span>

              <strong>
                {licenseVerified
                  ? "Verified"
                  : "-"}
              </strong>

            </div>


            <div>

              <span>
                <Users size={15} />
                Student Limit
              </span>

              <strong>
                {licenseVerified
                  ? "According to Plan"
                  : "-"}
              </strong>

            </div>

          </div>

        </div>


        {/* ===================================================
            ADMIN PERMISSIONS
            =================================================== */}

        <div className="sidebar-card admin-permissions-card">

          <div className="sidebar-card-heading">

            <div className="sidebar-icon yellow">
              <Crown size={19} />
            </div>

            <div>

              <h3>
                What You Can Do as an Admin
              </h3>

            </div>

          </div>


          <ul className="permission-list">

            <li>
              <CircleCheck size={16} />
              Manage institution profile
            </li>

            <li>
              <CircleCheck size={16} />
              Manage departments and HODs
            </li>

            <li>
              <CircleCheck size={16} />
              Create and manage faculty accounts
            </li>

            <li>
              <CircleCheck size={16} />
              Manage student data and results
            </li>

            <li>
              <CircleCheck size={16} />
              Access all reports and analytics
            </li>

            <li>
              <CircleCheck size={16} />
              Control user roles and permissions
            </li>

            <li>
              <CircleCheck size={16} />
              Customize institution settings
            </li>

          </ul>

        </div>


        {/* ===================================================
            IMPORTANT INFORMATION
            =================================================== */}

        <div className="sidebar-card important-card">

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


          <ul>

            <li>
              Use the license key and activation
              code provided with your SRMS subscription.
            </li>

            <li>
              Only authorized persons can register
              as Admin.
            </li>

            <li>
              After verification, your institution
              will be activated and you can start
              using all available features.
            </li>

          </ul>

        </div>

      </aside>

    </div>
  );
}

export default AdminRegistration;