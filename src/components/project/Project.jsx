import React, { useState } from "react";
import Modal from "react-modal";
import "./project.scss";

const Project = ({
  title,
  mainScreenshot,
  summary,
  responsiveIllustration,
  deployment,
  children,
  githubLink,
  toolsIcons,
  reverseRow,
}) => {
  //////////////////////////////////////////////////////////////////////STATE
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toLeftOrRight = reverseRow ? "reverse" : "";
  //////////////////////////////////////////////////////////////////////RENDER
  return (
    <div className={`project-container ${toLeftOrRight}`}>
      <h3 className='title-mobile'>{title}</h3>
      <div className='see-more' onClick={openModal}>
        <div className='screenshot-container'>
          <img
            className={`picture ${toLeftOrRight}`}
            src={mainScreenshot}
            alt={`Screenshot du site ${title}`}
          />
          <span className='overlay-text'>Voir plus</span>
        </div>
      </div>

      <div className={`presentation-and-tools ${toLeftOrRight}`}>
        <div className='presentation'>
          <h3 className={`title ${toLeftOrRight}`}>{title}</h3>
          <div className={`summary ${toLeftOrRight}`}>{summary}</div>
        </div>
        <div className='tools'>{toolsIcons}</div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName='modal-overlay'
        className='modal'
        closeTimeoutMS={600}
      >
        <div className='modal-content'>
          <i class='fa-solid fa-xmark' onClick={closeModal}></i>
          <div className='image-and-details'>
            <img
              className='responsive-illustration'
              src={responsiveIllustration}
              alt={`Illustration du site ${title} s'affichant sur différents supports`}
            />
            <div className='details'>{children}</div>
          </div>
          <div className='links-container'>
            <div className='link-wrapper'>
              <a
                className='link'
                href={githubLink}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`Dépôt Github du site ${title}`}
              >
                voir le Github
              </a>
            </div>

            {deployment && (
              <div className='link-wrapper'>
                <a
                  className='link'
                  href={deployment}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Site ${title} déployé `}
                >
                  voir le site
                </a>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Project;
