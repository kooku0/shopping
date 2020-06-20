import React from "react";
import "./style.scss";
import Container from "~components/ProductList/Container";
import NavBar from "~components/Common/NavBar";
import Footer from "~components/Common/Footer";

function ProductList() {
  return (
    <>
      <NavBar />
      <Container />
      <Footer />
    </>
  );
}

export default ProductList;
