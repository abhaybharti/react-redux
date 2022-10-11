import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productsActions";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetails = async (id) => {
    const response = axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetails(productId);
    }
  }, [productId]);

  return (
    <div>
      <h1>Product Details</h1>
    </div>
  );
};

export default ProductDetails;
