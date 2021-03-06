import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"

import Nav from "../components/Nav";

class NavView extends Component {
  handleSignout = e => {
    e.preventDefault();
    localStorage.removeItem("jwt");

    this.props.history.push("/login");
  };
  render() {
    return (
      <Nav
        handleSignout={this.handleSignout}
        isAuthenticated={this.props.isAuthenticated}
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.loginReducer.isAuthenticated
});
export default withRouter(connect(
  mapStateToProps,
  {}
)(NavView));
