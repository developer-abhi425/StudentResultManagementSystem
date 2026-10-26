import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Mail,
  Phone,
  MapPin,
  User,
  GraduationCap,
  ShieldCheck,
  Globe,
  Users,
  Hash,
} from "lucide-react";

import "../../styles/subscription-application.css";

function SubscriptionApplication() {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedPlan = location.state?.plan;

  const [formData, setFormData] = useState({
    collegeName: "",
    collegeType: "",
    affiliatedUniversity: "",
    collegeCode: "",
    studentCount: "",

    institutionAuthority: "",
    authorityName: "",
    designation: "",
    contactPerson: "",
    officialEmail: "",
    contactNumber: "",
    alternateNumber: "",

    address: "",
    city: "",
    state: "",
    pincode: "",
    website: "",
  });

  const greaterNoidaColleges = [
    "Noida Institute of Engineering and Technology (NIET)",
    "G.L. Bajaj Institute of Technology and Management",
    "Sharda University",
    "Bennett University",
    "Galgotias University",
    "Gautam Buddha University",
    "Birla Institute of Management Technology (BIMTECH)",
    "I.T.S Engineering College",
    "Noida International University",
    "Mangalmay Institute of Management and Technology",
    "Accurate Institute of Management and Technology",
    "Lloyd Institute of Engineering and Technology",
    "KCC Institute of Technology and Management",
    "IIMT College of Engineering",
    "IEC College of Engineering and Technology",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Subscription Application:", {
      selectedPlan,
      formData,
    });

    alert("Subscription application submitted successfully.");
  };

  if (!selectedPlan) {
    return (
      <main className="application-page">
        <section className="application-empty">
          <ShieldCheck size={42} />

          <h1>No Plan Selected</h1>

          <p>
            Please select a subscription plan before starting your
            application.
          </p>

          <button
            type="button"
            onClick={() => navigate("/subscription/plans")}
          >
            Choose Subscription Plan
            <ArrowRight size={18} />
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="application-page">

      {/* ================= HEADER ================= */}

      <header className="application-header">
        <div className="application-brand">

          <div className="application-logo">
            SRMS
          </div>

        </div>

        <div className="application-secure">
          <ShieldCheck size={17} />
          <span>Secure Institutional Platform</span>
        </div>
      </header>


      {/* ================= HERO ================= */}

      <section className="application-hero">

        <div className="application-step">
          Step 3 of 3
        </div>

        <h1>
          Subscription <span>Application</span>
        </h1>

        <p>
          Complete your institution details to continue with
          the subscription process.
        </p>

      </section>


      {/* ================= MAIN ================= */}

      <section className="application-container">

        {/* ================= SELECTED PLAN ================= */}

        <div className="application-plan-card">

          <div className="application-plan-info">

            <span>SELECTED SUBSCRIPTION</span>

            <h2>{selectedPlan.name}</h2>

            <p>{selectedPlan.description}</p>

          </div>

          <div className="application-plan-price">

            <strong>{selectedPlan.price}</strong>

            <small>
              {selectedPlan.period || "/ year"}
            </small>

            <em>
              {selectedPlan.students}
            </em>

          </div>

        </div>


        {/* ================= FORM ================= */}

        <form
          className="subscription-form"
          onSubmit={handleSubmit}
        >

          {/* ==================================================
              COLLEGE INFORMATION
          ================================================== */}

          <div className="form-section">

            <div className="form-section-heading">

              <div className="form-section-icon">
                <Building2 size={19} />
              </div>

              <div>
                <h2>College Information</h2>

                <p>
                  Enter the official details of your institution.
                </p>
              </div>

            </div>


            <div className="form-grid">

              {/* College Name */}

              <div className="form-group full-width">

                <label>
                  Select College / Institution
                  <span>*</span>
                </label>

                <div className="field-with-icon">

                  <Building2 size={16} />

                  <select
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select your college / institution
                    </option>

                    {greaterNoidaColleges.map((college) => (
                      <option
                        key={college}
                        value={college}
                      >
                        {college}
                      </option>
                    ))}

                    <option value="other">
                      Other Institution
                    </option>

                  </select>

                </div>

              </div>


              {/* College Type */}

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


              {/* Affiliated University */}

              <div className="form-group">

                <label>
                  Affiliated / Governing University
                </label>

                <div className="field-with-icon">

                  <GraduationCap size={16} />

                  <select
                    name="affiliatedUniversity"
                    value={formData.affiliatedUniversity}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select university
                    </option>

                    <option value="aktu">
                      Dr. A.P.J. Abdul Kalam Technical University
                      (AKTU)
                    </option>

                    <option value="ccsu">
                      Chaudhary Charan Singh University (CCSU)
                    </option>

                    <option value="gbu">
                      Gautam Buddha University
                    </option>

                    <option value="sharda">
                      Sharda University
                    </option>

                    <option value="galgotias">
                      Galgotias University
                    </option>

                    <option value="other">
                      Other University
                    </option>

                  </select>

                </div>

              </div>


              {/* College Code */}

              <div className="form-group">

                <label>
                  Institution / College Code
                </label>

                <div className="field-with-icon">

                  <Hash size={16} />

                  <input
                    type="text"
                    name="collegeCode"
                    value={formData.collegeCode}
                    onChange={handleChange}
                    placeholder="Enter institution code"
                  />

                </div>

              </div>


              {/* Student Count */}

              <div className="form-group">

                <label>
                  Approx. Student Strength
                  <span>*</span>
                </label>

                <div className="field-with-icon">

                  <Users size={16} />

                  <input
                    type="number"
                    name="studentCount"
                    value={formData.studentCount}
                    onChange={handleChange}
                    placeholder="Total students"
                    min="1"
                    required
                  />

                </div>

              </div>

            </div>

          </div>


          {/* ==================================================
              AUTHORITY & CONTACT
          ================================================== */}

          <div className="form-section">

            <div className="form-section-heading">

              <div className="form-section-icon">
                <User size={19} />
              </div>

              <div>
                <h2>
                  Institutional Authority & Contact
                </h2>

                <p>
                  Provide the details of the authorized
                  institutional representative.
                </p>
              </div>

            </div>


            <div className="form-grid">

              {/* Authority */}

              <div className="form-group">

                <label>
                  Institutional Authority
                  <span>*</span>
                </label>

                <select
                  name="institutionAuthority"
                  value={formData.institutionAuthority}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select authority
                  </option>

                  <option value="director">
                    Director
                  </option>

                  <option value="dean">
                    Dean
                  </option>

                  <option value="registrar">
                    Registrar
                  </option>

                  <option value="vice-chancellor">
                    Vice Chancellor
                  </option>

                  <option value="head">
                    Head of Institution
                  </option>

                  <option value="other">
                    Other
                  </option>

                </select>

              </div>


              {/* Authority Name */}

              <div className="form-group">

                <label>
                  Authority Name
                  <span>*</span>
                </label>

                <div className="field-with-icon">

                  <User size={16} />

                  <input
                    type="text"
                    name="authorityName"
                    value={formData.authorityName}
                    onChange={handleChange}
                    placeholder="Enter authority name"
                    required
                  />

                </div>

              </div>


              {/* Designation */}

              <div className="form-group">

                <label>
                  Designation
                </label>

                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="e.g. Dean Academics"
                />

              </div>


              {/* Authorized Person */}

              <div className="form-group">

                <label>
                  Authorized Contact Person
                  <span>*</span>
                </label>

                <div className="field-with-icon">

                  <User size={16} />

                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="Enter contact person"
                    required
                  />

                </div>

              </div>


              {/* Email */}

              <div className="form-group">

                <label>
                  Official Email
                  <span>*</span>
                </label>

                <div className="field-with-icon">

                  <Mail size={16} />

                  <input
                    type="email"
                    name="officialEmail"
                    value={formData.officialEmail}
                    onChange={handleChange}
                    placeholder="official@college.edu"
                    required
                  />

                </div>

              </div>


              {/* Contact Number */}

              <div className="form-group">

                <label>
                  Official Contact Number
                  <span>*</span>
                </label>

                <div className="field-with-icon">

                  <Phone size={16} />

                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Enter contact number"
                    required
                  />

                </div>

              </div>


              {/* Alternate Number */}

              <div className="form-group">

                <label>
                  Alternate Contact Number
                </label>

                <div className="field-with-icon">

                  <Phone size={16} />

                  <input
                    type="tel"
                    name="alternateNumber"
                    value={formData.alternateNumber}
                    onChange={handleChange}
                    placeholder="Optional alternate number"
                  />

                </div>

              </div>

            </div>

          </div>


          {/* ==================================================
              LOCATION
          ================================================== */}

          <div className="form-section">

            <div className="form-section-heading">

              <div className="form-section-icon">
                <MapPin size={19} />
              </div>

              <div>
                <h2>Institution Location</h2>

                <p>
                  Enter the registered location and online
                  presence of your institution.
                </p>
              </div>

            </div>


            <div className="form-grid">

              {/* Address */}

              <div className="form-group full-width">

                <label>
                  Complete Institution Address
                  <span>*</span>
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter complete registered institution address"
                  rows="3"
                  required
                />

              </div>


              {/* City */}

              <div className="form-group">

                <label>
                  City
                  <span>*</span>
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  required
                />

              </div>


              {/* State */}

              <div className="form-group">

                <label>
                  State
                  <span>*</span>
                </label>

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter state"
                  required
                />

              </div>


              {/* PIN */}

              <div className="form-group">

                <label>
                  PIN Code
                  <span>*</span>
                </label>

                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Enter PIN code"
                  maxLength="6"
                  required
                />

              </div>


              {/* Website */}

              <div className="form-group">

                <label>
                  Official Institution Website
                  <span>*</span>
                </label>

                <div className="field-with-icon">

                  <Globe size={16} />

                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://www.example.edu"
                    required
                  />

                </div>

              </div>

            </div>

          </div>


          {/* ==================================================
              ACTIONS
          ================================================== */}

          <div className="application-actions">

            <button
              type="button"
              className="application-back-btn"
              onClick={() =>
                navigate("/subscription/plans")
              }
            >
              <ArrowLeft size={17} />

              Back to Plans
            </button>


            <button
              type="submit"
              className="application-submit-btn"
            >
              Submit Subscription Application

              <ArrowRight size={18} />
            </button>

          </div>


          <p className="application-note">
            By submitting this application, you confirm that
            the information provided belongs to your institution
            and is accurate to the best of your knowledge.
          </p>

        </form>

      </section>

    </main>
  );
}

export default SubscriptionApplication;