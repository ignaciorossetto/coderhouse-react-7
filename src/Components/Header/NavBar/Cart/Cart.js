import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Cart.css";

function Cart() {



  return (
    <div id="carritoAnchor">
      <a href="#">
          <ShoppingBasketIcon/>
      </a>
      <p className="carritoCount">5</p>
    </div>
  );
}

export default Cart;
