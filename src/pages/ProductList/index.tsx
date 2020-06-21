import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Container from "~components/ProductList/Container";
import NavBar from "~components/Common/NavBar";
import Footer from "~components/Common/Footer";
import { getProducts } from "~stores";

import "./style.scss";

function ProductList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <NavBar />
      <Container />
      <Footer />
    </>
  );
}

export default ProductList;
