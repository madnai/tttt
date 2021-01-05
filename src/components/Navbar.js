import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo2.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import Skeleton from 'react-loading-skeleton';


const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "activeLink" } : null
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const NavbarComponent = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  componentDidMount() {
    this.setState({ isClient: true })
  }
  
render() {
    return (
      <React.Fragment key={this.state.isClient}>
      <BrowserView>
        <Navbar  style={{marginTop: '30px', fontFamily: 'Lato'}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="abs">
              <Nav.Item>
                <Link to="/">
                  <img src={logo} alt="UNOWbrowser" width='100px;' />
                </Link>
              </Nav.Item>
            </div>
            <div className='navbar-nav ml-auto' style={{marginRight: '15%'}}>
              <Nav.Item>
                <Nav.Link style={{fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                  <ExactNavLink to="/">HOME</ExactNavLink>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                  <ExactNavLink to="/onas">O NAS</ExactNavLink>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                  <ExactNavLink to="/warsztaty">WARSZTATY</ExactNavLink>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: 'black', paddingRight: '0px'}}>
                  <ExactNavLink to="/shop">SHOP</ExactNavLink>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <span class="nav-link" style={{fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: 'black', paddingRight: '0px'}}>
                  <ExactNavLink to="/udream">UDREAM</ExactNavLink>
                </span>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: 'black', paddingRight: '0px'}}>
                  <ExactNavLink to="/podcast" style={{color: '#D80029'}}>PODCAST</ExactNavLink>
                </Nav.Link>
              </Nav.Item>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </BrowserView>
      <MobileView>
        <Navbar collapseOnSelect expand="sm" style={{marginTop: '30px', fontFamily: 'Lato'}}>
        <div className="navbar-header">
          <Navbar.Brand style={{padding: '0px'}} className="abs" href="#home"><Link to="/"><img src={logo} alt="UNOWmobile" width='100px;' /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <div className='navbar-nav ml-auto' style={{marginRight: '15%'}}>
              <Nav.Item>
                <Nav.Link style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                  <ExactNavLink to="/">HOME</ExactNavLink>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                  <ExactNavLink to="/onas">O NAS</ExactNavLink>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                  <ExactNavLink to="/warsztaty">WARSZTATY</ExactNavLink>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black', paddingRight: '0px'}}>
                  <ExactNavLink to="/shop">SHOP</ExactNavLink>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <span class="nav-link" style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black', paddingRight: '0px'}}>
                  <ExactNavLink to="/udream">UDREAM</ExactNavLink>
                </span>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black', paddingRight: '0px'}}>
                  <ExactNavLink to="/podcast" style={{color: '#D80029'}}>PODCAST</ExactNavLink>
                </Nav.Link>
              </Nav.Item>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </MobileView>
      </React.Fragment>
    )
  }
}

export default NavbarComponent
