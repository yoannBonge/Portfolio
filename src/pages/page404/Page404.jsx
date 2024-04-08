import "./page404.scss";

const Page404 = () => {
  return (
    <>
      <main>
        <span className='big404'>404</span>
        <br />
        <span className='description'>
          Il semblerait que cette page n&apos;existe pas...
        </span>
        <a
          className='back-home'
          href='/'
          aria-label="Revenir à la page d'accueil"
        >
          Retourner à la page d&apos;accueil
        </a>
      </main>
    </>
  );
};

export default Page404;
