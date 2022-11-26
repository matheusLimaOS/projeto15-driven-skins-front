import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    return(
        <Container>
            <h1>DrivenSkins</h1>
            <form onSubmit={(e)=>{handleSubmit(e,email,password)}} className="box">
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha"/>
                <button type="submit">Login</button>
                <Link to="/signUp">
                    <p>Cadastre-se</p>
                </Link>
                
            </form>
        </Container>
    )
}

async function handleSubmit(e,email,password){
    e.preventDefault();

    console.log(email,password)
}

const Container = styled.div`
    *{
        box-sizing: border-box;
        
    }

    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1f1f1f;

    a{
        text-decoration: none;
    }

    .box button{
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

    h1{
        color: #17ff23;
        font: 700 70px "Raleway";
        margin-top: 40px;
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