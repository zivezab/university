import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import UniversityCards from './../UniversityCards';
import exportJSONFile from './../ExportJSON';

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteList: [],
    };
  }

  componentDidMount() {
    const localFavorites = JSON.parse(localStorage.getItem('Favorites'));
    if (localFavorites && Array.isArray(localFavorites)) {
      this.setState({favoriteList: localFavorites});
    }
  }

  render() {
    return (
      <>
        <UniversityCards
          universityList={this.state.favoriteList}
          favoriteList={this.state.favoriteList}
        />
        {this.state.favoriteList.length > 0 && (
          <Button
            className='float-right'
            variant='success'
            onClick={() => {
              exportJSONFile(this.state.favoriteList);
            }}
          >
            Export
          </Button>
        )}
      </>
    );
  }
}

Favorite.defaultProps = {
  exportData: () => {},
};
export default Favorite;
