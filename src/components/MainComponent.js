import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({
        selectedDish: dishId
    });
  }

  render() {

    const dishItem = this.state.dishes.filter( (dish) => {
        return dish.id === this.state.selectedDish;
    })[0];

    return (
      <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu
            onClick={(dishId) => this.onDishSelect(dishId)} 
            dishes={this.state.dishes} 
        />
        <DishDetail 
            dish = {this.state.selectedDish === null ? null : dishItem}
        />
      </div>
    );
  }
}

export default Main;
