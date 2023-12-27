import Header from "../../components/header/Header";
import ProjectPreview from "../../components/project-preview/ProjectPreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faSass,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../../components/footer/Footer";
import "./home.scss";
import ContactForm from "../../components/contact-form/ContactForm";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section id='presentation'>
          <h1>Yoann Bonge, Développeur Web junior</h1>
          <div className='about'>
            <div className='headline'>
              <img
                className='profile-pic'
                src='profile-pic.png'
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
              >
                OpenClassrooms
              </a>
              , j'ai pu acquérir de nombreuses compétences que je souhaite
              désormais exploiter en créant des{" "}
              <strong> sites et applications web </strong>. Découvrir,
              apprendre, maîtriser, créer, partager, tels sont mes objectifs.{" "}
              <br />
              Je vous invite à jeter un oeil aux projets que j'ai pu réaliser
              dans le cadre de ma formation de Développeur Web chez
              <a
                className='openclassrooms'
                href='https://openclassrooms.com/fr/'
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
            <ProjectPreview
              projectTitle='Booki'
              projectScreenshot='booki.webp'
              projectDeployment='https://yoannbonge.github.io/Booki/'
              githubLink='https://github.com/yoannBonge/Booki'
              brandsIcons={
                <>
                  <FontAwesomeIcon icon={faHtml5} className='html-logo' />
                  <FontAwesomeIcon icon={faCss3Alt} className='css-logo' />
                </>
              }
            >
              <p>
                (Projet réalisé dans le cadre de ma formation) <br /> <br /> La
                mission était d'intégrer en HTML/CSS la page d'accueil du site
                Booki, une agence de voyage. Toutes les maquettes étaient
                fournies en versions desktop, tablette et mobile. Une bonne
                introduction au HTML/CSS ainsi qu'au responsive.
              </p>
            </ProjectPreview>
            <ProjectPreview
              projectTitle='Sophie Bluel'
              projectScreenshot='sophie-bluel.webp'
              projectDeployment=''
              githubLink='https://github.com/yoannBonge/ArchiWebos'
              reverseRow
              brandsIcons={
                <>
                  <FontAwesomeIcon icon={faJs} className='js-logo' />
                  <FontAwesomeIcon icon={faHtml5} className='html-logo' />
                  <FontAwesomeIcon icon={faCss3Alt} className='css-logo' />
                </>
              }
            >
              <p>
                (Projet réalisé dans le cadre de ma formation) <br /> <br /> La
                page d'accueil du site portfolio d'une architecte (Sophie Bluel)
                était fournie et statique. Il s'agissait de rendre le site
                dynamique grâce au Javascript, en programmant un filtrage de la
                galerie, la connexion au site et en créant une modale pour
                l'ajout/suppression de photos. Un saut à pieds joints dans le
                Javascript !
              </p>
            </ProjectPreview>
            <ProjectPreview
              projectTitle='Nina Carducci'
              projectScreenshot='nina-carducci.webp'
              projectDeployment='https://yoannbonge.github.io/NinaCarducci/'
              githubLink='https://github.com/yoannBonge/NinaCarducci'
              brandsIcons={
                <>
                  <img src='lighthouse-logo.webp' className='lighthouse-logo' />
                  <img src='wave-logo.webp' className='wave-logo' />
                </>
              }
            >
              <p>
                (Projet réalisé dans le cadre de ma formation) <br /> <br /> Le
                but de ce projet était d'optimiser le référencement et
                l'accessibilité d'un site portfolio d'une photographe, Nina
                Carducci. Quelques bugs étaient présents dans le code qu'il
                fallait rectifier. Modification des balises HTML, traitement des
                images, initiation aux outils d'audit de performances tels que
                Lighthouse, d'accessibilité tels que Wave...
              </p>
            </ProjectPreview>
            <ProjectPreview
              projectTitle='Kasa'
              projectScreenshot='kasa.webp'
              projectDeployment=''
              githubLink='https://github.com/yoannBonge/Kasa'
              reverseRow
              brandsIcons={
                <>
                  <FontAwesomeIcon icon={faReact} className='react-logo' />
                  <FontAwesomeIcon icon={faSass} className='sass-logo' />
                </>
              }
            >
              <p>
                (Projet réalisé dans le cadre de ma formation) <br /> <br /> Il
                s'agissait de développer l'application d'une agence de location
                de logements nommée Kasa, responsive, avec React. Toutes les
                maquettes étaient fournies. Création de plusieurs composants
                dont certains animés et interactifs, découverte du concept des
                hooks. Grosse découverte de la librairie React ainsi que de Sass
                !
              </p>
            </ProjectPreview>
            <ProjectPreview
              projectTitle='Mon Vieux Grimoire'
              projectScreenshot='mon-vieux-grimoire.webp'
              projectDeployment=''
              githubLink='https://github.com/yoannBonge/MonVieuxGrimoire'
              brandsIcons={
                <>
                  <FontAwesomeIcon icon={faNodeJs} className='node-logo' />
                  <img src='mongodb-logo.webp' className='mongodb-logo' />
                  <img src='express-logo.webp' className='express-logo' />
                </>
              }
            >
              <p>
                (Projet réalisé dans le cadre de ma formation) <br /> <br /> Ce
                projet était destiné à nous initier au backend avec la création
                d'une API pour Mon "Vieux Grimoire", un site de notation de
                livres. Une initiation aux opérations CRUD, avec diverses routes
                à créer à partir d'une spécification d'API. Utilisation de
                Node.js et son framework Express.js, base de données NoSQL
                MongoDB, gestion de modèles Mongoose pour la création de livres
                et d'utilisateurs...
              </p>
            </ProjectPreview>
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
              alt='MongoDB'
              title='MongoDB'
            />
            <img
              src='express-logo.webp'
              className='express-logo'
              alt='Express.js'
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
