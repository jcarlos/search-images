import React from "react";
import FilterImageList from "./FilterImageList"
import ImageCardList from "./ImageCardList/ImageCardList"

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  render() {
    const imageList = FilterImageList(this.props.images, this.state.searchTerm)

    const onSearch = e => {
      this.setState({ searchTerm: e.target.value.toLowerCase() });
    };

    const layout = (
      <div>
        <nav className="navbar sticky-top navbar-light bg-light border-bottom border-primary">
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
        <ImageCardList imageList={imageList} />
      </div>
    );

    return layout;
  }
}

export default Layout;
