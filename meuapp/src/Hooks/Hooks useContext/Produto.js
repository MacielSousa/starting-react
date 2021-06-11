import React from 'react';
import UseContext from './UseContext';
import { GlobalContext } from './GlobalContext';
import { GlobalStorage } from './GlobalContext';

const Produto = () => {
    const global = React.useContext(GlobalContext);
    console.log(global);
    return <div>Produto: {global.contar} {' '}
    <button onClick={() => global.adicionarDois()}>Adicionar</button>
    </div>
}

export default Produto;