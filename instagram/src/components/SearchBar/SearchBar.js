import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return(
    <div className='navBar'>
      <div className='logos'>
        <i className='fab fa-instagram  fa-2x'></i>
        <img className='instaLogo' src='https://fontmeme.com/images/instagram-new-logo.png' alt='Instagram logo' />
      </div>
      <div className='search'>
        <span className='fa fa-search'></span>
        <input
          onChange={props.handleChanges}
          value={props.posts}
          name='posts'
          placeholder='Search'/>
      </div>
      <div className='symbols'>
        <i className='far fa-compass fa-lg'></i>
        <i className='far fa-heart fa-lg'></i>
        <i className='far fa-user fa-lg'></i>
      </div>
    </div>
  )
}

export default SearchBar;