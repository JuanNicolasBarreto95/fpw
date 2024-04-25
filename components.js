import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import Modal from 'react-modal';
import './styles.css';
import './App.css';

Modal.setAppElement('#root');
function App() {
  const [data, setData] = useState([
  ]);
  const [formData, setFormData] = useState({
    ID_Ubicacion: '',
    ID_Marca: '',
    ID_Comprar: '',
    ID_Condicion: '',
    ID_Tipo_Carroceria: '',
    ID_Tipo_Combustible: '',
    ID_Transmision: '',
    ID_Color:'',
    ID_Direccion:'',
    ID_Otr_Car:'',
    ID_Km:'',
    ID_Puertas:'',
    
  })
    
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:82/tipificacion')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error:', error));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario (recargar la pÃ¡gina).

    console.log(formData);
    // Cierra el modal despuÃ©s de enviar
    setModalIsOpen(false);

     axios.post('http://localhost:82/tipificacion', formData)
       .then((response) => {
         console.log('Solicitud exitosa:', response.data);
         // Realiza acciones adicionales si es necesario
       })
       .catch((error) => {
         console.error('Error en la solicitud:', error);
       });
  };
  const handleChange = (e) => {
    // Actualiza el estado del formulario cuando se cambian los campos.
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (


    
    <div className="App">
  <div class="container">
          <div class="row">
<Card>
<div class="container text-center">
      <div class="card-header" >
          <h1>Pagina de Autos</h1>    
      </div>
      </div>

      <Button variant="link">Link</Button>
      </Card>


      </div>
      </div>

      

 
<Card>
      <div class="container text-center">
  <div class="row align-items-center">
  <div class="col">
    <Button onClick={() => setModalIsOpen(true)}  variant="primary">CREAR MALLA</Button>
    
    </div>
    <div class="col">

    <label for="validationCustom01" class="form-label">Buscar</label>
              <input type="text" class="form-control"  name="filterTipificacion" />
    </div>
    <div class="col">
    <label for="validationCustom01" class="form-label">Buscar Nombre Simulacion</label>
              <input type="text" class="form-control" id="validationCustom01" value="" required/>
    </div>
    <div class="col">
    <label for="validationCustom01" class="form-label">Buscar Servicio</label>
              <input type="text" class="form-control" id="validationCustom01" value="" required/>
    </div>

    <div class="col">
    <Button onClick={() => setModalIsOpen(true)}  variant="primary">SUBIR ARCHIVO</Button>
    
    </div>

  </div>
</div>


</Card>

     
 
  <br></br>

 

      <div className="simulation-container">
        {data.map((item, index) => (
          <div key={index} className="simulation-item">

<Container>
      <Row>
<Card className="text-center">
      <Card.Header></Card.Header>
      <Card.Body>
      <div className="mb-2">
     
   </div>
      <h5 class="card-title">{item.ID_Ubicacion}</h5>

    
   <div class="icon h2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path></svg></div>
        <Card.Text>

        <CardGroup>
{[
        'Light',
    
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header></Card.Header>
          <Card.Body>
        
            <Card.Text>
            <Card.Title>Marca</Card.Title>
            <Card.Title>{item.ID_Marca} </Card.Title>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}

   
   {[
        'Light',
    
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header></Card.Header>
          <Card.Body>
     
            <Card.Text>
            <Card.Title>Comprar</Card.Title>
            <Card.Title>{item.ID_Comprar}</Card.Title>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
   
   
    </CardGroup>

   <CardGroup>
{[
        'Light',
    
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header></Card.Header>
          <Card.Body>
        
            <Card.Text>
            <Card.Title>Condicion</Card.Title>
            <Card.Title>:{item.ID_Condicion}</Card.Title>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}

   
   {[
        'Light',
    
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header></Card.Header>
          <Card.Body>
     
            <Card.Text>
            <Card.Title>Tipo Carroceria</Card.Title>
            <Card.Title>{item.ID_Tipo_Carroceria}</Card.Title>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
   
   {[
        'Light',
    
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header></Card.Header>
          <Card.Body>
     
            <Card.Text>
            <Card.Title>Nombre Jefe</Card.Title>
            <Card.Title>{item.ID_Tipo_Combustible}</Card.Title>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
       {[
        'Light',
    
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header></Card.Header>
          <Card.Body>
     
            <Card.Text>
            <Card.Title>Nombre Jefe</Card.Title>
            <Card.Title>{item.ID_Transmision}</Card.Title>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
       {[
        'Light',
    
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header></Card.Header>
          <Card.Body>
     
            <Card.Text>
            <Card.Title>Nombre Jefe</Card.Title>
            <Card.Title>{item.ID_Color}</Card.Title>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}

{[
        'Light',
    
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header></Card.Header>
          <Card.Body>
     
            <Card.Text>
            <Card.Title>Nombre Jefe</Card.Title>
            <Card.Title>{item.ID_Direccion}</Card.Title>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}

{[
        'Light',
    
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header></Card.Header>
          <Card.Body>
     
            <Card.Text>
            <Card.Title>Nombre Jefe</Card.Title>
            <Card.Title>{item.ID_Otr_Car}</Card.Title>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
       {[
        'Light',
    
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header></Card.Header>
          <Card.Body>
     
            <Card.Text>
            <Card.Title>Nombre Jefe</Card.Title>
            <Card.Title>{item.ID_Km}</Card.Title>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}

{[
        'Light',
    
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header></Card.Header>
          <Card.Body>
     
            <Card.Text>
            <Card.Title>Nombre Jefe</Card.Title>
            <Card.Title>{item.ID_Puertas}</Card.Title>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>

        </Card.Text>
    
      </Card.Body>


      <CardGroup>


      <Card>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
       
          <Card.Title>Servicio</Card.Title>

     {item.servicio}

          </Card.Text>
        
        </Card.Body>
        <Card.Footer>
     
        </Card.Footer>
      </Card>



      <Card>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
       
          <Card.Title>Fecha</Card.Title>

     {item.fecha}

          </Card.Text>
        
        </Card.Body>
     
     
     
      </Card>
    </CardGroup>
    </Card>

    
      
      </Row>
    </Container>
    
          </div>

        ))}
      </div>

      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Modal de SimulaciÃ³n"
        className="modal-content1"
      >
   
      <div>
      <h2>ENVÃO DE DATOS A LA MALLA DE ADMINISTRACIÃ“N</h2>
      <form onSubmit={handleSubmit}>
     
     
    
     
        <div>
          <label>CÃ³digo de SimulaciÃ³n:</label>
          <input
            type="text"
            name="codigo_SIMULACION"
            value={formData.codigo_SIMULACION}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label>CÃ³digo de Nivel Superior:</label>
          <input
            type="text"
            name="codigo_NIVEL_SUPERIOR"
            value={formData.codigo_NIVEL_SUPERIOR}
            onChange={handleChange}
          />
        </div>

        
 
        <div>
          <label>Nombre SimulaciÃ³n</label>
          <input
            type="text"
            name="nombre_SIMULACION"
            value={formData.nombre_SIMULACION}
            onChange={handleChange}
          />
        </div>
 
        <div>
          <label>Reporte Detallado</label>
          <input
            type="text"
            name="reporte_DETALLADO"
            value={formData.reporte_DETALLADO}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Fecha Inicio SimulaciÃ³n </label>
          <input
            type="text"
            name="fecha_INICIO_SIMULACION"
            value={formData.fecha_INICIO_SIMULACION}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Fecha Fin SimulaciÃ³n</label>
          <input
            type="text"
            name="fecha_FIN_SIMULACION"
            value={formData.fecha_FIN_SIMULACION}
            onChange={handleChange}
          />
        </div>

        

  
        <div>
          <label>fecha:</label>
          <input
            type="text"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Servicio</label>
          <input
            type="text"
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
          />
        </div>
  

    
        
        <div>
          <label>Nombre Jefe</label>
          <input
            type="text"
            name="nombre_JEFE"
            value={formData.nombre_JEFE}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Estado</label>
          <input
            type="text"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Cargo Nivel Superior</label>
          <input
            type="text"
            name="cargo_NIVEL_SUPERIOR"
            value={formData.cargo_NIVEL_SUPERIOR}
            onChange={handleChange}
          />
        </div>

    
    



        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
      
    </div>
     
    </Modal>

  </div>


  
  );
}

export default App;
