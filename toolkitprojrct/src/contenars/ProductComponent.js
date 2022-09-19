import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div>
        <div
          style={{
            width: "400px",
            height: "450px",
            border: "5px solid black",
            borderRadius: "50px",
            margin: "20px",
            padding: "20px",
            textAlign: "center",
            // position: "relative",
            // justifyContent: "center",
            // alignItems: "center",
          }}
          key={id}
        >
          <Link to={`/product/${id}`}>
            <h1>No:{id}</h1>
            <img
              style={{ width: "250px", height: "200px" }}
              src={image}
              alt="img"
            />
            <h1>Price $:{price}</h1>
            <p>Title:{title}</p>
            <p>{category}</p>
          </Link>
        </div>
      </div>
    );
  });
  return <div style={{ display: "flex", flexWrap: "wrap" }}>{renderList}</div>;
};

export default ProductComponent;
