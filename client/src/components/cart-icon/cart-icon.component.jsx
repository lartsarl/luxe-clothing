import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/Shopping-Bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux'
import { toogleCartHidden } from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toogleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toogleCartHidden}>
        <ShoppingIcon className='shopping-icon'></ShoppingIcon>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);