import { useRef, useEffect } from "react";
import "./footer.scss";
import SocialLinks from "../social-links/SocialLinks";

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
    <footer>
      <img
        className='my-logo'
        src='my-logo.webp'
        alt='Logo du site de Yoann Bonge'
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
