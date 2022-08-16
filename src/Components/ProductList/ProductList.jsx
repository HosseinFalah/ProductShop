import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Product from "../Product/Product";

class ProductList extends Component {
    render() {
        const { products, onRemove, onIncrement, onDecrement } = this.props
        return (
            <div>
                {!products.length && <div>there is no product in cart</div>}
                {products.map((product) => (
                    <Product 
                        key={uuidv4()} 
                        product={product}
                        onDelete={() => onRemove(product.id)}
                        onIncrement={() => onIncrement(product.id)}
                        onDecrement={() => onDecrement(product.id)}
                        />
                    ))
                }
            </div>
        );
    }
}
 
export default ProductList;