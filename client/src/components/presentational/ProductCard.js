import React from "react";
import "./ProductCards.css";
import PropTypes from "prop-types";
const ProductCard = props => {
  const { name, price } = props.product;
  console.log(name);
  return (
    <div>
      <div className="product-card container">
        <div>
          <p className="product-card label">{name}</p>
          <p className="product-card label">$ {price}</p>
        </div>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};
export default ProductCard;
