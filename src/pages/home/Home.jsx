import AboutMe from "../../components/about-me/AboutMe";
import ContactForm from "../../components/contact-form/ContactForm";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Projects from "../../components/projects/Projects";
import SkillsContainer from "../../components/skills-container/SkillsContainer";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section id='presentation'>
          <h1>Yoann Bonge - Développeur Web junior</h1>
          <AboutMe />
          <blockquote>
            <i>
              « Les trois principales qualités du programmeur sont la paresse,
              l&apos;impatience et l&apos;orgueil »
            </i>
            <span className='author'>— Larry Wall</span>
          </blockquote>
        </section>
        <section id='my-projects'>
          <h2>Projets</h2>
          <div className='projects-items'>
            <Projects />
          </div>
        </section>
        <section id='my-skills'>
          <h2>Compétences</h2>
          <SkillsContainer />
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
