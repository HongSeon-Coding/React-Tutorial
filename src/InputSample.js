import React , { useState, useRef } from 'react';

function InputSample() {
    const [ inputs, setInputs ] = useState({
        name:'',
        nickname:'',
    });
    const nameInput = useRef();
    const { name , nickname} = inputs;
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({ 
            ...inputs,
            [name]: value,
        });
    }
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus();
    }
    return(
        <div>
            <input name='name' placeholder='Name' onChange={onChange} value={name} ref={nameInput}></input>
            <input name='nickname' placeholder="NickName" onChange={onChange} value={nickname}></input>
            
            <button onClick={onReset}>초기화</button>
            <div>
                <b>value : </b>
                {name}, {nickname}
                
            </div>
        </div>
    )
}
export default InputSample;