import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({ // 스토어의 상태를 파라미터로 받아오는 함수. Component에 넣어줄 props 값을 반환한다.
  posts: state.post.items,
  newPost: state.post.item
});

//mapDispatchToProps => dispatch를 파라미터로 받아오는 함수로서 component에 넣어줄 액션값을 반환한다.

export default connect(mapStateToProps, { fetchPosts })(Posts);
