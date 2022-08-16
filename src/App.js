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
        //clone product
        const products = [...this.state.products];
        // find item
        const selectedItem = products.find(p => p.id === id);
        // add one item quantity
        selectedItem.quntity++;
        // set new item
        this.setState({products})
    }
    
    decrementHandler = (id) => {
        //clone product
        const products = [...this.state.products];
        // find item
        const selectedItem = products.find(p => p.id === id);

        if (selectedItem.quntity === 1){
            const filteredProducts = products.filter(p => p.id !== id)
            this.setState({products: filteredProducts})
        } else {
            // minus one item quantity
            selectedItem.quntity--;
            // set new item
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