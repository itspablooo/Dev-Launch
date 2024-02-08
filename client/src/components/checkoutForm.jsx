import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class CheckoutForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault();

    const { token } = await this.props.stripe.createToken();

    
    fetch('http://localhost:3001/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: 1000, 
        currency: 'USD',
        token: token.id,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardElement />
        <button type="submit">Pay</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);