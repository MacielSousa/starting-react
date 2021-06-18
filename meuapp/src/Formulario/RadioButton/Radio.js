import React from 'react';

const Radio = () => {
    const [rad, setRad] = React.useState('');
    const [cor, setCor] = React.useState('');

    function handleChange({target}){
        setRad(target.value);
    }

    function handleChangeCor({target}){
        console.log(target.value)
        setCor(target.value);
    }

    return <div>

<h1>Cores</h1>
        <label>
            <input
                type="radio"
                name="cores"
                value="azul"
                //checked={cor === 'azul'}
                onChange={handleChangeCor} 
            />
            Azul
        </label>
        <label>
            <input
                type="radio"
                name="cores"
                value="amarelo"
                //checked={cor === 'amarelo'}
                onChange={handleChangeCor} 
            />
            Amerelo
        </label>
        {cor}


        <h1>Produtos</h1>
        <label>
            <input
                type="radio"
                //name="produto"
                value="notebook"
                checked={rad === 'notebook'}
                onChange={handleChange} 
            />
            Notebook
        </label>
        <label>
            <input
                type="radio"
                //name="prodtuo"
                value="smartphone"
                checked={rad === 'smartphone'}
                onChange={handleChange} 
            />
            Smartphone
        </label>
        {rad}
    </div>
}

export default Radio;