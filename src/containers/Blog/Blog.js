import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.module.css';

class Blog extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((posts) => this.setState({ posts: posts.data }));
  }

  render() {
    const posts = this.state.posts.map((post) => (
      <Post key={post.id} title={post.title} />
    ));
    return (
      <div>
        <section className={classes.Posts}>{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
