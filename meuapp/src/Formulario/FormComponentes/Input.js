import React from 'react';

const Input = ({id, label, value, onChange, required, type, onBlur, placeholder, error }) => {
    return (
        <>
            <label htmlFor={id}>
                <input 
                    id={id}
                    name={id} 
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    onBlur={onBlur}
                    type={type}                  
                />
                {label}
            </label>
            {error && <p>{error}</p>}
        </>
    )


}

export default Input;