import React, {Component} from 'react';
import {FaUniversity} from 'react-icons/fa';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='horizontal-center vertical-center'>
        <a href='/search'>
          <FaUniversity size='200' />
        </a>
      </div>
    );
  }
}

export default Home;
