import React, { Component } from 'react';
import '../burger/burger.css';
import { drinksData } from '../mock-data';

class drinks extends Component {
    render() {
        return (
            <div className="category-box">
                {drinksData.map((value) => {
                    return (
                        <div onClick={()=> this.props.onSelect(value)} className="burgers-card">
                            <img className="card-img" src={value.img} alt="img" />
                            <p className="card-text">{value.title}</p>
                            <p className="card-prise">{value.prise} so'm</p>
                        </div>
                    )
                })}
            </div>    
        );
    }
}

export default drinks;