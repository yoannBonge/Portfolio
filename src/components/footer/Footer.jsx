import { useRef, useEffect } from "react";
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
    <footer>
      <div className='main-content'>
        <img
          className='my-logo'
          src='my-logo.webp'
          alt='Logo du site de Yoann Bonge'
        />
        <span className='current-year'></span>
        <span className='firstname-lastname'>Yoann Bonge</span>
      </div>
    </footer>
  );
};

export default Footer;
