import React, { Component } from 'react';
import './order.css';

class order extends Component {
    render() {
        return (
            <div className="order-box">

                <div className="order-top">Order</div>

                    <div className="order-body">

                        <div className="prise-box">
                            <h1 className="total-prise">total: {this.props.data.total} so'm</h1>
                            <div className="order-btn-box">
                                <button onClick={this.props.onCencel} className="prise-btn cenel-btn">Cencel</button>
                                <button className="prise-btn order-btn">Order</button>
                            </div>
                        </div>

                        <div className="card-box">

                            {this.props.data.selected.length <= 0 && <h1 className="not-selected">not selected!</h1>}
                            {this.props.data.selected.map((value) => (
                            <div className="order-card">
                                <img className="oreder-card-img" src={value.img} alt="img" />
                                <p className="order-card-title">{value.title}</p>
                                <p className="order-card-prise">{value.prise}</p>
                                <button onClick={()=> this.props.onDelate(value.selectedId)} className="card-delate-button">Delate</button>
                            </div>
                            ))}

                        </div>
                    </div>
            </div>   
        );
    }
}

export default order;