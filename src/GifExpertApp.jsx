import React, { Fragment, useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
//import PropTypes from "prop-types";
const GifExpertApp = ({defaultCategories = []}) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => {
          return (
            <GifGrid 
            key={category}
            category={category} 
            />
          );
        })}
      </ol>
    </Fragment>
  );
};
// GifExpertApp.propTypes = {

// }

export default GifExpertApp;
