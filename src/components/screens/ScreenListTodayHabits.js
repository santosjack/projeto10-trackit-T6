import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';


import Habit from '../Habit';
import UserContext from '../contexts/UserContext';
import { Header } from '../layouts/Header';



export default function ScreenListTodayHabits() {

    const { userData } = useContext(UserContext);
    const [habits, setHabits] = useState('');
    const [habitsConcluded, setHabitsConcluded] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }

        console.log(config)

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`;
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

    function toggle(id, done) {
        const concluded = habitsConcluded.some(habit => habit.id === id);
        if (!concluded) {
            setHabitsConcluded([...habitsConcluded, { id }]);
        } else {
            const newConcludedes = habitsConcluded.filter(habit => habit.id !== id);
            setHabitsConcluded(newConcludedes);
        }
    }

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
                        setDone={(id, done) => toggle(id, done)}
                    />
                )
            })
        } else {
            return <p>Carregando...</p>
        }
    }

    return (
        <>
            <Header />
            <Container>
                {mountHabits()}
            </Container>
        </>

    );
}

const Container = styled.div`
        margin-bottom: 200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        

        p{
            font-size: 24px;
            color: color: black;
            text-align: center;
        }

    `;