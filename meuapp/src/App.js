import React from 'react';
import Produtos from './Hooks/DesafioHookEffect/Produtos';

const App = () => {

    const [dados, setDados] = React.useState(null);
    console.log(window.localStorage.getItem('produto').toLowerCase());

    
    
    return (
        <div>
            <h1>Preferencia: {dados &&(<span>{dados.nome}</span>)}</h1>
            <Produtos nome='notebook' setDados={setDados} dados={dados}/>
            <Produtos nome='tablet' setDados={setDados} dados={dados}/>
            {dados && (
                <div>
                    {window.localStorage.setItem('produto', dados.nome)}
                    <p>{dados.nome}</p>
                    <p>{dados.preco}</p>
                </div>
            )}
        </div>
    );
    
};

export default App;