import { useEffect, useState } from "react";
import { fetchData } from "../utils/async";
import './ItemList.css';
import { Link, useParams } from "react-router-dom";
import { fetchDataCategory } from "../utils/async";

export default function ItemList() {
    const [data, setData] = useState(0);
    const {category} = useParams();

    useEffect(() => {
        if(category){
            fetchDataCategory(category).then((cat) => {
                setData(cat);
            });
        }else{
            fetchData().then((data) => {
                setData(data);
            });
        }
    }, [category]);


    return (
        <>
            <h2>Lista de productos</h2>
            <div className="product-list">
            {
                data === 0 ? <p>Cargando...</p> : 
                <ul>
                {data.map((item) => (
                    <li key={item.id} style={{listStyleType: "none", padding: 10}}>
                        <div className="product-card">
                            <div className="product-tumb">
                                <img src={item.image} alt=""></img>
                            </div>
                            <div className="product-details">
                                <span className="product-catagory">{item.category}</span>
                                <h4 style={{fontSize:20,color:"#fbb62caa", margin:20}}>{item.title.slice(0,25)}...</h4>
                                <p>{item.description.slice(0,100)}...</p>
                                <div className="product-bottom-details" >
                                    <div className="product-price">${item.price}</div>
                                    <div className="product-links">
                                    <Link to={`/${item.id}`}><button className="info-button">Más Info</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            }
            </div>
        </>
    );
}
