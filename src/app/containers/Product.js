import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TodoActions from '../actions/ProductActions';

class Product extends Component {

  getProducts = () => {
    this.props.actions.getProducts();
  }

  componentWillMount() {
    //this.getProducts();
    this.props.actions.pruebaThunk();
  }

  render() {
    const {products} = this.props;
    console.log(products);
    return (
      <div>
        <h1>Carrito de compra de los 90s</h1>
        <p> Cargando... {products.loading ? 'SI' : 'NO'}</p>
        {products.error ? <p style={{color:red}}> Hubo un error </p> : null}
        <div>
          <p> Carrito:</p>
          <p> {products.cart.map((product, index) => {
              return (
                <div key={index}>
                  <span>product.name</span>
                  <button onClick={() => this.props.actions.dropProduct({index})}>Borrar</button>
                </div>
              )
         }}</p>
        </div>
        <div>
          <p>Products</p>
        </div>
        <button onClick={() => this.props.actions.getProducts()}>Cambiar</button>
        <button onClick={this.getProducts}>_Cambiar</button>
        <div>
          {products.list.map((product, index) => {
            return (
                <div key={index}>
                  <span>{product.name}</span>
                  <button onClick={() => { this.props.actions.addToCart(product)}}>Add</button>
                </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  products: PropTypes.object.isRequired,
  //actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
