import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Product from "../Product/Product";

class ProductList extends Component {
    render() {
        return (
            <div>
                {!this.props.products.length && <div>there is no product in cart</div>}
                {this.props.products.map((product) => (
                    <Product 
                        key={uuidv4()} 
                        product={product}
                        onDelete={() => this.props.onRemove(product.id)}
                        onIncrement={() => this.props.onIncrement(product.id)}
                        onDecrement={() => this.props.onDecrement(product.id)}
                        />
                    ))
                }
            </div>
        );
    }
}
 
export default ProductList;