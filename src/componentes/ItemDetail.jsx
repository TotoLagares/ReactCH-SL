import React from "react";
import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {fetchDataId} from "../async";

function ItemDetail() {
  const { id } = useParams();
  const [prod, setProd] = useState({});

  useEffect(() => {
    fetchDataId(id).then((prod) => {
      setProd(prod);
    });
  }, [id]);

  return (
    <>
        <h4>detalles</h4>
            <div className="product-card">
              <div className="product-tumb">
                <img src={prod.image} alt=""></img>
              </div>
              <div className="product-details">
                <span className="product-catagory">{prod.category}</span>
                <h4 style={{ fontSize: 20 }}>{prod.title}</h4>
                <p>{prod.description}</p>
                <div className="product-bottom-details">
                  <div className="product-price">${prod.price}</div>
                  <div className="product-links">
                    <a href=""><i className="fa fa-shopping-cart"></i></a>
                  </div>
                </div>
              </div>
            </div>
    </>
  );
}

export default ItemDetail;
   
