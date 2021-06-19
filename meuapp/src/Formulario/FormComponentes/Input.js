import React from 'react';

const Input = ({id, label, value, setValue, required}) => {
    return (
        <>
            <label htmlFor="id">{label}</label>
            <input 
                id={id}
                name={id} 
                type="text"
                value={value}
                onChange={({ target }) => setValue(target.value)}
                required={required}
            />
        </>
    )


}

export default Input;