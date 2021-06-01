import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
    const arr = ['Item 1', 'Item 2'];
    return(
        <div style={{margin: "1rem"}}>
            <Input id="email" label="Email" required />
            <Input id="senha" type="password" label="Senha"/>
            <Button items={arr} />
        </div>
    )
}

export default Form;