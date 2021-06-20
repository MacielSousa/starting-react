import React from 'react';

const Input = ({id, label, value, onChange, required, type, onBlur, placeholder, error }) => {
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
                placeholder={placeholder}
                onBlur={onBlur}
                type={type}
                                
            />
            {error && <p>{error}</p>}
        </>
    )


}

export default Input;