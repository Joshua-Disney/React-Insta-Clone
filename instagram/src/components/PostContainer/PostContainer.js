import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.post.likes,
      isLiked: false
    }
  }



  toggleLike = event => {
    event.preventDefault();
    this.setState(({isLiked, likes}) => {
      return {
        likes: isLiked ? likes - 1: likes + 1,
        isLiked: !isLiked
      }
    });
  };

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log(this.state)
    const {thumbnailUrl, username, imageUrl, timestamp, comments} = this.props.post;
    return(
      <div className='PostContainer'>
        <div className='postHeader'>
          <img className='thumbNail' src={thumbnailUrl} alt='user thumbnail' />
          <h4>{username}</h4>
        </div>
        <img className='imageUrl' src={imageUrl} alt='post'/>
        <div className='socialBar'>
          <div className='icons'>
            <i
              onClick={this.toggleLike}
              class='far fa-heart fa-lg'
              value={this.state.likes}
              type='number'
              name='likes'
              placeholder='heart'
              onChange={this.handleChanges}>
            </i>
            <i class='far fa-comment fa-lg'></i>
          </div>
          <span className='likes'>{this.state.likes} likes</span>
        </div>
        <CommentSection
          comments={comments}
          timestamp={timestamp} 
        />
      </div>
    )
  }
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
}

export default PostContainer;