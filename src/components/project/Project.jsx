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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`project-container ${reverseRow ? "reverse" : ""}`}>
      <div className='see-more' onClick={openModal}>
        <div className='screenshot-container'>
          <img
            className={`picture ${reverseRow ? "reverse" : ""}`}
            src={mainScreenshot}
            alt=''
          />
          <span className='overlay-text'>Voir plus</span>
        </div>
      </div>

      <div className='presentation'>
        <h3 className={`title ${reverseRow ? "reverse" : ""}`}>{title}</h3>
        <div className='summary'>{summary}</div>
      </div>
      <div className='tools'>{toolsIcons}</div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName='modal-overlay'
        className='modal'
        closeTimeoutMS={600}
      >
        {" "}
        <div className='modal-content'>
          <i class='fa-solid fa-xmark' onClick={closeModal}></i>
          <div className='image-and-details'>
            <img
              className='responsive-illustration'
              src={responsiveIllustration}
              alt=''
            />
            <div className='details'>{children}</div>
          </div>
          <div className='links-container'>
            <a
              className='link'
              href={githubLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              voir le Github
            </a>

            {deployment && (
              <a
                className='link'
                href={deployment}
                target='_blank'
                rel='noopener noreferrer'
              >
                voir le site
              </a>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Project;
