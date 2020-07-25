import React from 'react';


// 컴포넌트 생성하기 대문자로 시작할 것!
function Hello(props){
    console.log(props);
    return (
    <div style={{
        color:props.color
    }}>안녕하세요!!{props.name}</div>
    )
}


// Hello 컴포넌트를 모듈화 하기!!
export default Hello;