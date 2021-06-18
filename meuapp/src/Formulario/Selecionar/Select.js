import React, { useState } from 'react';

const Select = () =>{

    const [selecionar, setSelcionar] = useState('');

    return <div>
        <select
         value={selecionar}
         id='produtos'
         onChange={({ target }) => {setSelcionar(target.value)}}>

            <option disabled value="">Selecione</option>
            <option value="notebook">Notebook</option>
            <option value="smartphone">Smartphone</option>
            <option value="tablet">Tablet</option>
        </select>
        {selecionar}
    </div>
}

export default Select;