import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Comment from '../Comment/Comment';
import PropTypes from 'prop-types';


const CommentInput = styled.input`
  width: 98%;
  padding: 10px;
  border: none;
`;

const TimeStamp = styled.h5`
  text-align: left;
  padding-left: 15px;
  font-size: 1.4rem;
  color: gray;
`;

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: this.props.comments,
      text: ''
    }
  }

  addNewComment = event => {
    event.preventDefault();
    this.setState({
      commentList: [
        ...this.state.commentList,
        { username: 'Disney', text: this.state.text }
      ],
      text: ''
    });
  };

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() { 
    return(
      <div className='CommentSection'>
        {
          this.state.commentList.map((comment) => {
            return <Comment 
            key={comment.text}
            username={comment.username}
            text={comment.text}
          />
          })
        }
        <TimeStamp>{moment(this.props.timestamp, 'MMMDD YYYY HH:mm:ss a', 'en').fromNow()}</TimeStamp>
        <hr />
        <form onSubmit={this.addNewComment}>
          <CommentInput
            value={this.state.text}
            type='text'
            name='text'
            placeholder='Add a comment...'
            onChange={this.handleChanges}
            autoComplete='off'
          />
        </form>
      </div>
    )
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CommentSection;