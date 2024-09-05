

import React, { useContext } from 'react';
import PixabayContext from '../Context/PixabayContext';

const Navbar = () => {
  const { fetchImageBycategory, setQuery } = useContext(PixabayContext);

  return (
    <>
      <div className='container text-center my-3'>
        <div className='row'>
          <div className='col-12'>
            <button
              type="button"
              onClick={() => fetchImageBycategory("nature")}
              className="btn btn-outline-primary mx-2 mb-2 mb-md-0"
            >
              Nature
            </button>
            <button
              type="button"
              onClick={() => fetchImageBycategory("science")}
              className="btn btn-outline-warning mx-2 mb-2 mb-md-0"
            >
              Science
            </button>
            <button
              type="button"
              onClick={() => fetchImageBycategory("computer")}
              className="btn btn-outline-success mx-2 mb-2 mb-md-0"
            >
              Computer
            </button>
            <button
              type="button"
              onClick={() => fetchImageBycategory("business")}
              className="btn btn-outline-danger mx-2 mb-2 mb-md-0"
            >
              Business
            </button>
            <button
              type="button"
              onClick={() => fetchImageBycategory("buildings")}
              className="btn btn-outline-warning mx-2 mb-2 mb-md-0"
            >
              Buildings
            </button>
            <button
              type="button"
              onClick={() => fetchImageBycategory("sports")}
              className="btn btn-outline-info mx-2 mb-2 mb-md-0"
            >
              Sports
            </button>
            <button
              type="button"
              onClick={() => fetchImageBycategory("transportation")}
              className="btn btn-outline-light mx-2 mb-2 mb-md-0"
            >
              Transportation
            </button>
            <button
              type="button"
              onClick={() => fetchImageBycategory("food")}
              className="btn btn-outline-dark mx-2 mb-2 mb-md-0"
            >
              Food
            </button>
          </div>
        </div>
      </div>
      <div className='container' style={{ maxWidth: "100%" }}>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          className="form-control bg-dark text-light"
          placeholder="Search..."
        />
      </div>
    </>
  );
}

export default Navbar;
