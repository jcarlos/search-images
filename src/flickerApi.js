import React from "react";
import Layout from "./Layout";
import { imagesFromFlicker } from "./Images";
import Loading from './Loading'

class FlickerAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadStatus: "LOADING", images: [], failure: "" };
  }

  componentDidMount = () => {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    const url =
      CORS_PROXY +
      "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.items);
        const images = imagesFromFlicker(data);
        this.setState({ loadStatus: "LOADED", images: images });
      })
      .catch(err => {
        this.setState({ loadStatus: "FAILED", failure: err });
        console.log(err);
      });
  };

  render() {
    switch (this.state.loadStatus) {
      case "LOADING":
        return <Loading />
      case "FAILED":
        return (
          <div>
            <p> {this.state.failure} </p>
          </div>
        );
      case "LOADED":
        return <Layout images={this.state.images} />;
      default:
        return (
          <div>
            <p> Invalid state </p>
          </div>
        );
    }
  }
}

export default FlickerAPI;
