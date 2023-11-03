import { Routes, Route } from 'react-router-dom';

import {
  Carousel,
  Products,
  Home,
  ProductDetail,
  Search,
  PageNotFound,
} from '../pages';

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path=""
          element={<Home />}
        />
<Route exact path="/" component={Search} />
        <Route
          path="/Products"
          element={<Products />}
        />

        <Route
          path="products/category"
          element={<Search />}
        />

        <Route
          path="/data"
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
