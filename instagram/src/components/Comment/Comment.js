import React from 'react';
import './Comment.css';

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='Comment'>
        <h4>{this.props.username}</h4>
        <br />
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default Comment;