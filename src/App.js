import React from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, saveData } from './feature/counterSlice';
import styled from 'styled-components'
import Home from './components/Home';
import { useState } from 'react';

// Ye Recat Redux-1 hai bhai
function App() {
  
  const [storestate, setStoreState] = useState(0)
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  const handleStore = () =>{
    dispatch(setStoreState(count));
  }
  
  
  
  return (
    <Container>
      <Home />

      <div className="buttons">
        {
          count !== 50 ?
            <Button
              className={count !== 50 ? 'background-blue' : 'background-red'}
              onClick={() => dispatch(increment(5))}>
              Increse
            </Button>
            : <Span>Target reached</Span>
        }

        {
          count < -1 ? <Span>You can't decrese the count below 0</Span>
            : <Button
              onClick={() => dispatch(decrement(5))}>
              Decrease
            </Button>
        }

      </div>
      <Button primary onClick={()=> dispatch(saveData(count))}>Submit</Button>
    </Container>
  );
}



const Container = styled.div`
display: flex;
justify-content: center;
align-items : center;
flex-direction : column;
padding: 2rem 1rem;
background-color: #f1f1f1;
width: 60%;
margin : auto ;
margin-top: 100px;
box-shadow: 2px 2px 12px -3px rgba(0,0,0,0.75);
height : 80vh;
text-align: center;
`;

const Span = styled.span`
  font-size :14px;
  color: #333;
  font-weight: 600;
  width : 300px;
  heigth: 50px;
  border-radius: 5px;
  background : #FFDCAE;
  padding:10px 30px;
`

const Button = styled.button`
font-size: 16px;
margin: 10px;
padding: 10px 25px;
border: 2px solid #FCFFE7;
border-radius: 5px;
background: ${props => props.primary ? "#1363DF" : "#3F0071"};
color: ${props => props.primary ? "white" : "#fff"};
`;
export default App;
