import React from 'react';
import styled from 'styled-components';

import './SearchBar.css';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  max-width: 1000px;
  width: 100%;
  padding: 20px 0;
  margin: 0 auto;
  border: solid 1px lightgray;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const Logos = styled.div`
  font-size: 1.6rem;
  width: 33%;
`;

const InstaLogo = styled.img`
  width: 120px;
`;

const SearchSection = styled.div`
  position: relative;
  color: #aaa;
  font-size: 1.6rem;
`;

const SearchInput = styled.input`
  width: 250px;
  height: 32px;
  background: #fcfcfc;
  border: 1px solid #aaa;
  border-radius: 5px;
  box-shadow: 0 0 3px #ccc, 0 10px 15px #ebebeb inset;
  text-indent: 32px;
`;

const Symbols = styled.div`
  font-size: 1.6rem;
  width: 33%;
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
`;

const SearchBar = (props) => {
  return(
    <NavBar>
      <Logos>
        <i className='fab fa-instagram  fa-2x'></i>
        <InstaLogo src='https://fontmeme.com/images/instagram-new-logo.png' alt='Instagram logo' />
      </Logos>
      <SearchSection>
        <span className='fa fa-search'></span>
        <SearchInput
          onChange={props.handleChanges}
          value={props.posts}
          name='posts'
          placeholder='Search'/>
      </SearchSection>
      <Symbols>
        <i className='far fa-compass fa-lg'></i>
        <i className='far fa-heart fa-lg'></i>
        <i className='far fa-user fa-lg'></i>
      </Symbols>
    </NavBar>
  )
}

export default SearchBar;