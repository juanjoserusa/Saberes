import React from 'react';
import './Home.css'; // Archivo CSS actualizado

const Home = () => {
    return (
        <div className="home-container">
            {/* Sección 1 */}
            <section className="hero-section">
                <div className="container">
                    <h1 className="section-title">Bienvenido a Saberes</h1>
                    <p className="section-description">
                        Descubre cómo podemos ayudarte a alcanzar tus objetivos educativos en un entorno único, seguro y
                        personalizado.
                    </p>
                </div>
            </section>

            {/* Sección de Tarjetas */}
            <section className="features-section">
                <div className="container">
                    <div className="features-container">
                        <div className="feature-card">
                            <h4>Nuestra Filosofía</h4>
                            <p>
                                Estamos <strong>especializados</strong> en el refuerzo educativo para <strong>primaria y
                                secundaria</strong>.
                                La <strong>atención individualizada</strong> y la <strong>calidad educativa</strong> son
                                la
                                base de
                                nuestro <strong>modelo pedagógico</strong>, por ello nuestros <strong>grupos</strong> lo
                                forman como
                                máximo <strong>7 alumnos</strong>.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h4>Desarrollo Personal</h4>
                            <p>
                                Nos enfocamos en el refuerzo académico y en el desarrollo personal de nuestros alumnos.
                                Fomentamos la <strong>confianza</strong> y la <strong>autoestima</strong>.
                            </p>
                        </div>
                        <div className="feature-card">
                            <h4>Un Ambiente Seguro</h4>
                            <p>
                                Todo esto ocurre en un entorno seguro, donde los estudiantes pueden ser auténticos,
                                crear vínculos de amistad y construir una verdadera <strong>comunidad</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Descubre */}
            <section className="cta-section">
                <div className="container">
                    <h2>Descubre todo lo que tenemos para ti</h2>
                </div>
            </section>

            {/* Sección 2 */}
            <section className="classes-section">
                <div className="container">
                    <h2 className="section-title">Nuestras Clases</h2>
                    <p className="section-description">
                        Ofrecemos clases de <strong>refuerzo educativo</strong> para todas las asignaturas,
                        <strong> desde primaria hasta 1º de bachillerato</strong>. Adaptamos las clases a las
                        necesidades de cada momento.
                    </p>
                    <p className="mt-2">Hacemos un <strong>seguimiento global </strong>, estamos pendientes de la
                        evolución de <strong>todas las asignaturas</strong>, priorizando aquellas
                        en las que el alumno tiene dificultades, siempre con la
                        vista puesta en <strong>aprovechar al máximo </strong> el tiempo para que
                        los <strong>resultados en los exámenes </strong> sean satisfactorios para
                        todos.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;
