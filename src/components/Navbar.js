import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter} from "react-router-dom";
import styled from "styled-components";
import { MovieContext } from "../MovieContext";

function Navbar(props){
  const { movies, addFilteredMovies } = useContext(MovieContext)

  const [search, setSearch] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [titles, setTitles] = useState([])
  
  useEffect(() => {
    const t = movies.map(e => e.title)
    setTitles(t)
  }, [movies])

  useEffect(() => {
    addFilteredMovies(
      movies.filter( m => {
        return m.title.toLowerCase().includes(search.toLowerCase())
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, movies])


  const setVal = (e) => {
    const value = e.target.value;
    setSearch(value)
    if(value.length > 0){
      const regex = new RegExp(`^${value}`, 'i');
      const sugg = titles.sort().filter(v => v.match(regex))
      setSuggestions(sugg)
    } else {
      setSuggestions([])
    }    
  }

    return (
      <NavWrapper className="navbar navbar-expand-sm bg-default navbar-dark px-sm-5">
      <Link className="navbar-brand" to="/">Mini-<span className="bran">Netflix</span></Link>
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
          <li className="nav-item ml-2">
            <Link to="/" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/favorites" className="nav-link">
              Favorites
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categories
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to="/popular">Popular</Link>
              <Link className="dropdown-item" to="/top rated">Top Rated</Link>
              <Link className="dropdown-item" to="/now playing">Now Playing</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/">Settings</Link>
            </div>
          </li>
        </ul>
        {!props.id ?          
            <form className="form-inline ml-auto my-lg-0">
            <input
              onChange={e=> setVal(e)}
              className="form-control"
              type="search"
              value={search}
              placeholder="&#128269; Search Movies"
              aria-label="Search"
            />
            <ul className="mt-3">
                {suggestions.map((t, i) =><span onClick={() => setSearch(t)} key={i} className="badge badge-danger mr-2">{t}</span>)}
            </ul>
          </form>
          : null
        }
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
      </div>
    </NavWrapper>
    );
}

const NavWrapper = styled.nav`
 .nav-link {
    font-size: 1rem;
    text-transform: capitalize;
  }
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
.navbar-nav .nav-item .is-active {
  /* color: var(--mainWhite) !important;
  font-weight: 600; */
  background-color: gold !important;
  color:red !important ;
  font-weight:bold;
}

`;
export default withRouter(Navbar);
