import React from 'react';
import { Container, Jumbotron } from 'reactstrap';

class FooterComponent extends React.Component {
  state = {};
  render() {
    return (
      <footer class='expand-lg bg-dark pb-5'>
        <div class='container'>
          <div class='col'>
            <img class='m-2' src='icons/icons8-facebook-old-50.png' alt='Facebook' width='25' />
            <img class='m-2' src='icons/icons8-instagram-old-50.png' alt='Facebook' width='25' />
            <img class='m-2' src='icons/icons8-twitter-squared-50.png' alt='Facebook' width='25' />
            <img class='m-2' src='icons/icons8-video-50.png' alt='Facebook' width='25' />
          </div>
          <div class='row'>
            <div class='col'>
              <nav class='nav flex-column'>
                <a class='nav-link active' href='#'>
                  Audio and Subtitles
                </a>
                <a class='nav-link' href='#'>
                  Media Center
                </a>
                <a class='nav-link' href='#'>
                  Privacy
                </a>
                <a class='nav-link' href='#'>
                  Contact Us
                </a>
              </nav>
              <input name='button' id='footerBtn' class='btn btn-primary' type='button' value='Service Code' />
            </div>
            <div class='col'>
              <nav class='nav flex-column'>
                <a class='nav-link active' href='#'>
                  Audio Description
                </a>
                <a class='nav-link' href='#'>
                  Investor Relation
                </a>
                <a class='nav-link' href='#'>
                  Legal Notice
                </a>
              </nav>
            </div>
            <div class='col'>
              <nav class='nav flex-column'>
                <a class='nav-link active' href='#'>
                  Help Center
                </a>
                <a class='nav-link' href='#'>
                  Jobs
                </a>
                <a class='nav-link' href='#'>
                  Cookie Preferences
                </a>
              </nav>
            </div>
            <div class='col'>
              <nav class='nav flex-column'>
                <a class='nav-link active' href='#'>
                  Gift Cards
                </a>
                <a class='nav-link' href='#'>
                  Terms of use
                </a>
                <a class='nav-link' href='#'>
                  Corporate Information
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
