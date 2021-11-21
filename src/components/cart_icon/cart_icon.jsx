import React from "react";
import { connect } from 'react-redux';

import { toggleCartHidden } from "../../redux/cart/cart_actions";
import { selectCarItemsCount } from "../../redux/cart/cart_selectors";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart_icon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount: selectCarItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);