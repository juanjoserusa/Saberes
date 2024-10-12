import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Archivo CSS personalizado
import logo  from '../assets/img/saberes_horizontal.png'

const Navbar = () => {
  return (
    <header className="p-0">
      {/* Navbar fija en la parte superior */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top w-100">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo pequeño siempre visible en el lateral */}
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo pequeño"
              className="d-inline-block align-text-top"
              width="350"
            />
          </a>
          <img  src=''/>

          {/* Botón para menú colapsable en dispositivos móviles */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Enlaces del menú */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#quienes-somos">Quiénes Somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#donde-estamos">Dónde Estamos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#clases-talleres">Clases y Talleres</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#contacto-email">Contacto Email</a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn btn-primary text-white px-4 py-2 rounded-pill"
                  href="https://wa.me/34610854449"
                >
                  Llamar/WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
