import React from "react";
import "./project_preview.scss";

const ProjectPreview = ({
  projectTitle,
  projectScreenshot,
  projectDeployment,
  children,
  githubLink,
  brandsIcons,
  reverseRow,
}) => {
  const handleLinkClick = (event) => {
    if (!projectDeployment) {
      event.preventDefault();
    }
  };

  return (
    <div className={`project-container ${reverseRow ? "reverse" : ""}`}>
      <a
        className='link-to-site'
        href={projectDeployment}
        target='_blank'
        rel='noopener noreferrer'
        onClick={handleLinkClick}
      >
        <div className='screenshot-container'>
          <img
            className={`picture ${reverseRow ? "reverse" : ""}`}
            src={projectScreenshot}
            alt=''
          />
          <span className='overlay-text'>
            {projectDeployment
              ? "Voir le site"
              : "Site en cours de déploiement"}
          </span>
        </div>
      </a>

      <div className='presentation'>
        <h3 className={`title ${reverseRow ? "reverse" : ""}`}>
          {projectTitle}
        </h3>
        <div className='description'>
          {children}
          <div className={`github ${reverseRow ? "reverse" : ""}`}>
            <a
              className='github-link'
              href={githubLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              voir le Github
            </a>
          </div>
        </div>
      </div>
      <div className='tools'>{brandsIcons}</div>
    </div>
  );
};

export default ProjectPreview;
