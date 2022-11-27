import styled from "styled-components"
import React, { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../providers/Auth";
import { useNavigate } from "react-router-dom";


export default function OpeningBox() {
    let [time,setTime] = useState(30);
    let [infinite,setInfinite] = useState(true);
    let [timeFut,setTimeFut] = useState("");
    let [mock,setMock] = useState([]);
    let {user} = React.useContext(AuthContext);
    let navigate = useNavigate();

    useEffect(()=>{
        async function getProducts(){
            let get = await axios.get(`${process.env.REACT_APP_BASE_URL}/listproducts`);
            setMock(get.data.sort(()=>{
                return Math.random() - 0.5;
            }));
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
            {mock.length === 0 ? 
                <ContainerResultado>
                    <h1>Sem itens disponiveis</h1> 
                    <Link to="/">
                        <button>Retornar ao inventário</button>
                    </Link>   
                </ContainerResultado> : 
                <Carousel width={390} autoFocus centerMode centerSlidePercentage={50} onChange={(e)=>{handleChange(setTime,time,setInfinite,setTimeFut,mock,e)}} showStatus={false} showArrows={false} stopOnHover={false} swipeable={false} showIndicators={false} transitionTime={0} showThumbs={false} autoPlay={infinite} interval={time} infiniteLoop={true} axis="horizontal">
                    {
                        mock.map((moc,index)=>{
                            return (
                                <ImagemContainer key={index}>
                                    <img src={moc.img} alt={moc.name} />
                                </ImagemContainer>
                            )
                        })
                    }
                </Carousel>
            }
            {
                infinite===false ? 
                    <ContainerResultado>
                        <h1>Parabéns você tirou: <br/>{timeFut.name}</h1> 
                        <Link to="/">
                            <button>Retornar ao inventário</button>
                        </Link>
                    </ContainerResultado>
                    
                    : 
                    mock.length === 0 ? <p></p> :
                    <h2>Abrindo a caixa...</h2>
            }

        </Container>
    )
}

function handleChange(setTime,time,setInfinite,setTimeFut,mock,e){
    setTimeFut(mock[e]);
    if(time<700){
        setTime(time+30);
    }
    else{
        setInfinite(false);
    }
}

const ImagemContainer = styled.div`
    margin-right: 10px;
    margin-left: 10px;
    img{
        width: 50px;
        height: 200px;
    }
`

const ContainerResultado = styled.div`
    margin: 25px;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    border-radius: 10px;

    h1{
        color: #17ff23;
        font: 700 25px "Raleway";
        margin-top: 15px;
        text-align: center;
        margin-bottom: 30px;
    }
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

    .box {
        display: flex;
        flex-direction: column;
        background-color: black;
        width: 90%;
        height: 400px;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
    }

    .box input {
        width: 300px;
        outline: none;
        border: 3px solid #17ff23;
        background-color: #1f1f1f;
        font: 400 20px "Nerko One";
        padding-left: 5px;
        color: #17ff23;
        height: 50px;
        margin-bottom: 20px;
        border-radius: 5px;
    }
`