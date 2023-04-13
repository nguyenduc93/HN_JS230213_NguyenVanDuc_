import React from "react";

function ShopCart(props) {
  const { cartItems, setCartItems } = props;

  const handleDecreaseQty = (index) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity -= 1;
    setCartItems(updatedItems);
  };

  const handleIncreaseQty = (index) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity += 1;
    setCartItems(updatedItems);
  };

  const totalPrice = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + parseFloat(currentItem.price) * currentItem.quantity;
  }, 0);

  const totalQuantity = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.quantity;
  }, 0);

  const handleDelete = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
  };

  const handleDeleteAll = () => {
    setCartItems([]);
  };

  return (
    <div className="cart">
      <h2>Giỏ Hàng</h2>
      {cartItems.length === 0 && <p>Chưa có sản phẩm nào</p>}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <div className="cart-item">
              <div className="cart-item-content">
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>
              </div>
              <div className="cart-item-quantity">
                <button onClick={() => handleDecreaseQty(index)}>-</button>
                {item.quantity}
                <button onClick={() => handleIncreaseQty(index)}>+</button>
              </div>
              <button
                className="cart-item-delete"
                onClick={() => handleDelete(index)}
              >
                Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <button className="cart-clear-all" onClick={handleDeleteAll}>
          Xóa tất cả
        </button>
      )}
      <div className="cart-summary">
        <p>Tổng số lượng: {totalQuantity}</p>
        <p>Tổng tiền: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ShopCart;
