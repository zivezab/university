import React, { Component } from "react";
import { VscStarEmpty, VscStarFull } from "react-icons/vsc";
import "./FavoriteButton.css";

class FavoriteButton extends Component {
  render() {
    return this.props.isFavorite ? (
      <VscStarFull
        className="fav-btn float-right"
        size="20"
        onClick={this.props.removeFavorite}
      />
    ) : (
      <VscStarEmpty
        className="fav-btn float-right"
        size="20"
        onClick={this.props.addFavorite}
      />
    );
  }
}

FavoriteButton.defaultProps = {
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: false,
};

export default FavoriteButton;
