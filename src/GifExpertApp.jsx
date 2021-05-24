import React, { Fragment, useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
//import PropTypes from "prop-types";
const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
  ]);

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category, i) => {
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
