import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
    const global = React.useContext(GlobalContext);
    if(global.dados === null) return null;
    return <div>
        <h3>Produto:</h3>
        {global.dados.map((produto, index) => <>
        <li key={produto.id}>
            {produto.nome}
        </li> 
        </>)}
    </div>
}

export default Produto;