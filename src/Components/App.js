import React, { Component } from "react";
import "../css/App.css";

//comportents
import Header from "./Header";
import FormGastos from "./FrmGastos";
import Listado from "./Listado";
import ControlPpto from "./ControlPpto";
import NumberFormat from 'react-number-format';

//helpers
import { validarPpto } from "../helper";

class App extends Component {
  VrPpto = React.createRef();

  state = {
    gastos: [],
    presupuesto: 0,
    restante: 0
  };

  // componentDidMount() {
  //   this.obtenerPpto();
  // }

  obtenerPpto = () => {
    let _vrPpto = this.VrPpto.current.value;

    if (_vrPpto == "") {
      _vrPpto = 0;
    }

    if (!validarPpto(_vrPpto)) {
      this.setState({
        gastos: [],
        presupuesto: 0,
        restante: 0
      });
    } else {
      this.setState({
        presupuesto: _vrPpto,
        restante: _vrPpto
      });
    }
  };

  agregarGasto = gasto => {
    const _gastos = { ...this.state.gastos };

    _gastos[`gastos${Date.now()}`] = gasto;

    this.setState({
      gastos: _gastos
    });

    this.restarPpto(gasto.cantidad);
    // console.log(_gastos);
  };

  restarPpto = vrGasto => {
    const resultado = this.state.restante - vrGasto;
    this.setState({
      restante: resultado
    });
  };

  render() {
    const { presupuesto } = this.state;
    return (
      <div className="App container">
        <Header title="Gastos quincenales" />

        <div className="contenido-principal contenido">
          <div className="row">
            <div className="campo">
              <label>Ingrese presupuesto</label>
              <input
                onBlur={this.obtenerPpto}
                ref={this.VrPpto}
                type="text"
                className="u-full-width"
                placeholder="Ej. 1,000,000"
              />
            </div>            
          </div>
          { presupuesto == 0 ? null : (
            <div className="row">
              <div className="one-half column">
                <FormGastos agregarGasto={this.agregarGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={this.state.gastos} />

                <ControlPpto
                  presupuesto={this.state.presupuesto}
                  restante={this.state.restante}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
