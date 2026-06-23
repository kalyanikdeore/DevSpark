import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import { CartProvider } from "./context/CartContext";
import Internshippage from"./pages/Internshippage/Internshippage";

import Contactpage from "./pages/Contactpage/Contactpage";
import Aboutuspage from "./pages/Aboutuspage/Aboutuspage";
import Servicespage from "./pages/Servicespage/Servicespage";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}> 
        <Route index element={<Homepage />} />
      <Route path="internship" element={<Internshippage />} />
      <Route path="contact" element={<Contactpage />} />
      <Route path="aboutus" element={<Aboutuspage />} />
      <Route path="service" element={<Servicespage />} />

      </Route>
    )
  );

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
