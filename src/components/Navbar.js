import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import ItemList from "./Home/ItemList";

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
      <Link to="/">
        <img src={'logo512.png'} alt="store" width="40" height="50" className="navbar-brand" />
      </Link>
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
          <li class="nav-item dropdown">
            <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              categories
            </Link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form className="form-inline d-none d-lg-block ml-auto my-2 my-lg-0">
          <input
            className="form-control "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <span className="btn btn-warning text-white my-2 my-sm-0" type="submit">
            <i className="fas fa-search"></i>
          </span>
        </form>
        <ul className="navbar-nav align-items-center ml-auto">
        <li className="nav-item ml-4">
            <Link to="/" className="nav-link">
              contact us
            </Link>
          </li>
          <li className="nav-item ml-4">
            <Link to="/" className="nav-link">
              login/signup
            </Link>
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
 background: var(--mainPurple) !important;
 .nav-link {
    color: var(--mainWhite);
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
export default Navbar;
