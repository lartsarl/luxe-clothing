import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_TqtmbQybYsnGEbhjRC4Uyagp0098wB9HPV";

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment successful!");
        }).catch(error => {
            console.log("Payment error: ", JSON.parse(error));
            alert("There was an issue, please use provided card.");
        });
    }

    return (
        <StripeCheckout
            ComponentClass="div"
            label='Pay Now'
            name='Luxe Clothing'
            billingAddress
            shippingAddress
            image='https://i.postimg.cc/QNcLmk8h/Luxe-Logo.png'
            description={`Your total price is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}>
        </StripeCheckout>
    );
}

export default StripeCheckoutButton;