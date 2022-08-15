import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Product from "./Product";

class ProductList extends Component {
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

    render() {
        return (
            <div>
                {this.state.products.map((product) => (
                    <Product 
                        key={uuidv4()} 
                        product={product}
                        onDelete={() => this.removeHandler(product.id)}
                        onIncrement={() => this.incrementHandler(product.id)}
                        onDecrement={() => this.decrementHandler(product.id)}
                        />
                    ))
                }
            </div>
        );
    }
}
 
export default ProductList;