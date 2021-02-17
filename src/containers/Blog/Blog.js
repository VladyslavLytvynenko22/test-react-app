import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import Posts from './Posts/Posts';
import asyncComponent from './../../hoc/asyncComponent';
import classes from './Blog.module.css';

const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));

class Blog extends Component {
  state = {
    auth: true,
  };
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
        <Switch>
          {this.state.auth ? (
            <Route path='/new-post' component={AsyncNewPost} />
          ) : null}
          <Route path='/' component={Posts} />
          <Redirect from='/posts' to='/' />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
