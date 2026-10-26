import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  X,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import "../../styles/college-selection.css";

function CollegeSelection() {
  const navigate = useNavigate();

  const colleges = [
    {
      id: 1,
      name: "Noida Institute of Engineering & Technology",
      location: "Greater Noida, Uttar Pradesh",
      university: "AKTU University",
      logo: "NIET",
      logoType: "niet",
    },
    {
      id: 2,
      name: "ABES Engineering College",
      location: "Ghaziabad, Uttar Pradesh",
      university: "AKTU University",
      logo: "ABES",
      logoType: "abes",
    },
    {
      id: 3,
      name: "Galgotias University",
      location: "Greater Noida, Uttar Pradesh",
      university: "Private University",
      logo: "GU",
      logoType: "gu",
    },
    {
      id: 4,
      name: "Sharda University",
      location: "Greater Noida, Uttar Pradesh",
      university: "Private University",
      logo: "SU",
      logoType: "sharda",
    },
    {
      id: 5,
      name: "Jaypee Institute of Information Technology",
      location: "Noida, Uttar Pradesh",
      university: "Deemed University",
      logo: "JIIT",
      logoType: "jiit",
    },
    {
      id: 6,
      name: "Amity University",
      location: "Noida, Uttar Pradesh",
      university: "Private University",
      logo: "AMITY",
      logoType: "amity",
    },
    {
      id: 7,
      name: "IIMT College of Engineering",
      location: "Meerut, Uttar Pradesh",
      university: "AKTU University",
      logo: "IIMT",
      logoType: "iimt",
    },
    {
      id: 8,
      name: "KIET Group of Institutions",
      location: "Ghaziabad, Uttar Pradesh",
      university: "AKTU University",
      logo: "KIET",
      logoType: "kiet",
    },
    {
      id: 9,
      name: "AKGEC (Ajay Kumar Garg Engineering College)",
      location: "Ghaziabad, Uttar Pradesh",
      university: "AKTU University",
      logo: "AKGEC",
      logoType: "akgec",
    },
  ];

  const [search, setSearch] = useState("");
  const [selectedCollege, setSelectedCollege] =
    useState(colleges[0]);

  const filteredColleges = colleges.filter((college) => {
    const searchText =
      `${college.name} ${college.location} ${college.university}`.toLowerCase();

    return searchText.includes(search.toLowerCase());
  });

  // Continue to Registration Form
  const handleContinue = () => {
    if (!selectedCollege) {
      return;
    }

    console.log("Selected College:", selectedCollege);

    navigate("/register/form", {
      state: {
        college: selectedCollege,
      },
    });
  };

  // Back to Home
  const handleBack = () => {
    navigate("/");
  };

  return (
    <main className="college-selection-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="college-selection-hero">

        <div className="college-hero-content">

          <div className="step-badge">
            Step 1 of 2
          </div>

          <h1>
            Select Your <span>College</span>
          </h1>

          <p>
            Choose your college to continue with registration
          </p>

        </div>

        {/* SEARCH */}

        <div className="college-search">

          <Search size={24} />

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search college by name, city or university..."
          />

          {search && (
            <button
              type="button"
              className="clear-search-btn"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              <X size={20} />
            </button>
          )}

        </div>

      </section>

      {/* =========================================
          COLLEGE LIST
      ========================================= */}

      <section className="college-list">

        <div className="college-grid">

          {filteredColleges.map((college) => {

            const isSelected =
              selectedCollege?.id === college.id;

            return (
              <div
                key={college.id}
                className={`college-card ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() =>
                  setSelectedCollege(college)
                }
              >

                {/* COLLEGE LOGO */}

                <div
                  className={`college-logo ${college.logoType}`}
                >
                  <span>{college.logo}</span>
                </div>

                {/* COLLEGE DETAILS */}

                <div className="college-details">

                  <h3>
                    {college.name}
                  </h3>

                  <p>
                    {college.location}
                  </p>

                  <span>
                    {college.university}
                  </span>

                </div>

                {/* RADIO */}

                <div className="college-radio">

                  {isSelected && (
                    <div className="college-radio-dot"></div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

        {/* NO RESULT */}

        {filteredColleges.length === 0 && (
          <div className="no-college">

            <h3>
              No College Found
            </h3>

            <p>
              Try searching with another college name,
              city or university.
            </p>

          </div>
        )}

        {/* =========================================
            ACTION BUTTONS
        ========================================= */}

        <div className="college-action-buttons">

          {/* BACK */}

          <button
            type="button"
            className="college-back-btn"
            onClick={handleBack}
          >
            <ArrowLeft size={19} />

            <span>
              Back
            </span>
          </button>

          {/* CONTINUE */}

          <button
            type="button"
            className="continue-registration-btn"
            onClick={handleContinue}
            disabled={!selectedCollege}
          >
            <span>
              Continue to Registration
            </span>

            <ArrowRight size={21} />
          </button>

        </div>

      </section>

    </main>
  );
}

export default CollegeSelection;