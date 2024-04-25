import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Portal de Autos</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Catálogo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Buscar autos..." aria-label="Search" onChange={handleSearch} />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 sidebar">
            <h3>Información del Auto</h3>
            <ul>
              <li>Ubicación</li>
              <li>Marca</li>
              <li>Modelo</li>
              <li>Categoría</li>
              <li>Año</li>
              <li>Precio</li>
              <li>Condición</li>
              <li>Kilómetros</li>
              <li>Tipo de Carrocería</li>
              <li>Tipo de Combustible</li>
              <li>Puertas</li>
              <li>Transmisión</li>
              <li>Dirección</li>
              <li>Blindado</li>
              <li>Control de Tracción</li>
              <li>Otras Características</li>
              <li>Garantías</li>
            </ul>
          </div>
          <div className="col-md-9">
            <h2>Contenido Principal</h2>
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/turismo.jpg" className="d-block w-100" alt="Auto 1" />
                </div>
                <div className="carousel-item">
                  <img src="/target.jpg" className="d-block w-100" alt="Auto 2" />
                </div>
                <div className="carousel-item">
                  <img src="/rally.jpg" className="d-block w-100" alt="Auto 3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="table-container">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Año</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ford</td>
                    <td>Mustang</td>
                    <td>2022</td>
                    <td>$35,000</td>
                  </tr>
                  <tr>
                    <td>Chevrolet</td>
                    <td>Camaro</td>
                    <td>2023</td>
                    <td>$40,000</td>
                  </tr>
                  <tr>
                    <td>Toyota</td>
                    <td>Corolla</td>
                    <td>2021</td>
                    <td>$25,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="car-container">
              {[...Array(15)].map((_, index) => (
                <div key={index} className="car-item">
                  <img src={`/car-${index + 1}.jpg`} alt={`Auto ${index + 1}`} />
                  <div className="car-info">
                    <p>Precio: ${Math.floor(Math.random() * 100000)}</p>
                    <p>Año: {Math.floor(Math.random() * (2024 - 1990) + 1990)}</p>
                    <p>Kilómetros: {Math.floor(Math.random() * 100000)} km</p>
                    <p>Marca: Marca {index + 1}</p>
                    <p>Ciudad: Ciudad {index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="social-media">
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faEnvelope} /></a>
      </div>
    </div>
  );
}

export default App;
