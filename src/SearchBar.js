import React from "react";

const SearchBar = (props) => {
  return(
      <nav className="navbar sticky-top navbar-light bg-light border-bottom border-primary">
        <h2 className="navbar-brand">Flickr Images</h2>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            placeholder="Search images"
            aria-label="Search images"
            onChange={props.onSearch}
          />
        </form>
      </nav>
  );
}

export default SearchBar;
