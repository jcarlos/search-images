import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = null;
  };

  // to not overload the API with requests
  // it cancels any pending search if a new search
  // comes before 1000 miliseconds
  searchAfterOneSecond = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (this.timeout !== null) {
      clearTimeout(this.timeout)
      this.timeout = null;
    }
    this.timeout = setTimeout(() => {
      this.props.onSearch(searchTerm);
    }, 1000);
  };

  render() {
    return (
      <nav className="navbar sticky-top navbar-light bg-light border-bottom border-primary">
        <h2 className="navbar-brand">Flickr Images</h2>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            placeholder="Search images"
            aria-label="Search images"
            onChange={this.searchAfterOneSecond}
          />
        </form>
      </nav>
    );
  }
}

export default SearchBar;