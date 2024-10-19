import React from 'react';
import "./DondeEstamos.css";

const DondeEstamos = () => {
  return (
    <div className="donde-estamos-container container ">
      <div className="row">
        {/* Sección de texto sobre la ubicación */}
        <div className="col-12 col-md-6">
          <h2>¿Dónde estamos?</h2>
          <p>
            Nos encontramos en la siguiente dirección:
          </p>
          <p>
            <strong>C/Pablo Coso Calero, 2, oficina 2. BORMUJOS (Sevilla)</strong> 
            <br />
            (Entrada por calle Albaicín 2A. En el edificio de la Notaría, junto al supermercado MAS)
          </p>
        </div>

        {/* Sección del mapa con Google Maps */}
        <div className="col-12 col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.8776606543013!2d-6.077678024340147!3d37.37375273982654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126da3acfd4169%3A0x5586b6677c8f4e6b!2sC.%20Pablo%20Coso%20Calero%2C%202%2C%2041930%20Bormujos%2C%20Sevilla%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sus!4v1696522957415!5m2!1ses!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa ubicación"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DondeEstamos;
