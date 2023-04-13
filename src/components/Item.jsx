import React, { useState } from "react";

function Item(props) {
  const { img, name, price, handleAddToCart } = props;
  const [count, setCount] = useState(0);

  const handleInterest = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    setCount(count + 1);
    handleAddToCart({ name, price, quantity: count + 1 });
  };

  return (
    <div>
      <div className="element">
        <img src={img} alt="Photo" />
        <div className="priceAndName">
          <p id="name">{name}</p>
          <p id="price">${price}</p>
        </div>
        <div className="InterestAndAdd">
          <button className="btn-Interest" id="sell" onClick={handleInterest}>
            Interest
          </button>
          <span id="amount">{count}</span>
          <button className="btn-Add" id="buy" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
