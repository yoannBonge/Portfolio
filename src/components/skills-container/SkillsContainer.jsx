import {
  faCss3Alt,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./skills_container.scss";

const SkillsContainer = () => {
  return (
    <div className='skills-container'>
      <FontAwesomeIcon icon={faHtml5} className='html-logo' title='HTML5' />
      <FontAwesomeIcon icon={faCss3Alt} className='css-logo' title='CSS3' />
      <FontAwesomeIcon icon={faJs} className='js-logo' title='JavaScript' />
      <FontAwesomeIcon icon={faSass} className='sass-logo' title='Sass' />
      <FontAwesomeIcon icon={faReact} className='react-logo' title='React' />
      <FontAwesomeIcon icon={faNodeJs} className='node-logo' title='Node.js' />
      <img
        src='mongodb-logo.webp'
        className='mongodb-logo'
        alt='Logo de MongoDB'
        title='MongoDB'
        loading='lazy'
      />
      <img
        src='express-logo.webp'
        className='express-logo'
        alt="Logo d'Express.js"
        title='Express.js'
        loading='lazy'
      />
      <img
        src='typescript-logo.webp'
        className='typescript-logo'
        alt='Logo de Typescript'
        title='Typescript'
        loading='lazy'
      />
    </div>
  );
};

export default SkillsContainer;
