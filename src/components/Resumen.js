import React, { Component } from 'react';
import { primeraMayuscula } from '../helpers';

class Resumen extends Component {

    mostrarResumen = () => {

        const { marca, year, plan } = this.props.datos;

        if( !marca || !year || !plan ){
            return null;
        }

        return(
            <div className="resumen">
                <h2>Resumen de Cotización</h2>
                <ul>
                    <li>Marca : {primeraMayuscula(marca)}</li>
                    <li>Plan: {primeraMayuscula(plan)}</li>
                    <li>Año del auto: {primeraMayuscula(year)}</li>
                </ul>
            </div>
        );
    }

    render(){

    
        return (
            <div>
                {this.mostrarResumen()}

                
            </div>
        );
    }

}

export default Resumen;