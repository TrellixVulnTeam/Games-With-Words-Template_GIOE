/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import * as b from 'react-bootstrap';
import s from './Header.css';
import l from './Layout.css';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap'

class Header extends React.Component {

  constructor(){
    super();
    this.state = {};
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  getLocation() {
    return (window.location.pathname.toString()).split('/')[1];
  }

  home() {
    if ((window.location.pathname.toString()).split('/')[1] === '') {
      return true;
    }
    else {
      return false;
    }
  }

  updateDimensions() {
    if (window.innerWidth < 768 || this.home()) {
      this.setState({mobile: true});
    }
    else {
      this.setState({mobile: false});
    }
  }

  render() {
    if (this.home()) {
      return (
        <header>
          <Link to="/paths"><div className={s.landing} style={{background: 'url(/../../img/logo_button-min.png) no-repeat center center', '-webkit-background-size': 'cover', '-moz-background-size': 'cover', '-o-background-size': 'cover', backgroundSize: 'cover', width: '100%', height: '80vh'}}></div></Link>
        <b.Image style={{display: 'none'}} src="/../../favicon.ico" onLoad={this.props.onLoad} onError={this.props.onError} />
        </header>
      );
    }
    else if (this.state.mobile && !this.home()) {
      return (
        <header style={window.innerWidth < 278 ? {minHeight: '105px'} : null} id="header" ref={node => (this.root = node)} className={s.gray} >
          <b.Navbar.Brand>
            <b.Image src="/../../img/gww_logo.png" onLoad={this.props.onLoad} onError={this.props.onError} responsive style={{padding: '3px', marginTop: '2px'}}/>
          </b.Navbar.Brand>
          <b.Nav pullRight bsStyle="pills" activeKey={this.getLocation()}>
            <b.NavDropdown active pullRight title="Menu" style={{padding: '3px', marginTop: '2px'}} id="bg-nested-dropdown">
              <LinkContainer to="/paths">
                <b.MenuItem eventKey={'paths'}>
                  <font className={s.navLinks}>
                      Paths
                  </font>
                </b.MenuItem>
              </LinkContainer>
              <LinkContainer to="/projects">
                <b.MenuItem eventKey={'projects'}>
                  <font className={s.navLinks}>
                      Projects
                  </font>
                </b.MenuItem>
              </LinkContainer>
              <LinkContainer to="/quizzes">
                <b.MenuItem eventKey={'quizzes'}>
                  <font className={s.navLinks}>
                      Quizzes
                  </font>
                </b.MenuItem>
              </LinkContainer>
              <LinkContainer to="/findings">
                <b.MenuItem eventKey={'findings'}>
                  <font className={s.navLinks}>
                      Findings
                  </font>
                </b.MenuItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <b.MenuItem eventKey={'about'} href="/about">
                  <font className={s.navLinks}>
                      About
                  </font>
                </b.MenuItem>
              </LinkContainer>
              <b.MenuItem eventKey={'blog'} href="https://blog.gameswithwords.org/">
                <font className={s.navLinks}>
                  Blog
                </font>
              </b.MenuItem>
            </b.NavDropdown>
          </b.Nav>
        </header>
      );
    }
    else {
      return (
        <header ref={node => (this.root = node)}>
          {this.home() ? <b.Image src="/../../img/logo_square-min.png" onLoad={this.props.onLoad} onError={this.props.onError} responsive /> : <b.Image src="/../../img/gww_nav_gray-min.png" onLoad={this.props.onLoad} onError={this.props.onError} responsive />}
          <b.Nav style={{margin: '0px', fontFamily: '\'Ribeye Marrow\', cursive', fontSize: '20px', backgroundColor: '#a9a9a9'}} bsStyle="tabs" justified activeKey={this.getLocation()}>
              <LinkContainer to="/paths">
            <b.NavItem eventKey={'paths'}>
                Paths
            </b.NavItem>
              </LinkContainer>
            <LinkContainer to="/projects">
            <b.NavItem eventKey={'projects'}>
              Projects
            </b.NavItem>
            </LinkContainer>
              <LinkContainer to="/quizzes">
            <b.NavItem eventKey={'quizzes'}>
                Quizzes
            </b.NavItem>
              </LinkContainer>
              <LinkContainer to="/findings">
            <b.NavItem eventKey={'findings'}>
                Findings
            </b.NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
            <b.NavItem eventKey={'about'}>
                About
            </b.NavItem>
              </LinkContainer>
            <b.NavItem eventKey={'blog'} href="https://blog.gameswithwords.org/">
              Blog
            </b.NavItem>
          </b.Nav>
        </header>
      );
    };
  }
}

export default Header;