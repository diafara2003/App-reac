import React, { Component } from 'react';
import Presupuesto from './Presupuesto';
import Restante from './Restante';

class controlPpto extends Component {
    render() {
        return (
            <React.Fragment>
                <Presupuesto
                presupuesto={this.props.presupuesto}
                >

                </Presupuesto>
                <Restante
                restante={this.props.restante}
                >

                </Restante>

            </React.Fragment>
        )
    };
}

export default controlPpto;