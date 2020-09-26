import React, {Component} from 'react';
import {Card, CardColumns, OverlayTrigger, Tooltip} from 'react-bootstrap';
import Flag from 'react-world-flags';
import FavoriteButton from './FavoriteButton';

const FAVORITE_ALLOWED_KEYS = [
  'alpha_two_code',
  'country',
  'name',
  'web_pages',
];

class UniversityCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteList: [],
    };
  }

  componentDidMount() {
    const localFavorites = JSON.parse(localStorage.getItem('Favorites'));
    if (localFavorites && Array.isArray(localFavorites)) {
      this.restoreFavorite(localFavorites);
    }
  }

  filterFavoriteObj(raw) {
    return Object.keys(raw)
        .filter((key) => FAVORITE_ALLOWED_KEYS.includes(key))
        .reduce((obj, key) => {
          return {
            ...obj,
            [key]: raw[key],
          };
        }, {});
  }

  removeFavorite(favorite) {
    const favList = [...this.state.favoriteList];
    const newFavList = favList.filter((x) => x.name !== favorite.name);
    this.setState({favoriteList: newFavList});
    localStorage.setItem('Favorites', JSON.stringify(newFavList));
  }

  addFavorite(favorite) {
    const favList = [...this.state.favoriteList];
    favList.push(this.filterFavoriteObj(favorite));
    this.setState({favoriteList: favList});
    localStorage.setItem('Favorites', JSON.stringify(favList));
  }

  restoreFavorite(favorites) {
    this.setState({favoriteList: favorites});
  }

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
        const isFavorite =
          this.state.favoriteList.findIndex((x) => x.name === data.name) > -1;
        return (
          <Card key={index}>
            <Card.Header>
              <OverlayTrigger
                overlay={
                  <Tooltip id='tooltip-disabled'>{data.country}</Tooltip>
                }
              >
                <span className='d-inline-block'>
                  <Flag code={data.alpha_two_code} height='20px' />
                </span>
              </OverlayTrigger>
              <FavoriteButton
                isFavorite={isFavorite}
                addFavorite={() => this.addFavorite(data)}
                removeFavorite={() => this.removeFavorite(data)}
              />
            </Card.Header>
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                <a
                  href={data.web_pages}
                  target='_blank'
                  rel='noopener noreferrer'
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
  universityList: [],
  showError: false,
};

export default UniversityCards;
