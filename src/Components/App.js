import React, { Component } from 'react';
import '../css/App.css'

//comportents
import Header from './Header';
import FormGastos from './FrmGastos';
import Listado from './Listado';
import ControlPpto from './ControlPpto';


//helpers
import { validarPpto } from '../helper';



class App extends Component {
  VrPpto = React.createRef();

  state = {
    gastos: [],
    presupuesto: 0,
    restante: 0
  }

  // componentDidMount() {
  //   this.obtenerPpto();
  // }

  obtenerPpto = () => {

    const _vrPpto = this.VrPpto.current.value;

    if (validarPpto(_vrPpto)) {

      this.setState({
        presupuesto: _vrPpto,
        restante: _vrPpto
      });
    }

  }



  agregarGasto = gasto => {
    const _gastos = { ...this.state.gastos };

    _gastos[`gastos${Date.now()}`] = gasto;

    this.setState({
      gastos: _gastos
    });

    this.restarPpto(gasto.cantidad);
    // console.log(_gastos);
  }

  restarPpto = (vrGasto) => {
    const resultado = this.state.presupuesto - vrGasto;
    this.setState({
      restante: resultado
    });
  }


  render() {
    return (
      <div className="App container" >
        <Header
          title="Gastos quincenales">
        </Header>

        <div className="contenido-principal contenido">
          <div className="row">
            <div className="campo">
              <label>Ingrese presupuesto</label>
              <input onBlur={this.obtenerPpto} ref={this.VrPpto} type="text" className="u-full-width" placeholder="Ej. 1,000,000"></input>


            </div>
          </div>


          <div className="row">

            <div className="one-half column">
              <FormGastos
                agregarGasto={this.agregarGasto}
              >

              </FormGastos>
            </div>
            <div className="one-half column">
              <Listado
                gastos={this.state.gastos}
              ></Listado>

              <ControlPpto
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              ></ControlPpto>

            </div>
          </div>
        </div>
      </div>
    );
  }


}

export default App;
