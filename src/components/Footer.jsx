import React from 'react';
import './Footer.css'; // Archivo CSS personalizado para estilos adicionales

const Footer = () => {
  return (
    <footer className="footer bg-light py-4">
      <div className="container">
        <div className="row justify-content-between text-center text-md-start">
          {/* Columna 1: Rutas de navegación */}
          <div className="col-md-4">
            <h5>Navegación</h5>
            <ul className="list-unstyled">
              <li><a href="#quienes-somos" className="footer-link">Quiénes Somos</a></li>
              <li><a href="#donde-estamos" className="footer-link">Dónde Estamos</a></li>
              <li><a href="#clases-talleres" className="footer-link">Clases y Talleres</a></li>
              <li><a href="#contacto-email" className="footer-link">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 2: Información legal */}
          <div className="col-md-4">
            <h5>Información Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#privacidad" className="footer-link">Política de Privacidad</a></li>
              <li><a href="#terminos" className="footer-link">Términos y Condiciones</a></li>
              <li><a href="#cookies" className="footer-link">Política de Cookies</a></li>
            </ul>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div className="col-md-4" style={{"width": "180px"}}>
            <h5>Redes Sociales</h5>
            <div className="social-icons">
              <a href="https://facebook.com" className="footer-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" className="footer-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" className="footer-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" className="footer-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-3 footer-link">
          <p className='copyright-footer'>&copy; {new Date().getFullYear()} Saberes. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
