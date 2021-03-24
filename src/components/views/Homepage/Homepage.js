import React, { Component } from "react";
import Products from "../../features/Products/ProductsContainer";
import Slider from "../../features/Slider/Slider";

class Homepage extends Component {
  render() {
    return (
      <>
        {/* <Slider /> */}
        <Products />
      </>
    );
  }
}

export default Homepage;
