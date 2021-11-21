import React from "react";
import { connect } from 'react-redux';

import CustomButton from "../custom_button/custom_button";
import CartItem from "../cart_item/cart_item";
import { selectCartItems } from "../../redux/cart/cart_selectors";

import './cart_dropdown.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});


export default connect(mapStateToProps)(CartDropdown);