import React from 'react';
import moment from 'moment';
import Comment from '../Comment/Comment';
import PropTypes from 'prop-types';
import './CommentSection.css';

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
    console.log(this.commentList);
    return(
      <div className='CommentSection'>
        {
          this.state.commentList.map((comment) => {
            return <Comment 
            username={comment.username}
            text={comment.text}
          />
          })
        }
        <h5>{moment(this.props.timestamp, 'MMMDD YYYY HH:mm:ss a', 'en').fromNow()}</h5>
        <hr />
        <form onSubmit={this.addNewComment}>
          <input
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
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  addNewComment: PropTypes.func.isRequired,
  handleChanges: PropTypes.func.isRequired
}

export default CommentSection;