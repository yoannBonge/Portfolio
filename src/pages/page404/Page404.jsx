import Header from "../../components/header/Header";
import "./page404.scss";

const Page404 = () => {
  return (
    <>
      <main>
        <span className='big404'>404</span>
        <br />
        <span className='description'>
          Il semblerait que cette page n'existe pas...
        </span>
        <a className='back-home' href='/'>
          Retourner à la page d'accueil
        </a>
      </main>
    </>
  );
};

export default Page404;
