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
              src="src\assets\img\fi.jpg" // Cambia esta ruta por la de tu imagen real
              alt="Foto de Fátima"
              className="img-responsive"
            />
          </div>
          {/* Texto de descripción */}
          <div className="col-md-6 sobre-mi-text">
            <h2>Conócenos</h2>
            <p>
              ¡Hola! Soy Fátima, la responsable de Saberes, además de la profe. Mi profesión
              es por vocación: desde niña quise ser maestra.
            </p>
            <p>
              Con más de quince años de experiencia, he decidido dar un salto y montar mi propia
              academia, donde poder ayudar a cada alumno/a a encontrar sus puntos fuertes y superar sus obstáculos.
            </p>
            <p>
              “Los límites sólo existen en tu cabeza” y “aunque lo veas negro alcanzarás la cima”
              son dos frases que escuchan mucho mis alumnos. El hacerles ver que si se lo
              proponen, pueden; y que superar obstáculos es gratificante, aunque requiere de un
              esfuerzo por su parte; son dos de mis claves.
            </p>
            <p>
              Las demás las van poniendo ellos con su forma de ser, y por ello la enseñanza aquí
              es individualizada: cada uno aprende de una manera diferente, y nos adaptamos a ella.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
