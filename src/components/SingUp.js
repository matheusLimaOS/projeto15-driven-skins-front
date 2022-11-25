import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SingUP () {
    return(
        <Global>
            <h1>DrivenSkins</h1>
            <div className="box">
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirme a senha"/>
                <Link to="/">
                    <p>Já tem uma conta? Faça login.</p>
                </Link>
                
            </div>
        </Global>
    )
}

const Global = styled.div`
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
        width: 500px;
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