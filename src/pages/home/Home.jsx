import Header from "../../components/header/Header";
import Project from "../../components/project/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faSass,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "../../components/contact-form/ContactForm";
import Footer from "../../components/footer/Footer";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section id='presentation'>
          <h1>Yoann Bonge - Développeur Web junior</h1>
          <div className='about'>
            <div className='headline'>
              <img
                className='profile-pic'
                src='profile-pic.webp'
                alt='Portrait de Yoann Bonge'
              />
              <span className='about-me-title'>Yoann Bonge</span>
            </div>

            <p className='presentation-text'>
              "Suite à mon désir de reconversion dans le monde du
              <strong> développement web </strong>
              puis à sa concrétisation en me formant grâce à
              <a
                className='openclassrooms'
                href='https://openclassrooms.com/fr/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label="Site d'Openclassrooms"
              >
                OpenClassrooms
              </a>
              , j'ai pu acquérir de nombreuses compétences que je souhaite
              désormais exploiter en créant des
              <strong> sites et applications web </strong>. Découvrir,
              apprendre, maîtriser, créer, partager, tels sont mes objectifs.
              <br />
              Je vous invite à jeter un oeil aux projets que j'ai pu réaliser
              dans le cadre de ma formation de Développeur Web chez
              <a
                className='openclassrooms'
                href='https://openclassrooms.com/fr/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label="Site d'Openclassrooms"
              >
                OpenClassrooms
              </a>
              , ainsi qu'aux compétences que j'ai acquises suite à cette
              formation."
            </p>
          </div>
          <blockquote>
            <i>
              « Les trois principales qualités du programmeur sont la paresse,
              l'impatience et l'orgueil »
            </i>
            <span className='author'>— Larry Wall</span>
          </blockquote>
        </section>
        <section id='my-projects'>
          <h2>Projets</h2>
          <div className='projects-items'>
            <Project
              title='Booki'
              mainScreenshot='booki.webp'
              summary="Intégration d'une page web en HTML et CSS"
              responsiveIllustration='booki-responsive.webp'
              deployment='https://yoannbonge.github.io/Booki/'
              githubLink='https://github.com/yoannBonge/Booki'
              toolsIcons={
                <>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    className='html-logo'
                    title='HTML5'
                  />
                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    className='css-logo'
                    title='CSS3'
                  />
                </>
              }
            >
              <p>
                <span className='purple'>
                  (Projet réalisé dans le cadre de ma formation)
                </span>
                <br /> <br /> La mission était d'intégrer en HTML/CSS la page
                d'accueil du site Booki, une agence de voyage. Toutes les
                maquettes étaient fournies en versions desktop, tablette et
                mobile. En découvrant le HTML et le CSS, j’ai cerné la plupart
                de leurs spécificités respectives, leurs règles ainsi que leurs
                possibilités. J’ai appris à détecter des bugs d’affichage en me
                servant des dev tools, et à adapter l’affichage du site sur les
                supports desktop, tablette et mobile. Une bonne introduction au
                HTML/CSS ainsi qu'au responsive.
              </p>
            </Project>
            <Project
              title='Sophie Bluel'
              mainScreenshot='sophie-bluel.webp'
              summary='Utilisation du Javascript pour rendre un site web dynamique'
              responsiveIllustration='sophie-bluel-responsive.webp'
              deployment=''
              githubLink='https://github.com/yoannBonge/ArchiWebos'
              reverseRow
              toolsIcons={
                <>
                  <FontAwesomeIcon
                    icon={faJs}
                    className='js-logo'
                    title='Javascript'
                  />
                  <FontAwesomeIcon
                    icon={faHtml5}
                    className='html-logo'
                    title='HTML5'
                  />
                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    className='css-logo'
                    title='CSS3'
                  />
                </>
              }
            >
              <p>
                <span className='purple'>
                  (Projet réalisé dans le cadre de ma formation)
                </span>
                <br /> <br /> La page d'accueil du site portfolio d'une
                architecte (Sophie Bluel) était fournie et statique. Il
                s'agissait de rendre le site dynamique grâce au Javascript. Une
                API était fonctionnelle afin de permettre la connexion au site,
                puis récupérer des projets contenant diverses informations grâce
                auxquelles j’ai pu programmer un filtrage de la galerie de
                photos et une modale pour ajouter/supprimer des projets. Un
                projet assez fourni qui m’a fait découvrir pas mal de procédés.
                Un saut à pieds joints dans le Javascript !
              </p>
            </Project>
            <Project
              title='Nina Carducci'
              mainScreenshot='nina-carducci.webp'
              summary="Optimisation du SEO d'un site web"
              responsiveIllustration='nina-carducci-responsive.webp'
              deployment='https://yoannbonge.github.io/NinaCarducci/'
              githubLink='https://github.com/yoannBonge/NinaCarducci'
              toolsIcons={
                <>
                  <img
                    src='lighthouse-logo.webp'
                    className='lighthouse-logo'
                    alt='Logo de Google Lighthouse'
                    title='Google Lighthouse'
                  />
                  <img
                    src='wave-logo.webp'
                    className='wave-logo'
                    alt='Logo de Wave'
                    title='Wave'
                  />
                </>
              }
            >
              <p>
                <span className='purple'>
                  (Projet réalisé dans le cadre de ma formation)
                </span>
                <br /> <br /> Le but de ce projet était d'optimiser le
                référencement et l'accessibilité d'un site portfolio d'une
                photographe, Nina Carducci. Quelques bugs étaient présents dans
                du code Jquery qu'il fallait rectifier. Modification des balises
                HTML et de leur agencement, implémentation de données
                structurées à l’aide du protocole Schema.org, traitement des
                images afin de réduire leur poids, initiation aux outils d'audit
                de performances tels que Lighthouse, d'accessibilité tels que
                Wave…
              </p>
            </Project>
            <Project
              title='Kasa'
              mainScreenshot='kasa.webp'
              summary="Développement d'une application web avec React"
              responsiveIllustration='kasa-responsive.webp'
              deployment=''
              githubLink='https://github.com/yoannBonge/Kasa'
              reverseRow
              toolsIcons={
                <>
                  <FontAwesomeIcon
                    icon={faReact}
                    className='react-logo'
                    title='React'
                  />
                  <FontAwesomeIcon
                    icon={faSass}
                    className='sass-logo'
                    title='Sass'
                  />
                </>
              }
            >
              <p>
                <span className='purple'>
                  (Projet réalisé dans le cadre de ma formation)
                </span>
                <br /> <br /> Il s'agissait de développer l'application
                responsive d'une agence de location de logements nommée Kasa, le
                tout grâce à la librairie React. Toutes les maquettes étaient
                fournies. De la création de plusieurs composants dont certains
                animés et interactifs (menu dropdown, carrousel) à la découverte
                du concept des hooks en passant par celle de l’utilisation du
                JSX, ou du langage Sass, ce projet a nécessité une montée en
                compétences assez significative.
              </p>
            </Project>
            <Project
              title='Mon Vieux Grimoire'
              mainScreenshot='mon-vieux-grimoire.webp'
              summary="Développement du back-end d'un site web"
              responsiveIllustration='mon-vieux-grimoire-responsive.webp'
              deployment=''
              githubLink='https://github.com/yoannBonge/MonVieuxGrimoire'
              toolsIcons={
                <>
                  <FontAwesomeIcon
                    icon={faNodeJs}
                    className='node-logo'
                    title='Node.js'
                  />
                  <img
                    src='mongodb-logo.webp'
                    className='mongodb-logo'
                    alt='Logo de MongoDB'
                    title='MongoDB'
                  />
                  <img
                    src='express-logo.webp'
                    className='express-logo'
                    alt="Logo d'Express.js"
                    title='Express.js'
                  />
                </>
              }
            >
              <p>
                <span className='purple'>
                  (Projet réalisé dans le cadre de ma formation)
                </span>
                <br /> <br /> Ce projet était destiné à nous initier au backend
                avec la création d'une API pour Mon "Vieux Grimoire", un site de
                notation de livres. Une initiation aux opérations CRUD, à la
                programmation de la création/connexion d’utilisateurs, avec
                diverses routes à créer à partir d'une spécification d'API.
                Utilisation de Node.js et son framework Express.js, base de
                données NoSQL MongoDB, gestion de modèles Mongoose, sécurisation
                de la base de données grâce au cryptage des mots de passe…
              </p>
            </Project>
          </div>
        </section>
        <section id='my-skills'>
          <h2>Compétences</h2>
          <div className='skills-container'>
            <FontAwesomeIcon
              icon={faHtml5}
              className='html-logo'
              title='HTML5'
            />
            <FontAwesomeIcon
              icon={faCss3Alt}
              className='css-logo'
              title='CSS3'
            />
            <FontAwesomeIcon
              icon={faJs}
              className='js-logo'
              title='JavaScript'
            />
            <FontAwesomeIcon icon={faSass} className='sass-logo' title='Sass' />
            <FontAwesomeIcon
              icon={faReact}
              className='react-logo'
              title='React'
            />
            <FontAwesomeIcon
              icon={faNodeJs}
              className='node-logo'
              title='Node.js'
            />
            <img
              src='mongodb-logo.webp'
              className='mongodb-logo'
              alt='Logo de MongoDB'
              title='MongoDB'
            />
            <img
              src='express-logo.webp'
              className='express-logo'
              alt="Logo d'Express.js"
              title='Express.js'
            />
          </div>
        </section>
        <section id='contact'>
          <h2>Contact</h2>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
