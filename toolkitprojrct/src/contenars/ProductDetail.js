import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/action/productAction";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;

  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log("mama", product);

  const fetchproductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err".err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchproductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div
          style={{
            border: "10px solid Blue",
            display: "inline-block",
            borderRadius: "50px",
            margin: "20px",
          }}
        >
          <div
            style={{
              width: "800px",
              height: "600px",
              border: "5px solid black",
              borderRadius: "50px",
              margin: "10px",
              padding: "20px",
            }}
          >
            <img
              style={{ width: "350px", height: "380px" }}
              src={image}
              alt="img"
            />
            <h1>Price $:{price}</h1>
            <p>{description}</p>
            <p>{category}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
