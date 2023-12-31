import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import SocialLinks from "../social-links/SocialLinks";
import "./header.scss";

const Header = () => {
  //////////////////////////////////////////////////////////////////////STATE
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 90;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //////////////////////////////////////////////////////////////////////RENDER
  return (
    <header className={scrolled ? "header is-scrolled" : "header"}>
      <img
        className='logo'
        src='my-logo.webp'
        alt='logo du site de Yoann Bonge'
      />
      <nav className='menu'>
        <ul>
          <li>
            <Link
              to=''
              onClick={() => scroll.scrollToTop()}
              smooth={true}
              duration={500}
            >
              Accueil
            </Link>
          </li>

          <li>
            <Link to='my-projects' smooth={true} duration={500}>
              Mes Projets
            </Link>
          </li>

          <li>
            <Link to='contact' smooth={true} duration={500} offset={75}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <SocialLinks isHeader />
    </header>
  );
};

export default Header;
