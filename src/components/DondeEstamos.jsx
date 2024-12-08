import React from 'react';
import "./DondeEstamos.css";

const DondeEstamos = () => {
    return (
        <section className="donde-estamos-container container-fluid">
            <div className="container donde-estamos-content">
                <div className="row">
                    {/* Sección de texto sobre la ubicación */}
                    <div className="col-12 text-content">
                        <h2>¿Dónde estamos?</h2>
                        <p>Nos encontramos en la siguiente dirección:</p>
                        <p>
                            <strong> C/ Albaicín, nº 2ª, oficina 2. Bormujos.(Sevilla)</strong>
                            <br/>
                            (Edificio de la NOTARÍA, junto a SUPERMERCADO MAS)
                        </p>
                    </div>

                    {/* Sección del mapa con Google Maps */}
                    <div className="col-12 map-content">
                        <iframe
                            // 37.36811889360275, -6.080111149167616
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1585.4598680280385!2d-6.081173396599333!3d37.368076028904696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd12133af5ea8481%3A0xbe6093406c7ced7f!2sC.%20Albaic%C3%ADn%2C%202A%2C%20Oficina%202%2C%2041930%20Bormujos%2C%20Sevilla!5e0!3m2!1ses!2ses!4v1733647146779!5m2!1ses!2ses"
                            width="100%"
                            height="400"
                            style={{border: 0, borderRadius: '15px'}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa ubicación"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DondeEstamos;
