import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Feedback Collection App"
        description="$5 for 5 Emails"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY} //Public key
      >
        <button className="btn">Add Credits </button>
      </StripeCheckout>
    );
  }
}
export default connect(null, actions)(Payments);
