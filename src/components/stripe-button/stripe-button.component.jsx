import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_TqtmbQybYsnGEbhjRC4Uyagp0098wB9HPV";

    const onToken = token => {
        console.log(token);
        alert("Payment successful");
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