import React from 'react';
import './App.css';

import Wrapper from './wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color:'aqua',
    fontSize:24,
    padding:'1rem'
  };
    //JSX 규칙
    //1. tag는 반드시 닫아야한다. input,br 등 조심
    //2. 2개 이상의 tag는 하나의 tag로 감싸야한다.
    //2.1 <></> 도 사용해도 된다.
    {/*주석주석주석*/}
  return (
    <>
    <Wrapper>
    
        <>
          <Counter style={ { name, style }}></Counter>
          <InputSample></InputSample>
        </>
    
    </Wrapper>
    <UserList></UserList>
    </>
  );
}

export default App;
