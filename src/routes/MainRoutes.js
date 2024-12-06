import React from "react";
import AdminPage from "../pages/AdminPage";
import EditPage from "../pages/EditPage";
import { Route, Routes } from "react-router-dom";
import ProductList from "../components/products/ProductList";
import DetailsPage from "../pages/DetailsPage";

const ADMIN_ROUTES = [
  {
    link: "/admin",
    element: <AdminPage />,
    id: 1,
  },
  {
    link: "/edit/:id",
    element: <EditPage />,
    id: 2,
  },
];

const PUBLIC_ROUTES = [
  {
    link: "/list",
    element: <ProductList />,
    id: 1,
  },
  {
    link: "/details/:id",
    element: <DetailsPage />,
    id: 2,
  },
];

const MainRoutes = () => {
  return (
    <Routes>
      {ADMIN_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
