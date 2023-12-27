import { useEffect } from "react";
import "./footer.scss";

const Footer = () => {
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    document.querySelector(".current-year").textContent = currentYear;
  }, []);
  return (
    <footer>
      <div className='main-content'>
        <img className='my-logo' src='my-logo.png' alt='Logo de Yoann Bonge' />
        <span className='current-year'></span>
        <span className='firstname-lastname'>Yoann Bonge</span>
      </div>
    </footer>
  );
};

export default Footer;
