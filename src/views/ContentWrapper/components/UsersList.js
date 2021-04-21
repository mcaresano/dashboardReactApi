import {useState, useEffect} from "react";
import Wine from "./Wine";

export default function Loadusers (){

const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://grupo11-vinoteca.herokuapp.com/api/users')
       .then (response => response.json())
       .then (data =>{
            setUsers(data.data);
            console.log(users);
             })
     },[])
     return(
        <div>
            { users.map((user, i ) => {
                return(
                <Wine key={`vino_${i}`} name={user.name} price={user.price} cepa={user.cepas.name} desc = {user.description}  />
                )
            })
               
            }
        </div>          
        )
    
    }