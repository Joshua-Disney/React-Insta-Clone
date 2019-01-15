import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='SearchBar'>
        <div>
          <i className='instaImage' class='fab fa-instagram'></i>
          <img className='instaLogo' src='https://fontmeme.com/images/instagram-new-logo.png' alt='Instagram logo' />
        </div>
        <div>
          <input type='text' placeholder=<i class="fas fa-search"></i>'search'></input>
        </div>
        <div>
          <i class="far fa-compass"></i>
          <i class="far fa-heart"></i>
          <i class="far fa-user"></i>
        </div>
      </div>
    )
  }
}

export default SearchBar;