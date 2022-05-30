import { Link } from "react-router-dom";
import styled from "styled-components";


export default function Footer () {
    return (
        <Container>
            <Link className="menu" to="/habitos">Hábitos</Link>
            <Link className="menu" to="/historico">Histórico</Link>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding: 5%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 18px;
    background-color: #ffffff;
    position: fixed;
    left: 0;
    bottom: 0;

    .menu{
        color: #52b6ff;
        text-decoration: none;
    }
`