import React from "react";

import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";

import "../../../styles/shopping-cart.css";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts1 = useSelector((state) => state.order);
  console.log("cartProducts1", cartProducts1);
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts1?.orderItems?.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartProducts1?.orderItems?.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>{totalAmount} VND</span>
          </h6>
          <button>
            <Link to="/checkout" onClick={toggleCart}>
              Checkout
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
