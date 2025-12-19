import '../styles/AboutUs.css';

import image from '../assets/slide13.jpg'
import image21 from '../assets/slide21.jpg'
import image22 from '../assets/slide22.jpg'
import image23 from '../assets/slide23.jpg'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Chama Youth Resource Center. All rights reserved.</p>
    </footer>
  );
}


function AboutUs() {
  return (
    <div className="about-container">

      <p>
        The Chama Youth Resource Centre (CYRC) is the training centre for the youths 
        in various entrepreneurship and lifelong survival skills under the Department 
        of Youth Development in the Ministry of Youth, Sport and Arts. The centre is 
        located at Plot No. 452, opposite Birland Cotton Ginnery FTC / Airport Road, 
        about 2.5 km from the Post Office in Chama District and approximately 933 km 
        from Lusaka via Chipata. Chama Youth Resource Centre was initially under 
        Muchinga Province before administrative changes were made when the PF political 
        party came into power.
      </p>

       <div className="image-row">
  <div className="into-image">
    <img src={image} alt="intro-image" />
  </div>

  <div className="teveta-image">
    <img src={image23} alt="teveta-image" />
  </div>
</div>


      <p>
        The Chama Youth Resource Centre is a TEVETA-sponsored institution dedicated 
        to empowering young individuals in Chama District with valuable skills and 
        knowledge. With experienced instructors and state-of-the-art facilities, 
        the centre provides a supportive learning environment that fosters creativity, 
        personal development, and socio-economic growth — contributing positively to 
        the development of the nation.
      </p>
        <div className="two-Manager">
         <div className="first-Manager">
             <img src={image21} alt="Manager-image" />
             <h1>Mr Moses Kavwanga - Center Manager</h1>
         </div>
         <div className= "second-manager">
             <img src={image22} alt="DeputyManager-image" />
             <h1>Mr Tresford Mfula - Deputy Center Manager</h1>
         </div>
       </div>
       <div className="Outro-info">
         <p> The then Eastern Youth Provincial Administration undertook a Training
            Needs Assessment (TNAS) and discovered three courses on demand namely 
            bricklaying & plastering, carpentry and joincry, and designing, cutting & tailoring. 
            This led to the construction of the existing of 1x3 classroom block to offer the said
             courses to the community. In the radius 164km there is no other training centre. 
             The five (7) chiefdoms namely Chikwa,Kambombo,Chibale, Chifunda, Lundu, Mulilo and Tembwe chiefdoms 
             all rely on Chama Youth Resource Centre.
        </p>
       </div>
         <div className="vision-mission-container">
      <div className="vision-mission-box">
        <h1>VISION STATEMENT</h1>
        <p>"To be an icon in youth skills training in the region"</p>
      </div>

      <div className="vision-mission-box">
        <h1>MISSION STATEMENT</h1>
        <p>"To train and produce competent youths in various lifelong and entrepreneurship skills"</p>
      </div>
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

export default AboutUs;
