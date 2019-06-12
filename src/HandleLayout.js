import React from "react";
import Layout from "./Layout";
import { ImagesFromFlicker } from "./Images";
import { FlickrApi } from "./FlickrApi"
import LoadStatus from './LoadStatus'

class HandleLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadStatus: "LOADING", images: [], failure: "" };
    this.timeout = null;
  }

  fetchImages = async (searchTerm) => {
    try {
    this.setState({ loadStatus: LoadStatus.LOADING })
      const images = await FlickrApi(searchTerm)
      this.setState({ loadStatus: LoadStatus.LOADED, images: ImagesFromFlicker(images) });
    }catch(err){
      this.setState({ loadStatus: LoadStatus.FAILED, failure: err });
    }
  };

  // to not overload the API with requests
  // it cancels any pending search if a new search
  // comes before 1000 miliseconds
  searchAfterOneSecond = (searchTerm) => {
    if (this.timeout !== null) {
      window.clearTimeout(this.timeout)
      this.timeout = null;
    }
    this.timeout = window.setTimeout(() => {
      this.fetchImages(searchTerm);
    }, 1000);
  };

  componentDidMount = () => {
    this.fetchImages();
  };

  onSearch = e => {
    const searchTerm = e.target.value.toLowerCase();
    this.searchAfterOneSecond(searchTerm);
  };

  render() {
    return <Layout onSearch={this.onSearch} imageList={this.state.images} loadStatus={this.state.loadStatus} failure={this.state.failure} />;
  }
}

export default HandleLayout;
