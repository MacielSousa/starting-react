import React, { useState } from 'react';
import Radio from './Formulario/FormComponentes/Radio'

const App = () => {

    const [cor, setCor] = useState('Vermelho');
    const [fruta, setFruta] = useState('Manga');

        return(
            <form>
                <h3>Cores</h3>
                <Radio options = {["Azul", "Vermelho", "Verde", "Rosa"]} value={cor} setValue={setCor}/>
                <h3>Frutas</h3>
                <Radio options = {["Laranja", "Maçã", "Manga", "Jabuticaba"]} value={fruta} setValue={setFruta}/>
            </form>
         );
}

export default App;