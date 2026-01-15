import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/products", element: <ProductsPage /> },
      { index: true, element: <HomePage /> },
      // {path:'/cart',element:<CartPage/>}
    ],
  },
  // {
  //   path: "/dashboard",
  //   element: <DashboardLayout />,
  //   children: [{ index: true, element: <DashboardHomePage /> }],
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
