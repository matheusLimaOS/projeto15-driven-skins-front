import styled from "styled-components"

export default function SingUP () {
    return(
        <Global>
            <div className="box">
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <input type="password" placeholder="Confirme a senha"/>
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

    .box {
        display: flex;
        flex-direction: column;
        background-color: black;
        width: 500px;
        height: 400px;
        align-items: center;
        margin-top: 100px;
        justify-content: center;
        border-radius: 10px;
    }

    .box input {
        width: 300px;
        outline: none;
        border: 3px solid #a8a8a8;
        background-color: #1f1f1f;
        color: #a8a8a8;
        height: 50px;
        margin-bottom: 20px;
        border-radius: 5px;
    }
`