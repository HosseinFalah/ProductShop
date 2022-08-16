import { Component } from "react";

import NavBar from "./Components/NavBar/NavBar";
import ProductList from "./Components/ProductList/ProductList";

import "./App.css";
class App extends Component {
    state = {
        products: [
            {id: 1, name: "React.js", price: "99$", quntity: 2},
            {id: 2, name: "Node.js", price: "55$", quntity: 4},
            {id: 3, name: "JavaScript", price: "65$", quntity: 7},
        ] 
    }

    removeHandler = (id) => {
        const filteredProducts = this.state.products.filter(p => p.id !== id)
        this.setState({products: filteredProducts})
    }

    incrementHandler = (id) => {
        // find product seleted
        const index = this.state.products.findIndex((item) => item.id === id);
        // clone the seleted index and update qty
        const product = {...this.state.products[index]};
        product.quntity++;
        // update product
        const products = [...this.state.products];
        products[index] = product;
        this.setState({products})
    }
    
    decrementHandler = (id) => {
        // find product seleted
        const index = this.state.products.findIndex((item) => item.id === id);
        const product = {...this.state.products[index]};
        if (product.quntity === 1) {
            // remove product
            const filteredProducts = this.state.products.filter(p => p.id !== id);
            this.setState({products: filteredProducts})
            
        } else {
            // clone the seleted index and update qty
            const products = [...this.state.products];
            product.quntity--;
            // update product
            products[index] = product;
            this.setState({products})
        }
    }

    render(){
        return (
            <div className="container">
                <NavBar totalItems={this.state.products.length}/>
                <ProductList 
                    products={this.state.products}
                    onRemove={this.removeHandler}
                    onIncrement={this.incrementHandler}
                    onDecrement={this.decrementHandler}
                    />
            </div>
        )
    }
}

export default App;