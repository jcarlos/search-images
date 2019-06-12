import React from "react";
import Layout from "./Layout";
import { ImagesFromFlickr } from "./Images";
import { FlickrApi } from "./FlickrApi"
import LoadStatus from './LoadStatus'

class HandleLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadStatus: LoadStatus.LOADING, images: [], failure: "" };
  }

  fetchImages = async (searchTerm) => {
    try {
      this.setState({ loadStatus: LoadStatus.LOADING })
      const images = await FlickrApi(searchTerm)
      this.setState({ loadStatus: LoadStatus.LOADED, images: ImagesFromFlickr(images) });
    }catch(err){
      this.setState({ loadStatus: LoadStatus.FAILED, failure: err });
    }
  };

  componentDidMount = () => {
    this.fetchImages();
  };

  onSearch = searchTerm => {
    this.fetchImages(searchTerm);
  };

  render() {
    return <Layout onSearch={this.onSearch} imageList={this.state.images} loadStatus={this.state.loadStatus} failure={this.state.failure} />;
  }
}

export default HandleLayout;
