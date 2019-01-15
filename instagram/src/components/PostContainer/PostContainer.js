import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='PostContainer'>
        <CommentSection 
          comments={this.props.post.comments} 
        />
      </div>
    )
  }
}

export default PostContainer;