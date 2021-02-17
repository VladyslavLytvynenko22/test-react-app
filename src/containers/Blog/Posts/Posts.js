import React, { Component } from 'react';

import FullPost from './../FullPost/FullPost';
import Post from '../../../components/Post/Post';
import { Route } from 'react-router-dom';
import axios from './../../../axios';
import classes from './Posts.module.css';

export default class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get('/posts')
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => ({
          ...post,
          author: 'Vlad',
        }));
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        //this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.props.history.push({ pathname: '/' + id });
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }
    let path = this.props.match.url;
    if (path.slice(-1) !== '/' && path.slice(-1) !== '\\') {
      path = path + '/';
    }
    path = path + ':id';
    return (
      <div>
        <section className={classes.Posts}>{posts}</section>
        <Route path={path} exact component={FullPost} />
      </div>
    );
  }
}
