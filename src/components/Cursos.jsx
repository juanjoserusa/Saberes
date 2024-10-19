import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cursos.css';  // Archivo CSS actualizado

const Cursos = () => {
  return (
    <div className="cursos-container">
      {/* Sección de Horarios */}
      <section className="horarios-section">
        <div className="container">
          <h2 className="text-center titulo-cursos">Nuestro Horario</h2>
          <div className="horarios-bloques">
            <div className="bloque-horario">
              <div className="horario-content">
                <h4>Primaria</h4>
                <p>De 16:00 a 17:00 y de 17:00 a 18:00</p>
              </div>
            </div>
            <div className="bloque-horario">
              <div className="horario-content">
                <h4>Secundaria y Bachillerato</h4>
                <p>De 18:00 a 19:30 y de 19:30 a 21:00</p>
              </div>
            </div>
                <p>(Para secundaria y bachillerato, si prefieres venir 3 horas en 3 días: de 18:00 a 19:00, de 19:00 a 20:00 y de 20:00 a 21:00)</p>
          </div>
          <div className="text-center mt-4 general-horario-container">
            <p className="general-horario">📅 <strong>De lunes a viernes:</strong> 16:00 a 21:00</p>
          </div>
        </div>
      </section>

      {/* Sección de Tarifas */}
      <section className="tarifas-section">
        <div className="container">
          <h2 className="text-center titulo-cursos">Nuestras Tarifas</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-striped table-tarifas">
              <thead className="table-primary">
                <tr>
                  <th>Refuerzo Educativo</th>
                  <th>2 horas</th>
                  <th>3 horas</th>
                  <th>3 horas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Primaria</th>
                  <td>50 €</td>
                  <td>60 €</td>
                  <td>50 €</td>
                </tr>
                <tr>
                  <th>Secundaria</th>
                  <td>60 €</td>
                  <td>70 €</td>
                  <td>60 €</td>
                </tr>
                <tr>
                  <th>1º Bachillerato</th>
                  <td>65 €</td>
                  <td>75 €</td>
                  <td>65 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sección de Promociones */}
      <section className="promociones-section">
        <div className="container">
          <h2 className="text-center titulo-cursos">¡Ofertas y Promociones!</h2>
          <div className="promociones-container">
            <div className="promo-item">
              <h5>Descuento de Matrícula</h5>
              <p>Si te matriculas antes del <strong>10 de octubre</strong>, obtienes un descuento de 10€ en tu cuota mensual. ¡Este descuento es válido durante todo el curso!</p>
            </div>
            <div className="promo-item">
              <h5>¡Trae a un Amigo!</h5>
              <p>¡Por cada amigo que inscribas en la academia, obtendrás 10€ de descuento en tu próxima mensualidad!</p>
            </div>
            <div className="promo-item">
              <h5>Descuentos Adicionales</h5>
              <ul>
                <li>Número de hermanos inscritos</li>
                <li>Ser familia numerosa</li>
                <li>Formar parte del AMPA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Cursos;
