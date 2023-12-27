import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faSquareGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./header.scss";

const Header = () => {
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
  return (
    <header className={scrolled ? "header is-scrolled" : "header"}>
      <img
        className='logo'
        src='my-logo.png'
        alt='logo du site vitrine de Yoann Bonge'
      />
      <nav className='menu'>
        <ul>
          <li>
            <Link
              to=''
              onClick={() => scroll.scrollToTop()}
              smooth={true}
              duration={500}
              activeClass='active'
            >
              Accueil
            </Link>
          </li>

          <li>
            <Link
              to='my-projects'
              smooth={true}
              duration={500}
              activeClass='active'
            >
              Mes Projets
            </Link>
          </li>

          <li>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              activeClass='active'
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <nav className='social-links'>
        <ul>
          <li>
            <a
              href='https://github.com/yoannBonge'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/Yoann_Bonge'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faSquareXTwitter} />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/yoann-bonge-87bb7a2a5/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
