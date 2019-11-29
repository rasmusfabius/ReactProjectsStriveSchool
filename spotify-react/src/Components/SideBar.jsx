import React from 'react';
import logo from './img/SpotifyLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const homeIcon = <FontAwesomeIcon icon={faHome} />;
const searchIcon = <FontAwesomeIcon icon={faSearch} />;
const libaryIcon = <FontAwesomeIcon icon={faBookOpen} />;

class Sidebar extends React.Component {
  render() {
    return (
      <div className='col-2'>
        <nav className='navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between'>
          <div className='nav-container'>
            <a className='navbar-brand' href='index.html'>
              <img src={logo} alt='Spotify_Logo' width='131' height='40' />
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNavAltMarkup'
              aria-controls='navbarNavAltMarkup'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
              <div className='navbar-nav'>
                <ul>
                  <li>
                    <a className='nav-item nav-link' href='#'>
                      <span>{homeIcon}</span>&nbsp; Home
                    </a>
                  </li>
                  <li>
                    <a className='nav-item nav-link' href='#'>
                      <span>{searchIcon}</span>&nbsp; Search
                    </a>
                  </li>
                  <li>
                    <a className='nav-item nav-link' href='#'>
                      <span>{libaryIcon}</span>&nbsp; Your Library
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className=' nav-btn'>
            <button className='btn signup-btn' type='button'>
              Sign Up
            </button>
            <button className='btn login-btn' type='button'>
              Login
            </button>
            <a href='#'>Cookie Policy</a> |<a href='#'> Privacy</a>
          </div>
        </nav>
      </div>
    );
  }
}
export default Sidebar;
