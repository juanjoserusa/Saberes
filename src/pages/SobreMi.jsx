import React from 'react';
import './SobreMi.css'; // Archivo CSS actualizado

const SobreMi = () => {
    return (
        <section className="sobre-mi-container container-fluid">
            <div className="container sobre-mi-content">
                <div className="row">
                    {/* Imagen */}
                    <div className="col-md-6 sobre-mi-image">
                        <img
                            src="./src/assets/img/fi.jpg" // Cambia esta ruta por la de tu imagen real
                            alt="Foto de Fátima"
                            className="img-responsive"
                        />
                    </div>
                    {/* Texto de descripción */}
                    <div className="col-md-6 sobre-mi-text">
                        <h2>Conócenos</h2>
                        <p>
                            ¡Hola! Soy Fátima, la responsable y la profesora de SABERES.
                        </p>
                        <p>
                            Mi trabajo es mi pasión, con más de 10 años de experiencia, decidí dar un
                            salto y abrir un espacio nuevo donde poder ayudar a cada alumno/a a <strong>mejorar en sus
                            resultados académicos</strong>: aprender a pensar, aprender a
                            organizarse, aprender a estudiar; pero también un lugar donde pueden
                            evolucionar y crecer como persona: ser ellos mismos, crear lazos de amistad
                            con otros alumnos y <strong>desarrollar su confianza y su autoestima</strong>.
                        </p>
                        <p>
                            <strong>“Los límites sólo existen en tu cabeza”</strong> y <strong>“aunque lo veas negro
                            alcanzarás
                            la cima”</strong> son dos frases que escuchan mucho mis alumnos. Hacerles ver que
                            si se lo proponen, pueden; y que superar obstáculos es gratificante, aunque
                            requiere de un esfuerzo por su parte; son dos de mis claves.
                        </p>
                        <p>
                            Las demás las van poniendo ellos con su forma de ser: cada uno aprende de
                            una manera diferente, y nos adaptamos a ella.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SobreMi;
