import React, { Component } from 'react';

import axios from 'axios';
import classes from './FullPost.module.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {
    if (
      this.props.match.params.id > -1 &&
      (!this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== this.props.match.params.id))
    ) {
      axios
        .get('/posts/' + this.props.match.params.id)
        .then((result) => this.setState({ loadedPost: result.data }));
    }
  }

  deletePostHandler = () => {
    axios.delete('/posts/' + this.props.match.params.id);
  };

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (this.props.match.params.id > -1) {
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
