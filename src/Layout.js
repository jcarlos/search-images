import React from "react";

const Layout = props => {
  const images = props.content.map(image => {
    const card = (
      <div className="card p-3 bg-light" key={image.thumbnail} >
        <img className="card-img-bottom" src={image.thumbnail} alt="" />
        <div className="card-body">
          <h5 className="card-title">Image by {image.author}</h5>
          <p className="card-text">{image.date_taken}</p>
          <p className="card-text">
            <small className="text-small">{image.tags.substring(0, 50)}</small>
          </p>
        </div>
      </div>
    );
    return card;
  });

  const layout = (
    <div>
      <nav className="navbar sticky-top navbar-light bg-light border-bottom border-success">
        <h2 className="navbar-brand">
          Search images
        </h2>
        <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      <div className="card-columns p-4 mx-auto" style={{maxWidth: '1080px'}}>{images}</div>
    </div>
  );

  return layout;
};

export default Layout;
