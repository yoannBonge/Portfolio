import { useEffect, useRef } from "react";
import SocialLinks from "../social-links/SocialLinks";
import "./footer.scss";

const Footer = () => {
  //////////////////////////////////////////////////////////////////////STATE
  const currentYearRef = useRef(null);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    if (currentYearRef.current) {
      currentYearRef.current.textContent = currentYear;
    }
  }, []);
  //////////////////////////////////////////////////////////////////////RENDER
  return (
    <footer className='footer'>
      <img
        className='my-logo'
        src='my-logo.webp'
        alt='Logo du site de Yoann Bonge'
        loading='lazy'
      />
      <div className='year-and-name'>
        <span className='current-year' ref={currentYearRef}></span>
        <span className='firstname-lastname'>Yoann Bonge</span>
      </div>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
