import React from "react";
import ImageCard from "./ImageCard";

const ImageCardList = props => {
  if (props.imageList.length === 0) {
    return <p> No Images to display</p>;
  }

  return (
    <div className="card-columns p-4 mx-auto" style={{ maxWidth: "1080px" }}>
      {props.imageList.map(image => (
        <ImageCard image={image} key={image.thumbnail} />
      ))}
    </div>
  );
};

export default ImageCardList;
