import React from 'react';


// 컴포넌트 생성하기 대문자로 시작할 것!
function Hello({ name, color, isSpecial}){
    console.log({name, color, isSpecial});
    return (
    <div style={{
        color:color
    }}>
        {isSpecial ? <b>*</b> : null}
        안녕하세요!!{name}</div>
    )
}
Hello.defaultProps = {
    name: '이름없음',
    color: 'aqua'
}

// Hello 컴포넌트를 모듈화 하기!!
export default Hello;