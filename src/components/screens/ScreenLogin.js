import styled from 'styled-components';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import UserContext from '../contexts/UserContext';
import logo from '../../assets/img/logo.svg';

export default function ScreenLogin() {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [data, setData] = useState('');
    const { userData, setUserData } = useContext(UserContext);

    
    

    function checkCredentials(e) {
        e.preventDefault();

        console.log(e.target)

        

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`;
        const resp = axios.post(URL, credentials);


        resp.then(resp => {
            setData(resp.data);
            navigate('/hoje');
        });

        resp.catch(err => {
            const msg = err.response.statusText;
            alert(msg);
        });


    }

    setUserData(data);
    localStorage.setItem('token', JSON.stringify(data.token));
    console.log(userData);

    function renderFormLogin() {
        return (
            <>
                <input
                    type="email"
                    id="email"
                    value={credentials.email}
                    placeholder="email"
                    required
                    onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                />

                <input
                    type="password"
                    id="password"
                    value={credentials.password}
                    placeholder="senha"
                    required
                    onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                />

                <button>Entrar</button>

                <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
            </>
        );
    }

    return (
        <Container>
            <img src={logo} alt="logotipo Trackit" />
            <FormLogin onSubmit={checkCredentials}>
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
