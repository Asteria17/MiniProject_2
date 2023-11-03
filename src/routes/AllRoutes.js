import { Routes, Route } from 'react-router-dom';

import {
  Carousel,
  Products,
  Home,
  ProductDetails,
  Search,
  PageNotFound,
} from 'react';

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/home"
          element={<Home />}
        />
        
        <Route
          path="/Products"
          element={<Products />}
        />

        <Route
          path="products/category"
          element={<Search />}
        />

        {/* <Route
          path="/{category}"
          element={<Search />}
        /> */}

        <Route
          path="product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="search/title"
          element={<Search />}
        />
        
        <Route
          path="product/:id"
          element={<Search />}
        />
        <Route
          path="#"
          element={<PageNotFound />}
        />
      </Routes>
    </div>
  );
};
