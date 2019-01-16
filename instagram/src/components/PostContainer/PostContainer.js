import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {thumbnailUrl, username, imageUrl, likes, timestamp, comments} = this.props.post;
    return(
      <div className='PostContainer'>
        <div className='postHeader'>
          <img className='thumbNail' src={thumbnailUrl} alt='user thumbnail' />
          <h4>{username}</h4>
        </div>
        <img className='imageUrl' src={imageUrl} alt='post'/>
        <div className='socialBar'>
          <div className='icons'>
            <i class="far fa-heart fa-lg"></i>
            <i class="far fa-comment fa-lg"></i>
          </div>
          <span className='likes'>{likes} likes</span>
        </div>
        <CommentSection 
          comments={comments}
          timestamp={timestamp} 
        />
      </div>
    )
  }
}

export default PostContainer;