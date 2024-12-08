import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cursos.css';  // Archivo CSS actualizado

const Cursos = () => {
    return (
        <div className="cursos-container">
            {/* Sección de Horarios */}
            <section className="horarios-section">
                <div className="container w-100">
                    <h2 className="text-center titulo-cursos">Nuestro Horario</h2>
                    <div className="w-100 d-flex justify-content-center">
                        <p className="w-50">Ofrecemos la posibilidad de elegir el horario que mejor se
                            adapte a sus necesidades, facilitando así la conciliación
                            familiar; entre las 16.00 y las 21.00</p>
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
                                <td>45 €</td>
                                <td>55 €</td>
                                <td>65 €</td>
                            </tr>
                            <tr>
                                <th>Secundaria</th>
                                <td>55 €</td>
                                <td>65 €</td>
                                <td>75 €</td>
                            </tr>
                            <tr>
                                <th>Bachillerato</th>
                                <td>--</td>
                                <td>65 €</td>
                                <td>75 €</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Sección de Promociones */}
            <section className="promociones-section">
                <div className="container">
                    <h2 className="text-center titulo-cursos">¡Descuentos siempre activos!</h2>
                    <div className="promociones-container">
                        <div className="promo-item">
                            <h5>Descuento para familias numerosas</h5>
                            <p>50% en la matrícula.</p>
                        </div>
                        <div className="promo-item">
                            <h5>Descuentos para hermanos inscritos</h5>
                            <p>5% en el total de las mensualidades. </p>
                        </div>
                        <div className="promo-item">
                            <h5>Descuentos para socios de AMPAs</h5>
                            <p>50% en la matrícula y 5% en la mensualidad.</p>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <h2 className="text-center titulo-cursos">¡Promociones!</h2>
                    <div className="promociones-container">
                        <div className="promo-item">
                            <h5>¡Trae un amigo!</h5>
                            <p>¡Por cada amigo que inscribas en la academia, obtendrás 15€ de
                                descuento en la siguiente mensualidad! </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Cursos;
