import axios from 'axios';
import React, { Component } from 'react';

import classes from './FullPost.module.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidUpdate() {
    if (
      this.props.id > -1 &&
      (!this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id))
    ) {
      axios
        .get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
        .then((result) => this.setState({ loadedPost: result.data }));
    }
  }

  deletePostHandler = () => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id);
  };

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (this.props.id > -1) {
      post = <p style={{ textAlign: 'center' }}>Loading...</p>;
    }

    if (this.state.loadedPost) {
      post = (
        <div className={classes.FullPost}>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className={classes.Edit}>
            <button onClick={this.deletePostHandler} className={classes.Delete}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
