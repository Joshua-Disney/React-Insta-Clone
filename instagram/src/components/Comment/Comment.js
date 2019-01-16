import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = (props) => {
  return(
    <div className='Comment'>
      <h4>{props.username}</h4>
      <br />
      <p>{props.text}</p>
    </div>
  )
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
}

export default Comment;