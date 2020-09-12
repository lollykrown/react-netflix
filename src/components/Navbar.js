import React, { Component } from "react";
// import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { ButtonContainer } from "./Button";
// import ItemList from "./Home/ItemList";

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-default navbar-dark px-sm-5">
      <Link className="navbar-brand" to="/">Mini-<span class="bran">Netflix</span></Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav align-items-center">
          <li className="nav-item active ml-2">
            <Link to="/" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Favorites
            </Link>
          </li>
          <li class="nav-item dropdown">
            <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categories
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="/">Popular</a>
              <a className="dropdown-item" href="/">Top Rated</a>
              <a className="dropdown-item" href="/">Now Playing</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">Settings</a>
            </div>
          </li>
        </ul>
        <form className="form-inline ml-auto my-lg-0">
          <input
            className="form-control "
            type="search"
            placeholder="&#128269; Search Movies"
            aria-label="Search"
          />
            <button type="button" className="btn btn-default">Submit</button>
        </form>
        <ul className="navbar-nav align-items-center ml-auto">
        <li className="nav-item ml-4">
            <Link to="/" className="nav-link">
              Contact us
            </Link>
          </li>

          {/* check if user is true */}
          {/* <li > 
            <img className="avi" src=""/>
            <span className="hidden-xs">displayName</span>
            <span className="logout"><button class="btn btn-default">Sign out</button></span>
          </li> */}
          <li className="nav-item ml-4">
            <button className="btn">Sign in</button>
          </li>
        </ul>
        {/* <ProductConsumer>
          {(value) => (
            <Link to="/cart" className="ml-auto ">
              <ButtonContainer>
                <span>
                  <i className="fas fa-cart-plus mr-2"></i>
                </span>
                my cart
                <span className="btn btn-white ml-2">{value.totalItems}</span>
              </ButtonContainer>
            </Link>
          )}
        </ProductConsumer> */}
      </div>
    </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
//  background: var(--mainPurple) !important;
//  .nav-link {
//     color: var(--mainWhite);
//     font-size: 1.3rem;
//     text-transform: capitalize;
//   }
border-bottom: 2px solid rgba(255,255,255,0.65);
.navbar-brand {
  color:rgba(255,255,255,0.65);
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
}
.bran {
  color:var(--mainRed);
  text-shadow:0 0 5px var(--mainRed);
  font-weight: 600;
}
.btn{
  background-color: var(--mainRed);
  color: var(--mainWhite);
}
`;
export default Navbar;
