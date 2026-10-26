import {
  Building2,
  Target,
  Users,
  Globe2,
} from "lucide-react";
import "../../styles/about.css";
function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <span className="about-label">ABOUT SRMS</span>

        <h2>
          Smart Result Management for
          <br />
          <strong>Modern Education</strong>
        </h2>

        <p>
          Student Result Management System (SRMS) is a modern digital
          platform designed to simplify the management of academic results
          and student records for colleges and universities.
        </p>

        <p>
          SRMS connects students, faculty, examiners, data entry operators,
          and administrators through a secure and easy-to-use system.
          It reduces manual work and makes academic result management
          faster, more accurate, and more reliable.
        </p>

        <div className="about-points">
          <div>
            <Building2 />
            <span>For Colleges & Universities</span>
          </div>

          <div>
            <Users />
            <span>Multi-Role Platform</span>
          </div>

          <div>
            <Globe2 />
            <span>Accessible Anywhere</span>
          </div>

          <div>
            <Target />
            <span>Accurate & Reliable</span>
          </div>
        </div>
      </div>

      <div className="about-card">
        <div className="about-card-icon">
          <Building2 size={30} />
        </div>

        <h3>Built for Educational Institutions</h3>

        <p>
          A flexible system that can be adapted to different colleges and
          universities without depending on a single institution.
        </p>

        <div className="about-stat">
          <strong>100%</strong>
          <span>Digital Result Management</span>
        </div>
      </div>
    </section>
  );
}

export default About;