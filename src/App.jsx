import React, { Component } from 'react';
import './App.css';
// import logo from './img/logo.png';
import Burger from './burger/burger.jsx';
import Spinner from './spinners/spinner.jsx';
import Chicken from './chicken/chicken.jsx';
import Pizza from './pizza/pizza.jsx';
import Drinks from './drinks/drinks.jsx';
import Desserts from './desserts/desserts.jsx';
import Order from './order/order.jsx';
import Kids from './kids/kids.jsx';
import Others from './others/others.jsx';

import burger from './menu-icons/burger.svg';
import chickenn from './menu-icons/chicken.svg';
import kids from './menu-icons/kids.svg';
import dessert from './menu-icons/dessert.svg';
import drinkk from './menu-icons/drinks.svg';
import other from './menu-icons/other.svg';
import pizzaa from './menu-icons/pizza.svg';
import spinn from './menu-icons/spinner.svg'; 


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: 'burger',
            selected: [],
            total: 0,
        }
    }
    render(){
        const onChange = (menu) => {
            this.setState({isActive: menu})
        }
        
        const onSelect = (value) => {
            const selected = [...this.state.selected, {...value, selectedId: this.state.selected.length} ];
            this.setState({selected})
            selected.forEach((vaule) => (
                this.setState({total: this.state.total + value.prise})
            ))
        }

        const onDelate = (id) => {
            const selected = this.state.selected.filter((value) => {
                value.selectedId === id && this.setState({total: this.state.total - value.prise})
                return value.selectedId !== id
            });
            this.setState({selected})
        }

        const onCencel = () => {
            this.setState({selected: [], total: 0})
        }
        return (
            <div className="app-wrapper">
                <div className="logo-box">
                    <p className="logo-text">Halal Burger</p>
                </div>
                <div className="menu-wrapper">
                    <div onClick={()=>onChange('burger')} className="menu-box burger-menu">
                        <img className="menu-icon" src={burger} alt="img" />
                        <p className="menu-text">Burgers</p>
                    </div>

                    <div onClick={()=>onChange('spinner')} className="menu-box spinner-menu">
                        <img className="menu-icon" src={spinn} alt="img" />
                        <p className="menu-text">Spinners</p>
                    </div>
                    
                    <div onClick={()=>onChange('chicken')} className="menu-box chicken-menu">
                        <img className="menu-icon" src={chickenn} alt="img" />
                        <p className="menu-text">Chicken</p>
                    </div>

                    <div onClick={()=>onChange('pizza')} className="menu-box pizza-menu">
                        <img className="menu-icon" src={pizzaa} alt="img" />
                        <p className="menu-text">Pizza</p>
                    </div>
                    
                    <div onClick={()=>onChange('drinks')} className="menu-box drinks-menu">
                        <img className="menu-icon" src={drinkk} alt="img" />
                        <p className="menu-text">Drinks</p>
                    </div>
                    
                    <div onClick={()=>onChange('kids')} className="menu-box combo-menu">
                        <img className="menu-icon" src={kids} alt="img" />
                        <p className="menu-text">Kids</p>
                    </div>
                    
                    <div onClick={()=>onChange('desserts')} className="menu-box dessert-menu">
                        <img className="menu-icon" src={dessert} alt="img" />
                        <p className="menu-text">Desserts</p>
                    </div>
                    
                    <div onClick={()=>onChange('others')} className="menu-box others-menu">
                        <img className="menu-icon" src={other} alt="img" />
                        <p className="menu-text">Others</p>
                    </div> 
                </div>

                <div className="body">
                    {this.state.isActive === 'burger' && <Burger onSelect={(value)=>onSelect(value)} />}
                    {this.state.isActive === 'spinner' && <Spinner onSelect={(value)=>onSelect(value)} />}
                    {this.state.isActive === 'chicken' && <Chicken onSelect={(value)=>onSelect(value)} />}
                    {this.state.isActive === 'pizza' && <Pizza onSelect={(value)=>onSelect(value)} />}
                    {this.state.isActive === 'drinks' && <Drinks onSelect={(value)=>onSelect(value)} />}
                    {this.state.isActive === 'kids' && <Kids onSelect={(value)=>onSelect(value)} />}
                    {this.state.isActive === 'desserts' && <Desserts onSelect={(value)=>onSelect(value)} />}
                    {this.state.isActive === 'others' && <Others onSelect={(value)=>onSelect(value)} />}

                    <Order onCencel={onCencel} onDelate={(id)=>onDelate(id)} data={this.state}/>
                </div>

            </div>
        );
    }
}

export default App;