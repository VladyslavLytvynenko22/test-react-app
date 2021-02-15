import axios from 'axios';
import React, { Component } from 'react';

import classes from './FullPost.module.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.id === nextProps.id) return true;
  }

  componentWillUpdate() {
    if (this.props.id > -1) {
      axios
        .get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
        .then((result) => this.setState({ loadedPost: result.data }));
    }
  }

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (this.props.id > -1 && this.state.loadedPost) {
      post = (
        <div className={classes.FullPost}>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className={classes.Edit}>
            <button className={classes.Delete}>Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
