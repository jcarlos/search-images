import React from "react";
import FilterImageList from "./FilterImageList"
import ImageCardList from "./ImageCardList/ImageCardList"
import SearchBar from "./SearchBar"

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  render() {
    const onSearch = e => {
      this.setState({ searchTerm: e.target.value.toLowerCase() });
    };

    return (
      <div>
        <SearchBar onSearch={onSearch} />
        <ImageCardList imageList={FilterImageList(this.props.images, this.state.searchTerm)} />
      </div>
    );
  }
}

export default Layout;
