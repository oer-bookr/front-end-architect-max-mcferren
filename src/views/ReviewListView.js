import React, { Component } from "react";
import { connect } from "react-redux";

import ReviewList from "../components/ReviewList/ReviewList";
import { getReviews } from "../store/actions/reviewListActions";

class ReviewListView extends Component {
  componentDidMount() {
    const token = localStorage.getItem("jwt");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };

    if (this.props.reviews.length === 0) {
      this.props.getReviews(requestOptions);
    }
  }
  render() {
    // if (window.localStorage.getItem("username") !== "the2bo5") {
    //   this.props.history.push("/login");
    // }
    return (
      <ReviewList
        {...this.props}
        reviews={this.props.reviews}
        books={this.props.books}
      />
    );
  }
}

const mapStateToProps = state => ({
  books: state.booksReducer.books,
  reviews: state.reviewsReducer.reviews
});

export default connect(
  mapStateToProps,
  { getReviews }
)(ReviewListView);
