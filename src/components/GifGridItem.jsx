import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ img }) => {
  const { title, url } = img;
  return (
    <div className="card animate__animated animate__bounce">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifGridItem.propTypes = {
  img: PropTypes.object,
};

export default GifGridItem;
