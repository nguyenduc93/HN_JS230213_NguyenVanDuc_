import React, { useState } from "react";
import Item from "./Item";
import Headerr from "./Headerr";
import ShopCart from "./ShopCart";

function SpendMoney(props) {
  const [cartItems, setCartItems] = useState([]);
  const [toSpend, setToSpend] = useState(100000000);

  const handleAddToCart = (newItem) => {
    const existingItem = cartItems.find((item) => item.name === newItem.name);

    if (existingItem) {
      const updatedItems = cartItems.map((item) => {
        if (item.name === newItem.name) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
    }

    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    setToSpend(100000000 - totalPrice);
  };

  const handleRemoveFromCart = (name) => {
    const existingItem = cartItems.find((item) => item.name === name);

    if (existingItem) {
      const updatedItems = cartItems.map((item) => {
        if (item.name === name && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedItems);


      const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      setToSpend(123456789 - totalPrice);
    }
  };

  return (
    <div>
      <Headerr toSpend={toSpend} />
      <div className="container">
        <Item
          img={
            "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg"
          }
          name={"Cola"}
          price={"6"}
          handleAddToCart={handleAddToCart}
        />
        <Item
          img={
            "https://www.coca-cola.com.tr/content/dam/one/tr/tr/product-images/fanta-portakal_product_image.png"
          }
          name={"Fanta"}
          price={"5"}
          handleAddToCart={handleAddToCart}
        />
        <Item
          img={"http://esenlik.com.tr//images/prod/5704.jpg"}
          name={"Ayran"}
          price={"4"}
          handleAddToCart={handleAddToCart}
        />
        <Item
          img={
            "https://evidea.akinoncdn.com/products/2021/08/05/62421/e5bda9ce-91bf-453a-96e1-acea983efb2a.jpg"
          }
          name={"Cay"}
          price={"3"}
          handleAddToCart={handleAddToCart}
        />
        <Item
          img={
            "https://media.istockphoto.com/photos/turkish-coffee-foamy-picture-id510413268?k=20&m=510413268&s=612x612&w=0&h=llBhDOUbNHaQXc-ch7UQ_OIWkmJAJUzaf6oZavKUrmQ="
          }
          name={"Kahve"}
          price={"10"}
          handleAddToCart={handleAddToCart}
        />
        <Item
          img={"http://esenlik.com.tr//images/prod/2928.jpg"}
          name={"Soda"}
          price={"4"}
          handleAddToCart={handleAddToCart}
        />
        <Item
          img={
            "https://productimages.hepsiburada.net/s/37/375/10567819821106.jpg"
          }
          name={"Bisiklet"}
          price={"1000"}
          handleAddToCart={handleAddToCart}
        />
        <Item
          img={
            "https://www.dogansaatcilik.com.tr/ProductImages/118687/big/seiko-ssc719p-erkek-kol-saati__0296960735052182.jpg"
          }
          name={"Lüx Kol Saati"}
          price={"25000"}
          handleAddToCart={handleAddToCart}
        />
        <Item
          img={
            "https://productimages.hepsiburada.net/s/34/375/10460429320242.jpg"
          }
          name={"Bugatti Chiron"}
          price={"2500000"}
          handleAddToCart={handleAddToCart}
        />
        <Item
          img={
            "https://img3.aksam.com.tr/imgsdisk/2020/10/31/t25_en-kolay-iskender-sosu-ta-744.jpg"
          }
          name={"Iskender"}
          price={"50"}
          handleAddToCart={handleAddToCart}
        />
        <Item
          img={
            "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg"
          }
          name={"Lahmacun"}
          price={"12"}
          handleAddToCart={handleAddToCart}
        />
        <Item
          img={
            "https://foto.haberler.com/haber/2020/12/07/israil-de-4-odali-malikane-250-milyon-d..ồlarda-13784975_amp.jpg"
          }
          name={"Malikane"}
          price={"2500000000"}
          handleAddToCart={handleAddToCart}
        />
        <Item
          img={
            "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exterıor.jpg"
          }
          name={"Helicopter"}
          price={"28750000"}
          handleAddToCart={handleAddToCart}
        />
        <Item
          img={"https://d.neoldu.com/news/57966.jpg"}
          name={"Luxury Yatch"}
          price={"100000000"}
          handleAddToCart={handleAddToCart}
        />
      </div>

      <ShopCart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

export default SpendMoney;
