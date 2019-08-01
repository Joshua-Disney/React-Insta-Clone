import React from "react";
import styled from "styled-components";

import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "../PostContainer/PostContainer";

const PostsContainer = styled.div`
  max-width: 650px;
  margin: 0 auto;
`;

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
      posts: ""
    };
  }

  componentDidMount() {
    this.setState({ dummyData });
  }

  filterPosts = () => {
    if (this.state.posts) {
      return this.state.dummyData.filter(posts => {
        return posts.username.includes(this.state.posts);
      });
    }
    return this.state.dummyData;
  };

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  logOut = event => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  render() {
    const filteredPosts = this.filterPosts();
    return (
      <div className="PostsPage">
        <SearchBar
          posts={this.state.posts}
          handleChanges={this.handleChanges}
        />
        <PostsContainer>
          {filteredPosts &&
            filteredPosts.map(post => {
              return <PostContainer key={post.timestamp} post={post} />;
            })}
          <form onSubmit={this.logOut}>
            <button onClick={this.handleChanges}>Log Out</button>
          </form>
        </PostsContainer>
      </div>
    );
  }
}

export default PostsPage;
