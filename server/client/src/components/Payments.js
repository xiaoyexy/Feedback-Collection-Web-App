import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Feedback Collection App"
        description="$5 for 5 Emails"
        amount={500}
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY} //Public key
      >
        <button className="btn">Add Credits </button>
      </StripeCheckout>
    );
  }
}
export default Payments;
