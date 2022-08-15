import { Component } from "react";

import ProductList from "./Components/ProductList";

import "./App.css";
class App extends Component {
    render(){
        return (
            <div className="container">
                <h1>Shopping App</h1>
                <ProductList/>
            </div>
        )
    }
}

export default App;