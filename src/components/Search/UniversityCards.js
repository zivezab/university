import React, {Component} from 'react';
import {
  Card, CardColumns, OverlayTrigger, Tooltip,
} from 'react-bootstrap';
import Flag from 'react-world-flags';
import FavoriteButton from '../FavoriteButton';

class UniversityCards extends Component {
  render() {
    if (this.props.showError) {
      return <>Error, please try again.</>;
    }
    if (
      Array.isArray(this.props.universityList) &&
      this.props.universityList.length === 0
    ) {
      return <>No result.</>;
    }
    const cards = this.props.universityList.map((data, index) => {
      if (data) {
        const isFavorite = this.props.favoriteList.findIndex((x) => x.name === data.name) > -1;
        return (
          <Card key={index}>
            <Card.Header>
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip-disabled">{data.country}</Tooltip>
                }
              >
                <span className="d-inline-block">
                  <Flag code={data.alpha_two_code} height="20px" />
                </span>
              </OverlayTrigger>
              <FavoriteButton
                isFavorite={isFavorite}
                addFavorite={() => this.props.addFavorite(data)}
                removeFavorite={() => this.props.removeFavorite(data)}
              />
            </Card.Header>
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                <a
                  href={data.web_pages}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.web_pages}
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      }
      return (
        <Card key={index}>
          <Card.Body>No data.</Card.Body>
        </Card>
      );
    });
    return <CardColumns>{cards}</CardColumns>;
  }
}

UniversityCards.defaultProps = {
  addFavorite: () => {},
  removeFavorite: () => {},
  favoriteList: [],
  universityList: [],
  showError: false,
};

export default UniversityCards;
