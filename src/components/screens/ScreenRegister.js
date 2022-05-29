import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import logo from '../../assets/img/logo.svg';

export default function ScreenRegister() {

    const [userData, setUserData] = useState(
        {
            email: '',
            name: '',
            image: '',
            password: ''
        }
    );

    function renderFormLogin() {
        return (
            <>
                <input
                    type="email"
                    id="email"
                    value={userData.email}
                    placeholder="email"
                    required
                    onChange={e => setUserData({ ...userData, email: e.target.value })}
                />

                <input
                    type="password"
                    id="password"
                    value={userData.password}
                    placeholder="senha"
                    required
                    onChange={e => setUserData({ ...userData, password: e.target.value })}
                />

                <input
                    type="name"
                    id="name"
                    value={userData.name}
                    placeholder="nome"
                    required
                    onChange={e => setUserData({ ...userData, name: e.target.value })}
                />

                <input
                    type="url"
                    id="img"
                    value={userData.image}
                    placeholder="https://www.example.com/img.jpg"
                    required
                    onChange={e => setUserData({ ...userData, image: e.target.value })}
                />

                <button>Cadastrar</button>

                <Link to="/">Já tem uma conta? Faça login!</Link>
            </>
        )
    }

    function registerUser(e) {
        e.preventDefault();

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`;
        const resp = axios.post(URL, userData);

        resp.then(resp => {
            console.log('Sucesso no cadastro');
        });

        resp.catch(err => {
            const msg = err.response.statusText;
            alert(msg);
        });

    }

    return (
        <Container>
            <img src={logo} alt="logotipo Trackit" />
            <FormLogin onSubmit={registerUser}>
                {renderFormLogin()}
            </FormLogin>
        </Container>
    );
}

const Container = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        img{
            width: 180px;
            heigth: auto;
        }

        a{
            text-decoration: none;
        }

    `;

const FormLogin = styled.form`
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 25px;

        input {
            width: 90%;
            heigth: 45px;
            padding-left: 20px;
        }
    `;

