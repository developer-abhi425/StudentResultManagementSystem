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
  
  Mail,
  Phone,
  CalendarDays,
  Eye,
  EyeOff,
  CircleCheck,
  Info,
  BookOpen,
  
  Hash,
  Smartphone,
} from "lucide-react";

import "../../../styles/registration/registration-common.css";
import "../../../styles/registration/student-registration.css";

function StudentRegistration({ selectedCollege }) {
  const navigate = useNavigate();

  // =========================================================
  // PASSWORD VISIBILITY
  // =========================================================

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  // =========================================================
  // OTP / STUDENT VERIFICATION
  // =========================================================

  const [verificationMethod, setVerificationMethod] =
    useState("");

  const [otpSent, setOtpSent] = useState(false);

  const [otpVerified, setOtpVerified] = useState(false);

  const [generatedOtp, setGeneratedOtp] = useState("");

  const [otp, setOtp] = useState("");

  // =========================================================
  // FORM DATA
  // =========================================================

  const [formData, setFormData] = useState({
    enrollmentNumber: "",
    rollNumber: "",

    email: "",
    mobileNumber: "",

    institutionCode: "",
    collegeType: "",
    affiliatedUniversity: "",

    fullName: "",
    dateOfBirth: "",
    gender: "",
    course: "",
    department: "",
    semester: "",
    admissionYear: "",

    password: "",
    confirmPassword: "",
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

    // If identity/contact details change,
    // previous OTP verification becomes invalid.
    if (
      name === "enrollmentNumber" ||
      name === "rollNumber" ||
      name === "email" ||
      name === "mobileNumber"
    ) {
      setOtpSent(false);
      setOtpVerified(false);
      setOtp("");
      setGeneratedOtp("");
    }
  };

  // =========================================================
  // VALIDATE STUDENT IDENTITY
  // =========================================================

  const validateStudentIdentity = () => {
    const hasEnrollmentNumber =
      formData.enrollmentNumber.trim();

    const hasRollNumber =
      formData.rollNumber.trim();

    const hasEmail =
      formData.email.trim();

    const hasMobile =
      formData.mobileNumber.trim();

    // Enrollment OR Roll Number
    if (!hasEnrollmentNumber && !hasRollNumber) {
      alert(
        "Please enter either Enrollment Number or Roll Number."
      );

      return false;
    }

    // Email OR Mobile
    if (!hasEmail && !hasMobile) {
      alert(
        "Please enter either Email Address or Mobile Number."
      );

      return false;
    }

    // Selected verification method
    if (!verificationMethod) {
      alert(
        "Please select Email or Mobile for OTP verification."
      );

      return false;
    }

    // Email selected
    if (
      verificationMethod === "email" &&
      !hasEmail
    ) {
      alert(
        "Please enter your email address."
      );

      return false;
    }

    // Mobile selected
    if (
      verificationMethod === "mobile" &&
      !hasMobile
    ) {
      alert(
        "Please enter your mobile number."
      );

      return false;
    }

    return true;
  };

  // =========================================================
  // SEND OTP
  // =========================================================

  const handleSendOtp = () => {
    if (!validateStudentIdentity()) {
      return;
    }

    // -------------------------------------------------------
    // DEMO OTP
    // -------------------------------------------------------
    // Production में यह backend API से आएगा.
    // Example:
    //
    // POST /api/student/send-otp
    //
    // -------------------------------------------------------

    const demoOtp =
      Math.floor(
        100000 + Math.random() * 900000
      ).toString();

    setGeneratedOtp(demoOtp);

    setOtp("");

    setOtpSent(true);

    setOtpVerified(false);

    /*
      Demo purpose only.

      Production में OTP को alert/console में
      नहीं दिखाना है.

      Backend:
      - OTP generate करेगा
      - Email/SMS भेजेगा
      - Expiry maintain करेगा
      - OTP verify करेगा
    */

    console.log(
      "DEMO OTP:",
      demoOtp
    );

    alert(
      `Demo OTP sent to ${
        verificationMethod === "email"
          ? "your email"
          : "your mobile number"
      }.\n\nDemo OTP: ${demoOtp}`
    );
  };

  // =========================================================
  // VERIFY OTP
  // =========================================================

  const handleVerifyOtp = () => {
    if (!otpSent) {
      alert(
        "Please send OTP first."
      );

      return;
    }

    if (!otp.trim()) {
      alert(
        "Please enter the OTP."
      );

      return;
    }

    if (otp.trim() !== generatedOtp) {
      alert(
        "Invalid OTP. Please enter the correct OTP."
      );

      return;
    }

    setOtpVerified(true);

    alert(
      "Student verification completed successfully."
    );
  };

  // =========================================================
  // SUBMIT REGISTRATION
  // =========================================================

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!otpVerified) {
      alert(
        "Please verify your Email or Mobile OTP first."
      );

      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert(
        "Passwords do not match."
      );

      return;
    }

    console.log(
      "Student Registration Data:",
      {
        college: selectedCollege,
        systemRole: "student",
        verificationMethod,
        formData,
      }
    );

    alert(
      "Student registration completed successfully."
    );
  };

  return (
    <div className="registration-layout">

      {/* =====================================================
          MAIN FORM
      ===================================================== */}

      <form
        className="registration-form student-registration"
        onSubmit={handleSubmit}
      >

        {/* ===================================================
            MAIN HEADING
        =================================================== */}

        <div className="form-main-heading">

          <div className="form-main-icon">
            <GraduationCap size={25} />
          </div>

          <div className="student-heading-content">

            <h2>
              Student Registration
            </h2>

            <p>
              Register your student account with
              your institution.
            </p>

          </div>

          <div className="student-info-note">

            <Info size={17} />

            <span>
              Verify your student identity using
              your enrollment or roll number and
              your registered email or mobile number.
            </span>

          </div>

        </div>


        {/* ===================================================
            SECTION 1 - STUDENT VERIFICATION
        =================================================== */}

        <div className="registration-form-section student-verification-section">

          <div className="section-title">

            <div className="section-number">
              1
            </div>

            <div className="section-title-icon verification">
              <ShieldCheck size={19} />
            </div>

            <div>

              <h3>
                Student Access Verification
              </h3>

              <p>
                Verify your identity before continuing
                with registration.
              </p>

            </div>

          </div>


          <div className="student-verification-content">

            {/* =================================================
                ENROLLMENT / ROLL NUMBER
            ================================================= */}

            <div className="verification-block">

              <label className="verification-main-label">
                Enrollment Number or Roll Number
                <span>*</span>
              </label>

              <p className="verification-help">
                Enter at least one of the two.
              </p>


              <div className="verification-two-column">

                {/* ENROLLMENT */}

                <div className="form-group">

                  <label>
                    Enrollment Number
                  </label>

                  <div className="input-icon-wrapper">

                    <Hash size={17} />

                    <input
                      type="text"
                      name="enrollmentNumber"
                      value={
                        formData.enrollmentNumber
                      }
                      onChange={handleChange}
                      placeholder="Enter enrollment number"
                    />

                  </div>

                </div>


                {/* ROLL NUMBER */}

                <div className="form-group">

                  <label>
                    Roll Number
                  </label>

                  <div className="input-icon-wrapper">

                    <Hash size={17} />

                    <input
                      type="text"
                      name="rollNumber"
                      value={formData.rollNumber}
                      onChange={handleChange}
                      placeholder="Enter roll number"
                    />

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                EMAIL / MOBILE
            ================================================= */}

            <div className="verification-block">

              <label className="verification-main-label">
                Email or Mobile Number
                <span>*</span>
              </label>

              <p className="verification-help">
                Enter at least one and select where
                you want to receive the OTP.
              </p>


              <div className="verification-two-column">

                {/* EMAIL */}

                <div className="form-group">

                  <label>
                    Email Address
                  </label>

                  <div className="input-icon-wrapper">

                    <Mail size={17} />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                    />

                  </div>

                </div>


                {/* MOBILE */}

                <div className="form-group">

                  <label>
                    Mobile Number
                  </label>

                  <div className="input-icon-wrapper">

                    <Phone size={17} />

                    <input
                      type="tel"
                      name="mobileNumber"
                      value={
                        formData.mobileNumber
                      }
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                    />

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                OTP METHOD
            ================================================= */}

            <div className="otp-method-section">

              <label className="verification-main-label">
                Choose OTP Verification Method
                <span>*</span>
              </label>


              <div className="otp-method-grid">

                <button
                  type="button"
                  className={`otp-method-card ${
                    verificationMethod === "email"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setVerificationMethod("email")
                  }
                >

                  <Mail size={18} />

                  <div>

                    <strong>
                      Verify via Email
                    </strong>

                    <span>
                      OTP will be sent to your email
                    </span>

                  </div>

                  <div className="otp-method-radio">
                    {verificationMethod ===
                      "email" && (
                      <div />
                    )}
                  </div>

                </button>


                <button
                  type="button"
                  className={`otp-method-card ${
                    verificationMethod === "mobile"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setVerificationMethod("mobile")
                  }
                >

                  <Smartphone size={18} />

                  <div>

                    <strong>
                      Verify via Mobile
                    </strong>

                    <span>
                      OTP will be sent to your mobile
                    </span>

                  </div>

                  <div className="otp-method-radio">
                    {verificationMethod ===
                      "mobile" && (
                      <div />
                    )}
                  </div>

                </button>

              </div>

            </div>


            {/* =================================================
                SEND OTP
            ================================================= */}

            <div className="otp-action-row">

              <button
                type="button"
                className="send-otp-btn"
                onClick={handleSendOtp}
                disabled={otpVerified}
              >

                <ShieldCheck size={18} />

                {otpSent
                  ? "Resend OTP"
                  : "Send OTP"}

                <ArrowRight size={17} />

              </button>

            </div>


            {/* =================================================
                OTP INPUT
            ================================================= */}

            {otpSent && (
              <div className="otp-verification-box">

                <div className="otp-input-content">

                  <label>
                    Enter OTP
                    <span>*</span>
                  </label>

                  <div className="input-icon-wrapper">

                    <KeyRound size={17} />

                    <input
                      type="text"
                      value={otp}
                      onChange={(event) =>
                        setOtp(
                          event.target.value
                            .replace(/\D/g, "")
                            .slice(0, 6)
                        )
                      }
                      placeholder="Enter 6-digit OTP"
                      maxLength={6}
                    />

                  </div>

                </div>


                <button
                  type="button"
                  className={`verify-otp-btn ${
                    otpVerified
                      ? "verified"
                      : ""
                  }`}
                  onClick={handleVerifyOtp}
                  disabled={otpVerified}
                >

                  {otpVerified ? (
                    <>
                      <CircleCheck size={18} />
                      Verified
                    </>
                  ) : (
                    <>
                      <ShieldCheck size={18} />
                      Verify OTP
                    </>
                  )}

                </button>

              </div>
            )}


            {/* =================================================
                VERIFIED STATUS
            ================================================= */}

            {otpVerified && (
              <div className="student-verification-success">

                <CircleCheck size={19} />

                <div>

                  <strong>
                    Student identity verified successfully
                  </strong>

                  <span>
                    You can now continue with your
                    registration.
                  </span>

                </div>

              </div>
            )}

          </div>

        </div>


        {/* ===================================================
            SECTION 2 - INSTITUTION INFORMATION
        =================================================== */}

        <div
          className={`registration-form-section ${
            !otpVerified
              ? "locked-section"
              : ""
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
                  value={
                    formData.institutionCode
                  }
                  onChange={handleChange}
                  placeholder="Enter institution code"
                  required
                  disabled={!otpVerified}
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
                disabled={!otpVerified}
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
                  disabled={!otpVerified}
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
            SECTION 3 - STUDENT INFORMATION
        =================================================== */}

        <div
          className={`registration-form-section ${
            !otpVerified
              ? "locked-section"
              : ""
          }`}
        >

          <div className="section-title">

            <div className="section-number">
              3
            </div>

            <div className="section-title-icon">
              <User size={19} />
            </div>

            <div>

              <h3>
                Student Information
              </h3>

              <p>
                Enter your official academic information.
              </p>

            </div>

          </div>


          <div className="form-grid student-grid">

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
                  disabled={!otpVerified}
                />

              </div>

            </div>


            {/* DATE OF BIRTH */}

            <div className="form-group">

              <label>
                Date of Birth
                <span>*</span>
              </label>

              <div className="input-icon-wrapper">

                <CalendarDays size={17} />

                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  disabled={!otpVerified}
                />

              </div>

            </div>


            {/* GENDER */}

            <div className="form-group">

              <label>
                Gender
                <span>*</span>
              </label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                disabled={!otpVerified}
              >

                <option value="">
                  Select gender
                </option>

                <option value="male">
                  Male
                </option>

                <option value="female">
                  Female
                </option>

                <option value="other">
                  Other
                </option>

              </select>

            </div>


            {/* COURSE */}

            <div className="form-group">

              <label>
                Course / Program
                <span>*</span>
              </label>

              <div className="input-icon-wrapper">

                <BookOpen size={17} />

                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  placeholder="e.g. MCA, B.Tech, BCA"
                  required
                  disabled={!otpVerified}
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
                  disabled={!otpVerified}
                />

              </div>

            </div>


            {/* SEMESTER */}

            <div className="form-group">

              <label>
                Current Semester
                <span>*</span>
              </label>

              <select
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                required
                disabled={!otpVerified}
              >

                <option value="">
                  Select semester
                </option>

                <option value="1">
                  Semester 1
                </option>

                <option value="2">
                  Semester 2
                </option>

                <option value="3">
                  Semester 3
                </option>

                <option value="4">
                  Semester 4
                </option>

                <option value="5">
                  Semester 5
                </option>

                <option value="6">
                  Semester 6
                </option>

                <option value="7">
                  Semester 7
                </option>

                <option value="8">
                  Semester 8
                </option>

              </select>

            </div>


            {/* ADMISSION YEAR */}

            <div className="form-group">

              <label>
                Admission Year
                <span>*</span>
              </label>

              <select
                name="admissionYear"
                value={formData.admissionYear}
                onChange={handleChange}
                required
                disabled={!otpVerified}
              >

                <option value="">
                  Select admission year
                </option>

                <option value="2026">
                  2026
                </option>

                <option value="2025">
                  2025
                </option>

                <option value="2024">
                  2024
                </option>

                <option value="2023">
                  2023
                </option>

                <option value="2022">
                  2022
                </option>

              </select>

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
                  disabled={!otpVerified}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      (previous) => !previous
                    )
                  }
                  disabled={!otpVerified}
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
                  disabled={!otpVerified}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      (previous) => !previous
                    )
                  }
                  disabled={!otpVerified}
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
            disabled={!otpVerified}
          >
            Complete Registration
            <ArrowRight size={19} />
          </button>

        </div>

      </form>


      {/* =====================================================
          STUDENT INFORMATION CARDS
      ===================================================== */}

      <aside className="registration-sidebar">

        {/* ACCESS DETAILS */}

        <div className="sidebar-card student-access-card">

          <div className="sidebar-card-heading">

            <div className="sidebar-icon blue">
              <ShieldCheck size={19} />
            </div>

            <div>

              <h3>
                Verification Details
              </h3>

              <span>
                Student Identity
              </span>

            </div>

          </div>


          <div className="subscription-info-list">

            <div>

              <span>
                <ShieldCheck size={15} />
                Verification Status
              </span>

              <strong
                className={
                  otpVerified
                    ? "status-active"
                    : ""
                }
              >
                {otpVerified
                  ? "Verified"
                  : "Pending"}
              </strong>

            </div>


            <div>

              <span>
                <KeyRound size={15} />
                Verification Method
              </span>

              <strong>
                {verificationMethod === "email"
                  ? "Email OTP"
                  : verificationMethod === "mobile"
                  ? "Mobile OTP"
                  : "-"}
              </strong>

            </div>


            <div>

              <span>
                <Building2 size={15} />
                Institution
              </span>

              <strong>
                {selectedCollege?.name ||
                  "SRMS"}
              </strong>

            </div>

          </div>

        </div>


        {/* STUDENT SERVICES */}

        <div className="sidebar-card student-services-card">

          <div className="sidebar-card-heading">

            <div className="sidebar-icon yellow">
              <GraduationCap size={19} />
            </div>

            <div>

              <h3>
                Student Services
              </h3>

            </div>

          </div>


          <ul className="permission-list">

            <li>
              <CircleCheck size={16} />
              <span>
                View academic profile and information
              </span>
            </li>

            <li>
              <CircleCheck size={16} />
              <span>
                View semester-wise examination results
              </span>
            </li>

            <li>
              <CircleCheck size={16} />
              <span>
                Download result and academic documents
              </span>
            </li>

            <li>
              <CircleCheck size={16} />
              <span>
                Access approved academic notifications
              </span>
            </li>

            <li>
              <CircleCheck size={16} />
              <span>
                Manage authorized student profile details
              </span>
            </li>

          </ul>

        </div>


        {/* IMPORTANT INFORMATION */}

        <div className="sidebar-card student-important-card">

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


          <ul className="student-important-list">

            <li>
              <CircleCheck size={16} />

              <span>
                Enter either your Enrollment Number
                or Roll Number.
              </span>
            </li>

            <li>
              <CircleCheck size={16} />

              <span>
                Provide either your email address
                or mobile number for OTP verification.
              </span>
            </li>

            <li>
              <CircleCheck size={16} />

              <span>
                Your student information should match
                the institution's official records.
              </span>
            </li>

            <li>
              <CircleCheck size={16} />

              <span>
                Only verified students can complete
                the registration process.
              </span>
            </li>

          </ul>

        </div>

      </aside>

    </div>
  );
}

export default StudentRegistration;