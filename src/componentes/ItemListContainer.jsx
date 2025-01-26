import React from "react";

function ItemListContainer (props){


    return (
        <>
            <div style={{textAlign: "center", fontSize: "2rem", fontWeight: "bold"}}>
                <p>Hola,{props.nombre} {props.apellido}. Bienvenido a {props.tienda}!</p> 
            </div>
            
        </>
    )
}

export default ItemListContainer
