import styled from "styled-components"
import React, { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from "axios";
import { AuthContext } from "../providers/Auth";
import { useNavigate, Link } from "react-router-dom";

export default function Invetory() {
    let {user} = React.useContext(AuthContext);
    let [inventory,setInventory] = useState([]);
    let navigate = useNavigate();
    useEffect(()=>{
        async function getProducts(){
            let get = await axios.get(`${process.env.REACT_APP_BASE_URL}/listInventory/`,{
                headers:{
                    userID: user.id,
                    token: user.token
                }
            });
            setInventory(get.data);
        }
        if(user.token!==""){
            getProducts();
        }
        else{
            navigate("/");
        }
        // eslint-disable-next-line
    },[])

    return(
        <Container>
            {
                inventory.length === 0 ? 
                    inventory.map((product,index)=>{
                        return(
                            <ContainerProduto>
                                <p>product.name</p>
                                <img src={product.image} alt={product.img}/>
                            </ContainerProduto>
                        )
                    }):
                    <>
                        <Link to="/home">
                            <button>Voltar para a pagina Inicial</button>
                        </Link>
                        <p>Nenhum produto encontrado</p>
                    </>
            }
        </Container>
    )
}

const ContainerProduto = styled.div`

`

const Container = styled.div`
    display: flex;
    *{
        box-sizing: border-box;
        
    }
    padding-top: 50px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1f1f1f;

    a{
        text-decoration: none;
    }

    button{
        border: none;
        width: 200px;
        height: 40px;
        border-radius: 10px;
        background-color: #1f1f1f;
        color: #17ff23;
        font: 400 20px "Nerko One";
        cursor: pointer;
        margin-bottom: 10px;
    }

 
    p{
        font: 400 20px "Nerko One";
        color: #17ff23;
    }

    h2{
        color: #17ff23;
        font: 700 25px "Raleway";
        margin-top: 25px;
        text-align: center;
        margin-bottom: 30px;
    }
`