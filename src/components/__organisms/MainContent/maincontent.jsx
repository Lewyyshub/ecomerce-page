import React, { useState } from "react";
import Header from "../../__atoms/Header/header";
import Content from "../../__molecules/Content/content";

function Main() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(
        (item) => item.productName === product.productName
      );
      return existingProduct
        ? prevItems.map((item) =>
            item.productName === product.productName
              ? { ...item, count: item.count + product.count }
              : item
          )
        : [...prevItems, product];
    });
  };

  return (
    <div className="container mx-auto flex flex-col p-10">
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <Content addToCart={addToCart} />
    </div>
  );
}

export default Main;
