import React from 'react';

const Input  = ({label, id, ...porps}) => {
    console.log(porps)
    return <div>
        <label htmlFor="id">{label}</label>
        <input id={id} type="text" {...porps}/>
    </div>
}

export default Input;