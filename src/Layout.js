import React from "react";
import ImageCardList from "./ImageCardList/ImageCardList"
import SearchBar from "./SearchBar"
import Loading from "./Loading"
import LoadStatus from './LoadStatus'

class Layout extends React.Component {

  handleLoadStatus = (loadStatus) => {
    switch (loadStatus) {
      case LoadStatus.LOADING:
        return <Loading />
      case LoadStatus.LOADED:
        return (
          <ImageCardList imageList={this.props.imageList} />)
      case LoadStatus.FAILED:
        return (
          <div>
            <p> Problem loading: {this.props.failure} </p>
          </div>
        );
      default:
        return (
          <div>
            <p> Invalid state </p>
          </div>
        );
    }
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar onSearch={this.props.onSearch} />
        {this.handleLoadStatus(this.props.loadStatus)}
      </React.Fragment>
    )
  }
}

export default Layout;