import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Post from '../../../components/Post/Post';
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
    //this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Link to={'/' + post.id} key={post.id}>
            <Post
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)}
            />
          </Link>
        );
      });
    }

    return <section className={classes.Posts}>{posts}</section>;
  }
}
