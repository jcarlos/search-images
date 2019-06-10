import React from "react";
import moment from "moment";

const ImageCard = props => {
  const formatDate = date => {
    if (date === "") return "";
    return moment().format("Do of MMM YYYY");
  };

  /* could add a tooltip for shorted tags in the future
   hence this is done here and not on Images.js
   tags could become it is own component as well
  */
  const shortTag = (tag) => {
    if(tag.length < 20){
      return tag
    }
    return `${tag.substring(0, 17)}...`;
  }

  const tags = imageTags => {
    return imageTags.map(imageTag => {
      return (
        <small key={imageTag} className="text-small mr-1 badge badge-primary">
          {shortTag(imageTag)}
        </small>
      );
    });
  };

  return (
    <div className="card pr-3 pl-3 pt-3 bg-light" key={props.image.thumbnail}>
      <a href={props.image.link} target="_blank" rel="noopener noreferrer">
        <img
          className="card-img-bottom"
          src={props.image.thumbnail}
          alt={props.image.tags}
        />
      </a>
      <div className="card-body">
        <h5 className="card-title">Image by {props.image.author}</h5>
        <p className="card-text">{formatDate(props.image.date_taken)}</p>
        <p className="card-text">
          {tags(props.image.tags)}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
