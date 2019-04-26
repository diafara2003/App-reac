import React, { Component } from "react";
import { revisarPpto } from "../helper";

class Restante extends Component {
  render() {
    const ppto = this.props.presupuesto;
    const restante = this.props.restante;

    return <div className={revisarPpto(ppto,restante)}>Restante:${this.props.restante}</div>;
  }
}

export default Restante;
