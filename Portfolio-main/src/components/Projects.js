import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
 
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// ... (previous imports)

// ... (previous imports)

// ... (previous imports)

// ... (previous imports)

export const Projects = () => {
  const projects = [
    {
      title: "Nordstrom  ",
      description: "E-coomerce Website, areas of possibilities: 1. World map to find store according your location with zip code. 2. Easy to use. 3. Safe to use ",
     
      imgUrl: projImg1,
      githubLink: "https://github.com/Uvais289/Nordstrom-Website/tree/master",
      deployLink: "https://prismatic-nasturtium-c7ff50.netlify.app/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      githubLink: "https://github.com/Uvais289/Business-Startup/tree/master",
      deployLink: "https://business-startup.netlify.app/",
    },
    {
      title: "Another Project",
      description: "Design & Development",
      imgUrl: projImg3,
      githubLink: "https://github.com/Uvais289/Another-Project/tree/master",
      deployLink: "https://another-project.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <Col key={index} md={4} className="mb-4">
                              <ProjectCard {...project} />
                              {index === 0 && ( // Display description, GitHub link, and Netlify link only for the first project
                                <div className="project-details">
                                  <p>{project.description}</p>
                                  <div className="project-buttons">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                      <button className="btn btn-primary">GitHub</button>
                                    </a>
                                    <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                                      <button className="btn btn-success">Netlify</button>
                                    </a>
                                  </div>
                                </div>
                              )}
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      {/* ... (other Tab.Pane sections) */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  );
};
