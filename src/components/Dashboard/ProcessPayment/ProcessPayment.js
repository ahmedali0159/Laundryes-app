import React from 'react';
import {Elements, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const ProcessPayment = () => {
    const stripePromise = loadStripe('pk_test_51IeNIBHFHFRi8lm47vihElVlSH3bPDIlgXeHuFlMF');
    return (
        <Elements stripe={stripePromise}>
      <CardElement
  options={{
    style: {
      base: {
        fontSize: '20px',
        color: '#424770',
        '::placeholder': {
          color: '#0071BC',
        },
      },
      invalid: {
    
        color: '#9e2146',
      },
    },
  }}
  
/>
    </Elements>
    );
};

export default ProcessPayment;