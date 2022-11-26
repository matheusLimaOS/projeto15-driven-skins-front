import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function SingUP () {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigation = useNavigate()

    async function sendCadastro () {
        try {
            const register = {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            }

            await axios.post('http://localhost:5000/register', register)

            navigation('/')

        } catch (error) {
            alert(error.response.data)
        }
    }


    return(
        <Global>
            <h1>DrivenSkins</h1>
            <div className="box">
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome"/>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha"/>
                <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirme a senha"/>
                <button onClick={()=> sendCadastro()}>Cadastrar</button>
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
        margin-top: 100px;
        margin-bottom: 30px;

    }

    .box {
        display: flex;
        flex-direction: column;
        background-color: black;
        width: 380px;
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