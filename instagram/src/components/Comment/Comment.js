import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const EachComment = styled.div`
  display: flex;
  align-items: baseline;
  padding-left: 10px;
`;

const User = styled.h4`
  padding-right: 10px;
`;

const Comment = (props) => {
  return(
    <EachComment>
      <User>{props.username}</User>
      <br />
      <p>{props.text}</p>
    </EachComment>
  )
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
}

export default Comment;