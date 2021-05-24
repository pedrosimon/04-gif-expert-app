import React, { Fragment } from "react";
import PropTypes from "prop-types";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data: imgs, loading } = useFetchGifs(category);
  return (
    <Fragment>
      <h3>{category}</h3>
      {loading && <p className="animate__animated animate__flash">Cargando...</p>}
      <div className="card-grid">
        {imgs.map((img) => (
          <GifGridItem key={img.id} img={img} />
        ))}
      </div>
    </Fragment>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
