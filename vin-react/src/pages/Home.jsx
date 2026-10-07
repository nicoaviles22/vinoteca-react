import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="hero">
        <img src="/assets/img/vino1.jpeg" alt="Vino" />
        <p className="hero-quote">
          "El mejor vino no es necesariamente el más caro, sino el que se comparte."
          <span>— George Brassens</span>
        </p>
      </section>

      <section className="offers">
        <h2>¡Vea nuestras ofertas haciendo click en el botón!</h2>
        <Link className="gold-button" to="/productos">Haga click aquí</Link>
      </section>

      <section className="offer-image">
        <img src="/assets/img/vino2.jpeg" alt="Selección de vinos" />
      </section>
    </>
  );
}

export default Home;
