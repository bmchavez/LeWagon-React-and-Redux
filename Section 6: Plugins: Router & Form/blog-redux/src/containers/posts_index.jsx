import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <div className='post-item'>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className='first-row'>
          <h3>Blog</h3>
          <Link
            className='btn'
            className='btn btn-primary btn-cta'
            to='/posts/new'
          >
            Let's write a post!
          </Link>
        </div>
        {this.renderPosts()}
      </div>
    );
  }
}

// Connect component to redux to access the post
function mapReduxStateToProps(reduxState) {
  return {
    posts: reduxState.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(PostsIndex);
