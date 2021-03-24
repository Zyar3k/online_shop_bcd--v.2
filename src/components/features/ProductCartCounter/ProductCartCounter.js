import React from "react";

class ProductCartCounter extends React.Component {
  render() {
    return (
      <div>
        <div>
          <button>-</button>
          <div>1</div>
          <button>+</button>
        </div>
      </div>
    );
  }
}

export default ProductCartCounter;
