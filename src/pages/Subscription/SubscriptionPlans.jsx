import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Check,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  ChevronDown,
  X,
} from "lucide-react";

import "../../styles/subscription-plans.css";

function SubscriptionPlans() {
  const navigate = useNavigate();

  /* =========================================================
     SELECTED PLAN
  ========================================================= */

  const [selectedPlan, setSelectedPlan] = useState("professional");


  /* =========================================================
     PLANS
  ========================================================= */

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "₹9,999",
      period: "/ year",
      description:
        "For small colleges starting with digital result management.",
      students: "Up to 1,500 Students",

      features: [
        "Student Management",
        "Faculty Management",
        "Result Management",
        "Examination Management",
        "Basic Reports",
        "Email Notifications",
        "Admin Dashboard",
      ],
    },

    {
      id: "professional",
      name: "Professional",
      price: "₹29,999",
      period: "/ year",
      description:
        "Complete solution for growing colleges and institutions.",
      students: "Up to 5,000 Students",

      popular: true,

      features: [
        "Everything in Basic",
        "Advanced Analytics",
        "Multiple Departments",
        "Examiner Management",
        "QR Result Verification",
        "PDF Result Generation",
        "Email + SMS Notifications",
        "Role-Based Access",
        "Audit Logs",
        "Priority Support",
      ],
    },

    {
      id: "enterprise",
      name: "Enterprise",
      price: "₹49,999+",
      period: "/ year",
      description:
        "For universities and large educational institutions.",
      students: "Unlimited+ Students",

      features: [
        "Everything in Professional",
        "Multiple Campuses",
        "Multiple Institute Units",
        "Advanced Analytics",
        "Custom Roles & Permissions",
        "Custom Branding",
        "API Integration",
        "Dedicated Support",
        "Custom Deployment",
      ],
    },
  ];


  /* =========================================================
     COMPLETE FEATURE LIST
  ========================================================= */

  const comparisonFeatures = [
    "Student Management",
    "Faculty Management",
    "Result Management",
    "Examination Management",
    "Basic Reports",
    "Email Notifications",
    "Admin Dashboard",
    "Advanced Analytics",
    "Multiple Departments",
    "Examiner Management",
    "QR Result Verification",
    "PDF Result Generation",
    "Email + SMS Notifications",
    "Role-Based Access",
    "Audit Logs",
    "Priority Support",
    "Multiple Campuses",
    "Multiple Institute Units",
    "Custom Roles & Permissions",
    "Custom Branding",
    "API Integration",
    "Dedicated Support",
    "Custom Deployment",
  ];


  /* =========================================================
     FEATURE MAPPING
  ========================================================= */

  const planFeatures = {
    basic: [
      "Student Management",
      "Faculty Management",
      "Result Management",
      "Examination Management",
      "Basic Reports",
      "Email Notifications",
      "Admin Dashboard",
    ],

    professional: [
      "Student Management",
      "Faculty Management",
      "Result Management",
      "Examination Management",
      "Basic Reports",
      "Email Notifications",
      "Admin Dashboard",
      "Advanced Analytics",
      "Multiple Departments",
      "Examiner Management",
      "QR Result Verification",
      "PDF Result Generation",
      "Email + SMS Notifications",
      "Role-Based Access",
      "Audit Logs",
      "Priority Support",
    ],

    enterprise: [
      "Student Management",
      "Faculty Management",
      "Result Management",
      "Examination Management",
      "Basic Reports",
      "Email Notifications",
      "Admin Dashboard",
      "Advanced Analytics",
      "Multiple Departments",
      "Examiner Management",
      "QR Result Verification",
      "PDF Result Generation",
      "Email + SMS Notifications",
      "Role-Based Access",
      "Audit Logs",
      "Priority Support",
      "Multiple Campuses",
      "Multiple Institute Units",
      "Custom Roles & Permissions",
      "Custom Branding",
      "API Integration",
      "Dedicated Support",
      "Custom Deployment",
    ],
  };


  /* =========================================================
     SELECTED PLAN DATA
  ========================================================= */

  const selectedPlanData =
    plans.find((plan) => plan.id === selectedPlan) || plans[1];

  const selectedFeatures =
    planFeatures[selectedPlan] || [];

  const includedFeatures =
    comparisonFeatures.filter((feature) =>
      selectedFeatures.includes(feature)
    );

  const excludedFeatures =
    comparisonFeatures.filter(
      (feature) => !selectedFeatures.includes(feature)
    );


  /* =========================================================
     SELECT PLAN
  ========================================================= */

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
  };


  /* =========================================================
     GET SUBSCRIPTION
  ========================================================= */

  const handleGetSubscription = () => {
    navigate("/subscription/apply", {
      state: {
        plan: selectedPlanData,
      },
    });
  };


  /* =========================================================
     SCROLL TO DETAILS
  ========================================================= */

  const handleScrollToDetails = () => {
    const section = document.getElementById(
      "selected-plan-details"
    );

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <main className="subscription-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="subscription-header">

        <div className="subscription-brand">

          <div className="subscription-logo">
            SRMS
          </div>

          <div>
            <h2>
              Student Result Management System
            </h2>

            <p>
              Institutional Subscription
            </p>
          </div>

        </div>

        <div className="secure-badge">

          <ShieldCheck size={18} />

          <span>
            Secure Institutional Platform
          </span>

        </div>

      </section>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="subscription-hero">

        <div className="step-label">
          Step 1 of 3
        </div>

        <h1>
          Choose Your{" "}
          <span>Subscription Plan</span>
        </h1>

        <p>
          Select the plan that best fits your
          college or institution.
        </p>

        <div className="billing-label">

          <span>
            Annual Billing
          </span>

          <small>
            Institutional plans
          </small>

        </div>

      </section>


      {/* =====================================================
          PLANS
      ===================================================== */}

      <section className="plans-section">

        <div className="plans-grid">

          {plans.map((plan) => {

            const isSelected =
              selectedPlan === plan.id;

            return (
              <div
                key={plan.id}
                className={`plan-card ${
                  isSelected ? "selected" : ""
                } ${
                  plan.popular ? "popular" : ""
                }`}

                onClick={() =>
                  handleSelectPlan(plan.id)
                }
              >

                {/* Recommended Badge */}

                {plan.popular && (
                  <div className="popular-badge">
                    Most Recommended
                  </div>
                )}


                {/* Plan Header */}

                <div className="plan-top">

                  <div>

                    <h3>
                      {plan.name}
                    </h3>

                    <p>
                      {plan.description}
                    </p>

                  </div>


                  {/* Radio */}

                  <div className="plan-radio">

                    {isSelected && (
                      <div className="plan-radio-dot"></div>
                    )}

                  </div>

                </div>


                {/* Price */}

                <div className="plan-price">

                  <strong>
                    {plan.price}
                  </strong>

                  <span>
                    {plan.period}
                  </span>

                </div>


                {/* Students */}

                <div className="student-limit">
                  {plan.students}
                </div>


                <div className="plan-divider"></div>


                {/* Features */}

                <ul className="plan-features">

                  {plan.features.map(
                    (feature, index) => (

                      <li key={index}>

                        <Check size={17} />

                        <span>
                          {feature}
                        </span>

                      </li>

                    )
                  )}

                </ul>


                {/* Get Subscription */}

                <button
                  type="button"
                  className={`plan-select-btn ${
                    isSelected ? "active" : ""
                  }`}

                  onClick={(event) => {

                    event.stopPropagation();

                    if (isSelected) {
                      handleGetSubscription();
                    } else {
                      handleSelectPlan(plan.id);
                    }

                  }}
                >

                  <span>
                    Get Subscription
                  </span>

                  <ArrowRight size={17} />

                </button>

              </div>
            );
          })}

        </div>


        {/* ===================================================
            SCROLL TO DETAILS
        =================================================== */}

        <button
          type="button"
          className="scroll-details-btn"
          onClick={handleScrollToDetails}
        >

          <span>
            Scroll to See Details
          </span>

          <ChevronDown size={19} />

        </button>


        {/* ===================================================
            BACK
        =================================================== */}

        <div className="subscription-actions">

          <button
            type="button"
            className="subscription-back-btn"
            onClick={() => navigate("/")}
          >

            <ArrowLeft size={18} />

            <span>
              Back
            </span>

          </button>

        </div>

      </section>


      {/* =====================================================
          SELECTED PLAN DETAILS
      ===================================================== */}

      <section
        id="selected-plan-details"
        className="selected-plan-details"
      >

        {/* ===================================================
            SECTION HEADING
        =================================================== */}

        <div className="details-heading">

          <span className="details-tag">
            SELECTED PLAN
          </span>

          <h2>
            Your{" "}
            <span>
              {selectedPlanData.name}
            </span>{" "}
            Plan
          </h2>

          <p>
            Here are the details, benefits and
            available features of your selected
            subscription plan.
          </p>

        </div>


        {/* ===================================================
            SELECTED PLAN SUMMARY
        =================================================== */}

        <div className="selected-plan-summary">

          <div className="selected-plan-info">

            <span className="selected-label">
              CURRENTLY SELECTED
            </span>

            <h3>
              {selectedPlanData.name}
            </h3>

            <p>
              {selectedPlanData.description}
            </p>

          </div>


          <div className="selected-plan-price">

            <strong>
              {selectedPlanData.price}
            </strong>

            <span>
              {selectedPlanData.period}
            </span>

            <small>
              {selectedPlanData.students}
            </small>

          </div>

        </div>


        {/* ===================================================
            INCLUDED / NOT INCLUDED
        =================================================== */}

        <div className="plan-detail-grid">

          {/* INCLUDED */}

          <div className="plan-detail-card included">

            <div className="detail-card-heading">

              <div className="detail-heading-icon">
                <Check size={19} />
              </div>

              <div>

                <h3>
                  What's Included
                </h3>

                <p>
                  Features available in your selected plan
                </p>

              </div>

            </div>


            <ul>

              {includedFeatures.map(
                (feature) => (

                  <li key={feature}>

                    <span className="check-circle">
                      <Check size={13} />
                    </span>

                    <span>
                      {feature}
                    </span>

                  </li>

                )
              )}

            </ul>

          </div>


          {/* NOT INCLUDED */}

          <div className="plan-detail-card excluded">

            <div className="detail-card-heading">

              <div className="detail-heading-icon cross">
                <X size={19} />
              </div>

              <div>

                <h3>
                  Not Included
                </h3>

                <p>
                  Features available in higher plans
                </p>

              </div>

            </div>


            {excludedFeatures.length > 0 ? (

              <ul>

                {excludedFeatures.map(
                  (feature) => (

                    <li key={feature}>

                      <span className="cross-circle">
                        <X size={13} />
                      </span>

                      <span>
                        {feature}
                      </span>

                    </li>

                  )
                )}

              </ul>

            ) : (

              <div className="all-features-message">

                <Check size={17} />

                <span>
                  All available features are
                  included in this plan.
                </span>

              </div>

            )}

          </div>

        </div>


        {/* ===================================================
            BENEFITS
        =================================================== */}

        <div className="benefits-section">

          <div className="details-heading small">

            <span className="details-tag">
              BENEFITS
            </span>

            <h2>
              Why Choose{" "}
              <span>
                {selectedPlanData.name}?
              </span>
            </h2>

          </div>


          <div className="benefits-list">

            <div className="benefit-item">

              <div className="benefit-number">
                01
              </div>

              <div>

                <h3>
                  Centralized Management
                </h3>

                <p>
                  Manage students, faculty,
                  examinations and results from
                  one centralized platform.
                </p>

              </div>

            </div>


            <div className="benefit-item">

              <div className="benefit-number">
                02
              </div>

              <div>

                <h3>
                  Faster Result Processing
                </h3>

                <p>
                  Reduce manual work and simplify
                  the complete academic result
                  management workflow.
                </p>

              </div>

            </div>


            <div className="benefit-item">

              <div className="benefit-number">
                03
              </div>

              <div>

                <h3>
                  Secure Institutional Access
                </h3>

                <p>
                  Provide authorized users with
                  controlled access to academic
                  information.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* ===================================================
            PLAN COMPARISON
        =================================================== */}

        <div className="plan-comparison">

          <div className="details-heading">

            <span className="details-tag">
              PLAN COMPARISON
            </span>

            <h2>
              Basic vs Professional vs Enterprise
            </h2>

            <p>
              Compare the features available in
              all three institutional plans.
            </p>

          </div>


          <div className="comparison-table-wrapper">

            <table className="comparison-table">

              <thead>

                <tr>

                  <th>
                    Features
                  </th>

                  <th
                    className={
                      selectedPlan === "basic"
                        ? "comparison-selected"
                        : ""
                    }
                  >
                    Basic
                  </th>

                  <th
                    className={
                      selectedPlan === "professional"
                        ? "comparison-selected"
                        : ""
                    }
                  >
                    Professional
                  </th>

                  <th
                    className={
                      selectedPlan === "enterprise"
                        ? "comparison-selected"
                        : ""
                    }
                  >
                    Enterprise
                  </th>

                </tr>

              </thead>


              <tbody>

                {comparisonFeatures.map(
                  (feature) => (

                    <tr key={feature}>

                      <td>
                        {feature}
                      </td>


                      {/* BASIC */}

                      <td
                        className={
                          selectedPlan === "basic"
                            ? "comparison-selected"
                            : ""
                        }
                      >

                        {planFeatures.basic.includes(
                          feature
                        ) ? (

                          <span className="compare-check">
                            <Check size={14} />
                          </span>

                        ) : (

                          <span className="compare-cross">
                            <X size={14} />
                          </span>

                        )}

                      </td>


                      {/* PROFESSIONAL */}

                      <td
                        className={
                          selectedPlan === "professional"
                            ? "comparison-selected"
                            : ""
                        }
                      >

                        {planFeatures.professional.includes(
                          feature
                        ) ? (

                          <span className="compare-check">
                            <Check size={14} />
                          </span>

                        ) : (

                          <span className="compare-cross">
                            <X size={14} />
                          </span>

                        )}

                      </td>


                      {/* ENTERPRISE */}

                      <td
                        className={
                          selectedPlan === "enterprise"
                            ? "comparison-selected"
                            : ""
                        }
                      >

                        {planFeatures.enterprise.includes(
                          feature
                        ) ? (

                          <span className="compare-check">
                            <Check size={14} />
                          </span>

                        ) : (

                          <span className="compare-cross">
                            <X size={14} />
                          </span>

                        )}

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>


          {/* =================================================
              PLAN DIFFERENCES
          ================================================= */}

          <div className="plan-differences">


            {/* BASIC */}

            <div
              className={`difference-card ${
                selectedPlan === "basic"
                  ? "highlighted"
                  : ""
              }`}
            >

              <h3>
                Basic
              </h3>

              <ul>

                <li>
                  Best for small colleges
                </li>

                <li>
                  Core student and result management
                </li>

                <li>
                  Basic reports and email notifications
                </li>

                <li>
                  No advanced analytics
                </li>

                <li>
                  No multi-campus support
                </li>

              </ul>

            </div>


            {/* PROFESSIONAL */}

            <div
              className={`difference-card ${
                selectedPlan === "professional"
                  ? "highlighted"
                  : ""
              }`}
            >

              <h3>
                Professional
              </h3>

              <ul>

                <li>
                  Best for growing institutions
                </li>

                <li>
                  Advanced analytics and departments
                </li>

                <li>
                  QR and PDF result support
                </li>

                <li>
                  Email + SMS notifications
                </li>

                <li>
                  Role-based access and audit logs
                </li>

              </ul>

            </div>


            {/* ENTERPRISE */}

            <div
              className={`difference-card ${
                selectedPlan === "enterprise"
                  ? "highlighted"
                  : ""
              }`}
            >

              <h3>
                Enterprise
              </h3>

              <ul>

                <li>
                  Best for universities
                </li>

                <li>
                  Multiple campuses and units
                </li>

                <li>
                  Custom roles and branding
                </li>

                <li>
                  API integration
                </li>

                <li>
                  Dedicated support and deployment
                </li>

              </ul>

            </div>

          </div>

        </div>


        {/* ===================================================
            FINAL GET SUBSCRIPTION
        =================================================== */}

        <div className="final-subscription-action">

          <div>

            <span>
              Selected Plan
            </span>

            <h3>
              {selectedPlanData.name}
            </h3>

            <p>
              {selectedPlanData.price}{" "}
              {selectedPlanData.period}
            </p>

          </div>


          <button
            type="button"
            onClick={handleGetSubscription}
          >

            Get Subscription

            <ArrowRight size={18} />

          </button>

        </div>

      </section>

    </main>
  );
}

export default SubscriptionPlans;