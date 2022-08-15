//Icon
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillTrash2Fill } from "react-icons/bs";

import "./Product.css";

const Product = ({product, onIncrement, onDecrement, onDelete}) => {
    return (
        <div className="product">
            <p>Product name : {product.name}</p>
            <p>Product price: {product.price}</p>
            <div className="product__btn">
                <IoIosArrowUp onClick={onIncrement} color="#129310" cursor={"pointer"} size={20}/>
                <span className="quntity">{product.quntity}</span>
                <IoIosArrowDown onClick={onDecrement} color="#b10d0d" cursor={"pointer"} size={20}/>
            </div>
            <button onClick={onDelete} className="btn"><BsFillTrash2Fill size={20} color="#b10d0d"/></button>
        </div>
    )
}

export default Product;