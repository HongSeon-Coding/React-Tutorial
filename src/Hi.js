import React from 'react';


function Hi({ color, name }){
    console.log(name);
    return(
        <div style={{
            color:color
        }}>Hi~ {name}</div>
    )
}
// 기본값 사용을 위한 defaultProps
Hi.defaultProps = {
    color: 'pink'
}

export default Hi;
