import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {MenuItems} from './MenuItems';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  render() {
    return (
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>{this.props.appName}</h1>
        <div
          className='menu-icon'
          onClick={() => {
            this.setState({clicked: !this.state.clicked});
          }}
        >
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.className} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
