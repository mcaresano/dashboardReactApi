import {useState, useEffect} from "react";
import CardsContent from "./CardsContent";

export default function LoadProducts (){

const [products, setProducts] = useState(0);


    useEffect(() => {
        fetch('https://grupo11-vinoteca.herokuapp.com/api/products')
       .then (response => response.json())
       .then (data =>{
        setProducts(data.meta.total_products);
        
        },)
     },[])


    

     return (
       <div className="row">
            <CardsContent border="card border-left-primary shadow h-100 py-2" title= "Total Productos en la Base de datos" i="fas fa-clipboard-list fa-2x text-gray-300" valor={products} /> 
            <CardsContent border="card border-bottom-success shadow h-100 py-2" title= "Clientes" i="fas fa-user-check fa-2x text-gray-300" valor="250" /> 
            <CardsContent border="card border-bottom-success shadow h-100 py-2" title= "Administradoress" i="fas fa-user-check fa-2x text-gray-300" valor="1860" /> 
       </div>
 
 
    )


}