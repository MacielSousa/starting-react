import React from 'react';
import UseContext from './UseContext';

const Produto = () => {

    const dados = React.useContext(UseContext);
    console.log(dados);

    return <div>{dados.nome}</div>
}

export default Produto;