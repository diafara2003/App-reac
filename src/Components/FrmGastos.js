import React, { Component } from 'react';

class FrmGastos extends Component {

    //reaf para los campor el formulario
    nombreGasto = React.createRef();
    cantidad = React.createRef();


    crearGasto = (e) => {
        e.preventDefault();

        const gasto = {
            nombre: this.nombreGasto.current.value,
            cantidad: this.cantidad.current.value
        };
      

        this.props.agregarGasto(gasto);

        e.currentTarget.reset();
    }


    render() {

        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre gasto</label>
                    <input ref={this.nombreGasto} type="text" className="u-full-width" placeholder="Ej. transporte"></input>
                </div>
                <div className="campo">
                    <label>Cantidad</label>
                    <input ref={this.cantidad} type="number" className="u-full-width" placeholder="Ej. 300"></input>
                </div>

                <input type="submit" className="button-primary u-full-width" value="Agregar"></input>

            </form>
        )
    }

}

export default FrmGastos;