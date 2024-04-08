import {
  faCss3Alt,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "react-modal";
import projectsData from "../../../public/projects.json";
import "./projects.scss";

const Projects = () => {
  //////////////////////////////////////////////////////////////////////STATE
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [projects, setProjects] = useState(projectsData);
  const [currentProject, setCurrentProject] = useState(null);

  //////////////////////////////////////////////////////////////////////BEHAVIOR
  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const response = await fetch("/public/projects.json");
  //       const data = await response.json();
  //       setProjects(data);
  //     } catch (error) {
  //       console.error("Erreur lors de la récupération des données :", error);
  //     }
  //   };
  //   fetchProjects();
  // }, []);

  const projects = projectsData;

  const openModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setCurrentProject(null);
    }, 600);
  };

  //////////////////////////////////////////////////////////////////////RENDER
  return (
    <>
      {projects.map((project, index) => {
        const toLeftOrRight =
          project && project.reverseRow === true ? "reverse" : "";

        return (
          <div key={index} className={`project-container ${toLeftOrRight}`}>
            <h3 className='title-mobile'>{project.title}</h3>
            <div className='see-more' onClick={() => openModal(project)}>
              <div className='screenshot-container'>
                <img
                  className={`picture ${toLeftOrRight}`}
                  src={project.mainScreenshot}
                  alt={`Screenshot du site ${project.title}`}
                  loading='lazy'
                />
                <span className='overlay-text'>Voir plus</span>
              </div>
            </div>

            <div className={`presentation-and-tools ${toLeftOrRight}`}>
              <div className='presentation'>
                <h3 className={`title ${toLeftOrRight}`}>{project.title}</h3>
                <div className={`summary ${toLeftOrRight}`}>
                  {project.summary}
                </div>
              </div>
              <div className='tools'>
                {project.toolsIcons.map((tool, index) => {
                  switch (tool) {
                    case "html":
                      return (
                        <FontAwesomeIcon
                          key={index}
                          icon={faHtml5}
                          className='html-logo'
                          title='HTML5'
                        />
                      );
                    case "css":
                      return (
                        <FontAwesomeIcon
                          key={index}
                          icon={faCss3Alt}
                          className='css-logo'
                          title='CSS3'
                        />
                      );
                    case "js":
                      return (
                        <FontAwesomeIcon
                          key={index}
                          icon={faJs}
                          className='js-logo'
                          title='Javascript'
                        />
                      );
                    case "lighthouse":
                      return (
                        <img
                          key={index}
                          src='lighthouse-logo.webp'
                          className='lighthouse-logo'
                          alt='Logo de Google Lighthouse'
                          title='Google Lighthouse'
                          loading='lazy'
                        />
                      );
                    case "wave":
                      return (
                        <img
                          key={index}
                          src='wave-logo.webp'
                          className='wave-logo'
                          alt='Logo de Wave'
                          title='Wave'
                          loading='lazy'
                        />
                      );
                    case "react":
                      return (
                        <FontAwesomeIcon
                          key={index}
                          icon={faReact}
                          className='react-logo'
                          title='React'
                        />
                      );
                    case "sass":
                      return (
                        <FontAwesomeIcon
                          key={index}
                          icon={faSass}
                          className='sass-logo'
                          title='Sass'
                        />
                      );
                    case "node":
                      return (
                        <FontAwesomeIcon
                          key={index}
                          icon={faNodeJs}
                          className='node-logo'
                          title='Node.js'
                        />
                      );
                    case "mongodb":
                      return (
                        <img
                          key={index}
                          src='mongodb-logo.webp'
                          className='mongodb-logo'
                          alt='Logo de MongoDB'
                          title='MongoDB'
                          loading='lazy'
                        />
                      );
                    case "express":
                      return (
                        <img
                          key={index}
                          src='express-logo.webp'
                          className='express-logo'
                          alt="Logo d'Express.js"
                          title='Express.js'
                          loading='lazy'
                        />
                      );
                    case "mern":
                      return (
                        <img
                          key={index}
                          src='mern-logo.webp'
                          className='mern-logo'
                          alt='Illustration de la stack MERN'
                          title='stack MERN'
                          loading='lazy'
                        />
                      );
                    case "ts":
                      return (
                        <img
                          key={index}
                          src='typescript-logo.webp'
                          className='typescript-logo'
                          alt='Logo de Typescript'
                          title='Typescript'
                          loading='lazy'
                        />
                      );
                  }
                })}
              </div>
            </div>
          </div>
        );
      })}
      {currentProject && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          overlayClassName='modal-overlay'
          className='modal'
          closeTimeoutMS={600}
        >
          <div className='modal-content'>
            <i className='fa-solid fa-xmark' onClick={closeModal}></i>
            <div className='image-and-details'>
              <img
                className='responsive-illustration'
                src={currentProject.responsiveIllustration}
                alt={`Illustration du site ${currentProject.title} s'affichant sur différents supports`}
                loading='lazy'
              />
              <div className='details'>
                <p>
                  <span className='purple'>
                    {currentProject.detailsContext}
                  </span>
                  <br /> <br /> {currentProject.details}
                </p>
              </div>
            </div>
            <div className='links-container'>
              {currentProject.githubLink && (
                <div className='link-wrapper'>
                  <a
                    className='link'
                    href={currentProject.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Dépôt Github du site ${currentProject.title}`}
                  >
                    voir le Github
                  </a>
                </div>
              )}

              {currentProject.deployment && (
                <div className='link-wrapper'>
                  <a
                    className='link'
                    href={currentProject.deployment}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Site ${currentProject.title} déployé `}
                  >
                    voir le site
                  </a>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Projects;
