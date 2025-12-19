import '../styles/Home.css';
import '../styles/SearchBar.css';
import React, { useState } from "react";
import firstImage from '../assets/FirstImage.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img1 from "../assets/slide1.jpg";
import img2 from "../assets/slide2.jpg";
import img3 from "../assets/slide3.jpg";
import img4 from "../assets/slide10.jpg";
import img5 from "../assets/slide20.jpg";
import img6 from "../assets/slide5.jpg";
import img7 from "../assets/slide13.jpg";
import img8 from "../assets/slide7.jpg";
import img9 from "../assets/slide15.jpg";
import img10 from "../assets/slide9.jpg";
import img11 from "../assets/slide19.jpg";
import img12 from "../assets/slide17.jpg";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function SearchBar() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  // Pages to search - fixed the property name from 'link' to 'path'
  const pages = [
    { name: "About Us", path: "/aboutus" },
    { name: "Programs Offered", path: "/programs" },
    { name: "Contact", path: "/contact" },

    // Sub-pages
    { name: "Carpentry Fees", path: "/fees/carpentry" },
    { name: "Tailoring Fees", path: "/fees/tailoring" },
    { name: "Bricklaying Fees", path: "/fees/bricklaying" },
    { name: "Computer Studies (ICT)", path: "/fees/computer" },

    // Individual programs
    { name: "Carpentry & Joinery", path: "/programs#carpentry" },
    { name: "Tailoring & Fashion Design", path: "/programs#tailoring" },
    { name: "Bricklaying & Plastering", path: "/programs#bricklaying" },
    { name: "Computer Studies (ICT)", path: "/programs#ict"}
  ];

  // Filter pages based on query
  const filteredPages = pages.filter((page) =>
    page.name.toLowerCase().includes(query.toLowerCase())
  );

  // Handle result click
  const handleResultClick = (path) => {
    navigate(path);
    setQuery("");
    setIsFocused(false);
  };

  // Handle key press (Enter key)
  const handleKeyPress = (e, path) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleResultClick(path);
    }
  };

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search here…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="search-input"  
        />

        {/* Show results when typing and focused */}
        {query !== "" && isFocused && (
          <div className="search-results-dropdown">
            {filteredPages.length > 0 ? (
              <ul className="search-results-list">
                {filteredPages.map((page, index) => (
                  <li 
                    key={index}
                    className="search-result-item"
                    onClick={() => handleResultClick(page.path)}
                    onKeyDown={(e) => handleKeyPress(e, page.path)}
                    tabIndex={0}
                    role="button"
                  >
                    {page.name}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="no-results">
                No results found for "{query}"
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ImageSlider() {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,   // 3 seconds
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="Slide 3" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="Slide 10" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="Slide 20" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="Slide 5" /></SwiperSlide>
        <SwiperSlide><img src={img7} alt="Slide 13" /></SwiperSlide>
        <SwiperSlide><img src={img8} alt="Slide 7" /></SwiperSlide>
        <SwiperSlide><img src={img9} alt="Slide 15" /></SwiperSlide>
        <SwiperSlide><img src={img10} alt="Slide 9" /></SwiperSlide>
        <SwiperSlide><img src={img11} alt="Slide 19" /></SwiperSlide>
        <SwiperSlide><img src={img12} alt="Slide 17" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

// Footer component
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright-notice">
      <p>&copy; {currentYear} Chama Youth Resource Center. All rights reserved.</p>
    </div>
  );
}

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="text-content">
            <h1 className="main-title">CHAMA YOUTH RESOURCE CENTER</h1>
            <p className="motto">"Skills Development Drives the Economy"</p>
            <div className="search-section">
              <SearchBar />
              <div className="image-content">
                <div className="image-placeholder">
                  <img src={firstImage} alt="CYRC Center" className="hero-image" />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="intro-words">
        <h1>Unlock Your Potential at Chama Youth Resource Centre</h1>
      </div> 
      
      <div className="two-columns">
        <div className="left-text">
          <p>
            Are you a young individual looking to acquire valuable
            skills and <br/>kick-start your career?
            Look no further than the Chama Youth Resource Centre, proudly sponsored by
            TEVETA! Located in the heart of Chama District, our centre offers a range
            of exciting programs designed
            to equip you with the skills and knowledge needed to succeed in today's
            competitive job market.
          </p>
        </div>
        <div className="right-text">
          <p>
            The center is training students in brick-laying & plastering and
            carpentry<br/> & joinery, and the progress is remarkable. It is also offering
            training in tailoring and computer studies as well as farming because
            it has 50 hectares of farmland with 50 cattle benefited from the ministry
            through youth development (grants).
          </p>
        </div>
      </div>
      
      <ImageSlider />
      
      <div className="both-columns">
        <div className="other-info">
          <p>
            All programs are Trade level 3 tested and certified,
            ensuring you gain industryyou gain industry-recognised 
            qualification. Don't miss out on our January intake, 2026. 
          </p>
        </div>
        <div className="more-info">
          <p>
            Join us today and take the first step towards
            a brighter future. Our experienced instructors 
            and state-of-the-art facilities will guide you
            every step of the way
          </p>
        </div>
      </div>
      
      <div className="apply-btn-container">
        <Link to="/apply" className="apply-button">
          Apply Now!
        </Link>
      </div>
      
      {/* Government Section with consistent styling */}
      <div className="govt-section">
        <div className="govt-content">
          <div className="zambia-flag">
            <div className="flag-colors">
              <div className="flag-green"></div>
              <div className="flag-red"></div>
              <div className="flag-black"></div>
              <div className="flag-orange"></div>
            </div>
            <strong>Republic of Zambia</strong>
          </div>
          <div className="govt-text">
            <h2>MINISTRY OF YOUTH SPORT & ARTS</h2>
            <h3>CHAMA YOUTH RESOURCE CENTRE</h3>
            <div className="center-info">
              <h4>P.O. BOX 54-0040</h4>
              <p>CHAMA, EASTERN PROVINCE</p>
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

export default Home;