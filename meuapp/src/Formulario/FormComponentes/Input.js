import React from 'react';

const Input = ({id, label, value, onChange, required, ...props }) => {
    return (
        <>
            <label htmlFor="id">{label}</label>
            <input 
                id={id}
                name={id} 
                type="text"
                value={value}
                onChange={onChange}
                required={required}
                {...props}
            />
        </>
    )


}

export default Input;