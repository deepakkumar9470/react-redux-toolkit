import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { store } from '../store/store';


const Home = () => {
  const { count } = useSelector((state) => state.counter)
   console.log(store.getState())

  return (
    <div>
      <Paragraph>Count : {count}</Paragraph>
    </div>
  )
}


const Paragraph = styled.p`
  font-size : 35px;
  font-weight: 500;
  color : #73777B; 
`;
export default Home