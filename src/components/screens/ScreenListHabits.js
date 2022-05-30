import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';


import UserContext from '../contexts/UserContext';
import Habit from '../Habit';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';



export default function ScreenListTodayHabits() {
    const { userData } = useContext(UserContext);
    const token = JSON.parse(localStorage.getItem('token'));
    const [habits, setHabits] = useState('');

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        console.log(config)

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`;
        const resp = axios.get(URL, config);

        resp.then(resp => {
            const { data } = resp;
            setHabits(data);
            console.log(data);
        })

        resp.catch(err => {
            const msg = err.responde.statusText;
            alert(msg);
        })
    }, []);

    function mountHabits() {
        if (habits.length > 0) {
            return habits.map(habit => {
                const { id, name, done, currentSequence, highestSequence } = habit;
                return (
                    <Habit
                        key={id}
                        id={id}
                        name={name}
                        currentSequence={currentSequence}
                        highestSequence={highestSequence}
                        setDone={null}
                    />
                )
            })
        } else {
            return <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a traquear!</p>
        }
    }

    return (
        <>
            <Header />
            <Container>
                <div className="header">
                    <div className="title">Meus Hábitos</div>
                    <div className='icon'>
                        <ion-icon name="add"></ion-icon>
                    </div>
                </div>
                <div className="content">
                    {mountHabits()}
                </div>
            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;

    *{
        margin: 0 5%;
    }

    .header{
        display: flex;
        justify-content: space-between;

        .title {
            color: #126ba5;
            font-weight: 400;
            font-size: 23px;
            line-height: 29px;
        }

        .icon {
            width: 40px;
            height: 35px;
            background-color: #52b6ff;
            border-radius: 4px;

            ion-icon{
                width: 40px;
                height: 35px;
                color: #ffffff;
            }
        }
    }

    .content{
        margin-top: 30px;
        width: 100%;
        height: 100%;

        p{
            font-size: 18px;
            font-weight: 400;
            line-height: 22px;
            color: #666666;
        }
    }

`;