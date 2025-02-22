import React from "react";
import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {fetchDataId} from "../utils/async";

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
      <div className="detail-container">
          <div className="detail-card">
              <div className="detail-image">
                  <img src={prod.image} alt={prod.title} />
              </div>
              <div className="detail-content">
                  <span className="detail-category">{prod.category}</span>
                  <h2 className="detail-title">{prod.title}</h2>
                  <p className="detail-description">{prod.description}</p>
                  <div className="detail-bottom">
                      <span className="detail-price">${prod.price}</span>
                      <button className="detail-button">Agregar al carrito</button>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default ItemDetail;
   
