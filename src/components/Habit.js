import styled from "styled-components";

export default function Habit(props) {

    const { id, name, done, currentSequence, highestSequence, setDone } = props;

    return (
        <Container>
            <div>
                <h3>{name}</h3>
                <p>Sequencia atual: {currentSequence} dias</p>
                <p>Seu recorde: {highestSequence} dias</p>
            </div>
            <div onClick={setDone(id, done)}>
                <ion-icon name="checkbox"></ion-icon>
            </div>
        </Container>
    )




}

function setIconColor (done) {
    return done ? '#8fc549' : '#e7e7e7';
}


const Container = styled.div`
    width: 100%;
    height: 94px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fffff;

    div{
        height: 100%;
    }

    div h3{
        font-weight: 400;
    }

    div p{
        font-size: 13px;
    }

    div div{
        ion-icon{
            width: 69px;
            height: 69px;
            color: ${(done) => setIconColor(done)};
        }
    }

`;
