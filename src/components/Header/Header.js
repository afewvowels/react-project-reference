import React, { Component } from 'react';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className='navLeft'>
            <a href=''>
              <img className='logo' src='' alt='' />
            </a>
          </div>
          <div className='navRight'>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
