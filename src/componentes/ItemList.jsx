import { useEffect, useState } from "react";
import { fetchData } from "../async";
import './ItemList.css';
import { Link, useParams } from "react-router-dom";
import { fetchDataCategory } from "../async";

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
                                <h4 style={{fontSize:20}}><Link to={`/${item.id}`}>{item.title}</Link></h4>
                                <p>{item.description.slice(0,100)}...</p>
                                <div className="product-bottom-details">
                                    <div className="product-price">${item.price}</div>
                                    <div className="product-links">
                                        <a href=""><i className="fa fa-shopping-cart"></i></a>
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
