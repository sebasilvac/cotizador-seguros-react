import React, { Component } from 'react';
import '../css/App.css';

import Header from './Header';
import Formulario from './Formulario';
import {
  obtenerDiferenciaAnio, 
  calcularMarca, 
  obtenerPlan } from '../helpers';

import Resumen from './Resumen';
import Resultado from './Resultado';

class App extends Component {

  state = {
    resultado : '',
    datos: {}
  }

  cotizarSeguro = (datos) => {
      const { marca, plan, year} = datos;

      // agregar una base de 2000
      let resultado = 2000;

      // obtener la diferenci de años
      const diferencia = obtenerDiferenciaAnio(year);

      // y por cada año restar el 3% al valor del seguro
      resultado -= ((diferencia*3) * resultado ) / 100;

      // Americano 15% Asiatico 5% Europeo 30%
      resultado = calcularMarca(marca) * resultado;

      // calcular precio por plan
      resultado = parseFloat(obtenerPlan(plan) * resultado).toFixed(2);

      this.setState({
        resultado: resultado,
        datos : {marca, plan, year}
      })
  }

  render() {
    return (
      <div className="contenedor">
          <Header titulo="Cotizador de seguros de auto" />
          <div className="contenedor-formulario">

            

            <Formulario cotizarSeguro={this.cotizarSeguro}/>  

            <Resumen 
              datos={this.state.datos}
              resultado={this.state.resultado} />

            <Resultado resultado={this.state.resultado} />
          </div>
      </div>
    )
  }
}

export default App;
