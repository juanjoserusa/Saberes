import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Sección 1 con efecto parallax */}
      <section className="parallax-section parallax-section-1">
        <div className="content">
          <h1>Bienvenido a Saberes</h1>

          {/* Tarjetas en la primera sección */}
          <div className="cards-container">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold">Nuestra Filosofía</h5>
                <p className="card-text fs-5 mt-4">
                  Nos especializamos en el apoyo y refuerzo educativo para primaria y secundaria. Ofrecemos clases de alta calidad, con <strong>atención personalizada</strong> en grupos de hasta 7 alumnos.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold">Desarrollo Personal</h5>
                <p className="card-text fs-5 mt-4">
                  No solo nos enfocamos en el refuerzo académico, sino también en el desarrollo personal de nuestros alumnos. Fomentamos la <strong>confianza</strong> en sí mismos y su <strong>autoestima</strong>.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold">Un Ambiente Seguro</h5>
                <p className="card-text fs-5 mt-4">
                  Todo esto ocurre en un entorno seguro, donde los estudiantes pueden ser auténticos, crear vínculos de amistad y construir una verdadera <strong>comunidad</strong> a la vez que mejoran su rendimiento.
                </p>
              </div>
            </div>
          </div>
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
