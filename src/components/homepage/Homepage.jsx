import Header from "../header/Header";
import { PageContainer } from "../../styled/styles";
import { AboutSection } from "../../styled/styles";
import { ProjectsSection } from "../../styled/styles";
import ProjectCards from "../Projectcards/ProjectCards";
import { CardsContent } from "../index";
import {
  Avatar1,
  Avatar2,
  linkedInIcon,
  githubIcon,
  backgroundImg,
  reduxIcon,
  reactIcon,
  htmlIcon,
  cssIcon,
  javascriptIcon,
  gmailIcon
} from "../../assets/imagesImport";
import { ContactMe } from "../../styled/styles";
import { css } from "styled-components";

const homepage = () => {
  return (
    <>
    <img src={backgroundImg} alt=""  className="backgroun-img"/>    
    <PageContainer>
      <Header />
      <AboutSection>
        <div className="about-me-content">
          <div className="header-section-aboutme">
            <div className="name-and-role">
              <div><img src={Avatar1} alt="" /></div>
              <div>
                <h3>Hi,I'm Samiuddin khan</h3>
                <p>Front-end developer</p>
              </div>
            </div>
            <div className="follow-icons">
              <a href="">
                <img src={linkedInIcon} alt="" />
              </a>
              <a href="https://github.com/Samiuddinkhan07" target="_blank">
                <img src={githubIcon} alt="" />
              </a>
            </div>
          </div>
          <div className="aboutme-passionate">
            <p>Passionate to pursue the Technology</p>
          </div>
          <div className="aboutme-more-content">
            <p>I enjoy learning new things and try to overcome new challenges while analyzing how I improved through them.</p>
          </div>
        </div>
        <div className="my-pic">
          <img src={Avatar2} alt="" />
        </div>
      </AboutSection>
      <ProjectsSection>
        {CardsContent?.map((card) => (
          <ProjectCards
            key={card.id}
            title={card.cardTitle}
            description={card.cardDescription}
            icon={card.icon}
          />
        ))}
      </ProjectsSection>
          <ContactMe>
            <div className="left-info-Aboutme">
              <div className="skill-subtitle">
              I constantly try to improve myself
              </div>
              <div className="skill-title">
              Currently, I am learning Node.js.
              </div>
              <div className="skill-description">
              I am also learning MongoDB,Express,GraphQL. Other than that, I also constantly practice web design.
              </div>
              <div className="skills-icons">
              <img src={htmlIcon} alt="" width="30px"/>
             <img src={cssIcon} alt="" width="30px"/>
             <img src={javascriptIcon} alt="" width="30px"/>
             <img src={reactIcon} alt="" width="30px"/>
             <img src={reduxIcon} alt="" width="30px"/>
              </div>
            </div>
            <div className="right-info-contactMe">
              <div className="contact-meText">
                <h4>Contact Me</h4>
                <p>Make a Contact via Email or LinkedIn</p>
              </div>
              <div className="contact-icons">
                <a href="mailto:samiuddinkhan2000@gmail.com"><img src={linkedInIcon} alt="" width="20px"/></a>
                <a href=""><img src={gmailIcon} alt="" width="20px"/></a>
              </div>
            </div>
          </ContactMe>
    </PageContainer>
    </>

  );
};

export default homepage;
