import React from "react";
import Layout from "./Layout";
import { imagesFromFlicker } from "./Images";

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
        return (
          <div className="text-center mt-5">
            <div
              className="spinner-grow text-primary mt-8"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span class="sr-only">Loading...</span>
            </div>
            </div>
        );
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
