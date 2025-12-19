import React from "react";
import '../styles/Programs.css';

import carpentryImg from "../assets/slide20.jpg";
import tailoringImg from "../assets/slide10.jpg";
import bricklayingImg from "../assets/slide15.jpg";
import computerImg from "../assets/slide16.jpg";

import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Chama Youth Resource Center. All rights reserved.</p>
    </footer>
  );
}


function Programs() {
  const programs = [
    {
      title: "Carpentry & Joinery",
      description:
        "Master the art of woodwork and become a skilled carpenter. Learn construction techniques, furniture making, and safe tool handling to build a solid foundation for a professional trade career.",
      image: carpentryImg
    
    },
    {
      title: "Design Cutting & Tailoring",
      description:
        "Unleash your creativity and become a fashion designer. Learn pattern drafting, fabric cutting, garment construction, and essential tailoring techniques for personal or business fashion work.",
      image: tailoringImg
    },
    {
      title: "Bricklaying & Plastering",
      description:
        "Build a strong foundation in construction. Gain hands-on experience in block laying, plastering, and finishing work — skills that are highly demanded in the building industry.",
      image: bricklayingImg
    },
    {
      title: "Computer Studies (ICT)",
      description:
        "Develop your digital skills and stay ahead in the modern world. Learn Microsoft Office, internet basics, and essential IT tools suitable for office work and advanced ICT paths.",
      image: computerImg
    }
  ];

  return (
    <div className="programs-container">
      <h1>Choose From Our Exciting Programs</h1>

      {/* GRID OF PROGRAM CARDS */}
      <div className="programs-list">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <h3>{program.title}</h3>
            <p>{program.description}</p>

            <div className="program-image">
              <img src={program.image} alt={program.title} />
            </div>
          </div>
        ))}
      </div>
       {/* APPLY BUTTON - NOW OUTSIDE GRID */}
      <div className="apply-btn-container">
        <Link to="/apply" className="apply-button">
          Apply Now!
        </Link>
        </div>
        <div className="govt-section">
        <div className="govt-content">
          <div className="zambia-flag">
            <div className="flag-colors">
              <div className="flag-green"></div>
              <div className="flag-red"></div>
              <div className="flag-black"></div>
              <div className="flag-orange"></div>
            </div>
          </div>
          <div className="govt-text">
            <h2>REPUBLIC OF ZAMBIA</h2>
            <h3>MINISTRY OF YOUTH SPORT & ARTS</h3>
            <div className="center-info">
              <h4>CHAMA YOUTH RESOURCE CENTRE</h4>
              <p>P.O. BOX 54-0040</p>
              <p>CHAMA</p>
              <p>EASTERN PROVINCE</p>
            </div>
            <div className="mission-text">
              <p><strong>"Skills Development Drives the Economy"</strong></p>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
    
 
  );
}

export default Programs;

