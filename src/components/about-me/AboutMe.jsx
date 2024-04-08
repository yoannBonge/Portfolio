import "./about_me.scss";

const AboutMe = () => {
  return (
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
        &quot;Suite à mon désir de reconversion dans le monde du
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
        , j&apos;ai pu acquérir de nombreuses compétences que je souhaite
        désormais exploiter en créant des
        <strong> sites et applications web </strong>. Découvrir, apprendre,
        maîtriser, créer, partager, tels sont mes objectifs.
        <br />
        Je vous invite à jeter un oeil aux projets que j&apos;ai pu réaliser
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
        , ainsi qu&apos;aux compétences que j&apos;ai acquises suite à cette
        formation.&quot;
      </p>
    </div>
  );
};

export default AboutMe;
