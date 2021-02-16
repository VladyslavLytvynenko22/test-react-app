import { NavLink, Route } from 'react-router-dom';
import React, { Component } from 'react';

import FullPost from './FullPost/FullPost';
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
                <NavLink to='/' exact activeClassName={classes.active}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true',
                  }}
                  activeClassName={classes.active}>
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Route path='/' exact component={Posts} />
        <Route path='/new-post' exact component={NewPost} />
        <Route path='/:id' exact component={FullPost} />
      </div>
    );
  }
}

export default Blog;
