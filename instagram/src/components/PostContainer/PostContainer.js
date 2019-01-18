import React from 'react';
import styled from 'styled-components';

import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

import './PostContainer.css';

const MainContainer = styled.div`
  border: solid .5px lightgray;
  margin: 60px 0;
  background-color: white;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;

const Thumbnail = styled.img`
  border-radius: 100%;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const PostHeading = styled.h4`
  font-weight: bold;
`;

const ImageUrl = styled.img`
  width: 100%;
`;

const SocialBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
`;

const Icons = styled.div`
  display: flex;
  font-size: 2rem;
  margin-bottom: 15px;
`;

const Likes = styled.span`
  font-weight: bold;
`;

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
    const {thumbnailUrl, username, imageUrl, timestamp, comments} = this.props.post;
    return(
      <MainContainer>
        <PostHeader>
          <Thumbnail src={thumbnailUrl} alt='user thumbnail' />
          <PostHeading>{username}</PostHeading>
        </PostHeader>
        <ImageUrl src={imageUrl} alt='post'/>
        <SocialBar>
          <Icons>
            <i
              onClick={this.toggleLike}
              className='far fa-heart fa-lg'
              value={this.state.likes}
              type='number'
              name='likes'
              placeholder='heart'
              onChange={this.handleChanges}>
            </i>
            <i className='far fa-comment fa-lg'></i>
          </Icons>
          <Likes>{this.state.likes} likes</Likes>
        </SocialBar>
        <CommentSection
          comments={comments}
          timestamp={timestamp} 
        />
      </MainContainer>
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