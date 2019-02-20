import React, { Component } from "react";
import Loader from "./Loader";
import ProductCard from "../presentational/ProductCard";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
  }
  componentDidMount() {
    axios
      .get("/api/products")
      .then(res => {
        this.setState({
          products: res.data,
          loading: false
        });
      })
      .catch(err => console.log("Read all products Error ---- ", err));
  }
  render() {
    const { products, loading } = this.state;
    if (!loading) {
      return (
        <div className="container">
          <div className="container">
            {products.length ? (
              products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>No Products to show</p>
            )}
          </div>
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}
