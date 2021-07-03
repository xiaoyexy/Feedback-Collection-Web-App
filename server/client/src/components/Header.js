import React, { Component } from "react";
import { connect } from "react-redux";
// <a> to different html pages
// <Link> to different route rendered by React Routers
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderConetnt() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google </a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="new-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Feedback Collection App
          </Link>
          <ul className="right">{this.renderConetnt()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

// assign "auth" (state) to Header class as props
export default connect(mapStateToProps)(Header);
