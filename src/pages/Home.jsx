import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Sección 1 con efecto parallax */}
      <section className="parallax-section parallax-section-1">
        <div className="content">
          <h1>Bienvenido a Saberes</h1>
          <p>Un lugar donde el conocimiento se conecta con la pasión por aprender.</p>
        </div>
      </section>

      {/* Franja entre las secciones */}
      <div className="divider">
        <div className="d-flex justify-content-center align-items-center mx-auto my-auto h-100">
          <h2 className='divider-text'>Descubre todo lo que tenemos para ti</h2>
        </div>
      </div>

      {/* Sección 2 con efecto parallax */}
      <section className="parallax-section parallax-section-2">
        <div className="content">
          <h1>Nuestros Talleres</h1>
          <p>Ofrecemos una amplia variedad de talleres para todos los niveles.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
