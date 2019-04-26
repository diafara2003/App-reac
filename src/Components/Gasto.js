import React, { Component } from 'react';

class Gasto extends Component {
    render() {
        const { cantidad, nombre } = this.props.gasto;

        return (
            <div>
                <li className="gastos">
                    <p>
                        {nombre}
                        <span className="gasto">$ {cantidad}</span>
                    </p>
                </li>
            </div>
        );
    };
}

export default Gasto;