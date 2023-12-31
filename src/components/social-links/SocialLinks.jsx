import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faSquareGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./social_links.scss";

const SocialLinks = ({ inHeader }) => {
  return (
    <nav className={`social-links ${inHeader ? "header-social-links" : ""}`}>
      <ul>
        <li>
          <a
            href='https://github.com/yoannBonge'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Compte Github de Yoann Bonge'
          >
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/Yoann_Bonge'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Compte X (anciennement Twitter) de Yoann Bonge'
          >
            <FontAwesomeIcon icon={faSquareXTwitter} />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/yoann-bonge-87bb7a2a5/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Compte LinkedIn de Yoann Bonge'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialLinks;
