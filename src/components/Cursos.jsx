import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cursos.css';  // Para agregar estilos adicionales

const Cursos = () => {
  return (
    <div className="cursos-container container">
              {/* Horario (Nuevo Diseño) */}
      <h2 className="text-center my-4 titulo-cursos">Nuestro Horario</h2>
      <div className="horarios-bloques">
        <div className="bloque-horario">
          <h4>Primaria</h4>
          <p>De 16:00 a 17:00 y de 17:00 a 18:00</p>
        </div>
        <div className="bloque-horario">
          <h4>Secundaria y Bachillerato</h4>
          <p>De 18:00 a 19:30 y de 19:30 a 21:00</p>
          <p>(Si prefieres venir 3 horas en 3 días: de 18:00 a 19:00, de 19:00 a 20:00 y de 20:00 a 21:00)</p>
        </div>
      </div>

      {/* Sección de tarifas */}
      <h2 className="text-center mb-4 titulo-cursos mt-4">Nuestras Tarifas</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-tarifas">
          <thead className="table-primary">
            <tr>
              <th>Refuerzo Educativo</th>
              <th>2 horas</th>
              <th>2 horas</th>
              <th>3 horas</th>
              <th>3 horas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Primaria</th>
              <td>50 €</td>
              <td>40 €</td>
              <td>60 €</td>
              <td>50 €</td>
            </tr>
            <tr>
              <th>Secundaria</th>
              <td>60 €</td>
              <td>50 €</td>
              <td>70 €</td>
              <td>60 €</td>
            </tr>
            <tr>
              <th>1º Bachillerato</th>
              <td>65 €</td>
              <td>55 €</td>
              <td>75 €</td>
              <td>65 €</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Promociones */}
      <h2 className="text-center my-4 titulo-cursos">¡Ofertas y Promociones!</h2>
      <div className="row promociones-wrapper">
        <div className="promo-col col-12 col-md-4 mb-4">
          <div className="card promo-card text-center">
            <div className="card-body">
              <h5 className="card-title">Descuento de Matrícula</h5>
              <p className="card-text">
                Si te matriculas antes del <strong>10 de octubre</strong>, obtienes un <strong>descuento de 10€</strong> en tu cuota mensual. ¡Este descuento es válido durante todo el curso!
              </p>
            </div>
          </div>
        </div>
        <div className="promo-col col-12 col-md-4  mb-4">
          <div className="card promo-card text-center">
            <div className="card-body">
              <h5 className="card-title">¡Trae a un Amigo!</h5>
              <p className="card-text">
                ¡Por cada amigo que inscribas en la academia, obtendrás <strong>10€ de descuento</strong> en tu próxima mensualidad!
              </p>
            </div>
          </div>
        </div>
        <div className="promo-col col-12 col-md-4  mb-4">
          <div className="card promo-card text-center">
            <div className="card-body">
              <h5 className="card-title">Descuentos Adicionales</h5>
              <p className="card-text">
                Disfruta de descuentos adicionales por:<br />
                <ul className="list-unstyled">
                  <li>- Número de hermanos inscritos</li>
                  <li>- Ser familia numerosa</li>
                  <li>- Formar parte del AMPA</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Cursos;
