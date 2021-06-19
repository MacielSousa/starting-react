import React, { useState } from 'react';
import Input from './Formulario/FormComponentes/Input'

const App = () => {

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();

        return(
            <form>
                <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
                <Input id="email" label="Email" value={email} setValue={setEmail}/>
                <button>Enviar</button>
            </form>
         );
}

export default App;