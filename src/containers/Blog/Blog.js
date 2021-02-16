import { Link, Route } from 'react-router-dom';
import React, { Component } from 'react';

import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import classes from './Blog.module.css';

class Blog extends Component {
  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true',
                  }}>
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path='/' exact component={Posts} />
        <Route path='/new-post' exact component={NewPost} />
      </div>
    );
  }
}

export default Blog;
