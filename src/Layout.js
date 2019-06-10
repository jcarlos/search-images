import React from "react";
import FilterImageList from "./FilterImageList"

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  render() {
    const images = FilterImageList(this.props.content, this.state.searchTerm).map(image => {
      const card = (
        <div className="card p-3 bg-light" key={image.thumbnail}>
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <img
              className="card-img-bottom"
              src={image.thumbnail}
              alt={image.tags}
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">Image by {image.author}</h5>
            <p className="card-text">{image.date_taken}</p>
            <p className="card-text">
              <small className="text-small">
                {image.tags.substring(0, 50)}
              </small>
            </p>
          </div>
        </div>
      );
      return card;
    });

    const onSearch = e => {
      this.setState({ searchTerm: e.target.value.toLowerCase() });
    };

    const layout = (
      <div>
        <nav className="navbar sticky-top navbar-light bg-light border-bottom border-success">
          <h2 className="navbar-brand">Search images</h2>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search images"
              aria-label="Search images"
              onChange={onSearch}
            />
          </form>
        </nav>
        <div
          className="card-columns p-4 mx-auto"
          style={{ maxWidth: "1080px" }}
        >
          {images}
        </div>
      </div>
    );

    return layout;
  }
}

export default Layout;
