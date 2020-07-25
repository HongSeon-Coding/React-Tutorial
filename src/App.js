import React from 'react';
import './App.css';
import Hello from './Hello';
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
    <div >
      <Hello/>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </div>
  );
}

export default App;
