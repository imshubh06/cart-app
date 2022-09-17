import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products : [
            {
                price: 999,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1605398821964-4d03102140f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                id : 1
            },
            {
                price: 99999,
                title: 'Laptop',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1561152820-340780bc049e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                id : 2
            },
            {
                price: 9999,
                title: 'Phone',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1597762470488-3877b1f538c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                id : 3
            }
        ]

    }
}
handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 1) {
        return;
    }
    products[index].qty -= 1;

    this.setState({
        products
    })
}
handleIncreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
        products
    })
}
handleDeleteQuantity = (id) => {
    const {products} = this.state;
    const items = products.filter((item)=>item.id !== id);
    this.setState({
        products:items
    })
}
getCartCount = () => {
  const{products} = this.state;
  let count = 0;
  products.forEach((product)=>{
    count += product.qty;
  })

  return count;
}

getCartTotal = () => {
  const {products} = this.state;
  let total = 0;
  products.forEach((product)=>{
    total = total + (product.price * product.qty) ;
  })
  return total;
}
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={ this.getCartCount() }/>
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteQuantity}
        />
        <div>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
