import React from 'react';
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import Router from "../../routes/Routers.jsx";
const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
