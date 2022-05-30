import styled from "styled-components";
import { useContext } from 'react';
 
import UserContext from "../contexts/UserContext";


export default function Header () {
    const { userData } = useContext(UserContext);
    console.log(`dados que vão pro header ${userData.image}`);
    return (
        <Container>
            <div className="logo">Trackit</div>
            <div className="avatar">
                <img src={userData.image} alt="avatar" />
            </div>
        </Container>
    );
}

const Container = styled.div`
    z-index: 1;
    width: 100%;
    height: 70px;
    background-color: #126ba5;
    padding: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    .logo{
        font-family: 'Playball', cursive;
        font-weight: 400;
        font-size: 40px;
        line-height: 49px;
        color: #ffffff;
    }

    .avatar{
        width: 55px;
        height: 55px;
        border-radius: 50%;
       
    }

    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }

`;
