import React from 'react';
import moment from 'moment';
import Comment from '../Comment/Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return(
      <div className='CommentSection'>
        {
          this.props.comments.map((comment) => {
            return <Comment 
            username={comment.username}
            text={comment.text}
          />
          })
        }
        <h5>{moment(this.props.timestamp, 'MMMDD YYYY HH:mm:ss a', 'en').fromNow()}</h5>
        <hr />
        <input type='text' placeholder='Add a comment...' />
      </div>
    )
  }
}

export default CommentSection;