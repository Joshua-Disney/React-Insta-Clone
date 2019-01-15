import React from 'react';
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
        <input type='text' placeholder='Add a comment...' />
      </div>
    )
  }
}

export default CommentSection;