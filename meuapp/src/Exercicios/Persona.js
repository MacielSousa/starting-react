import React from 'react';

const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
        {nome: 'NoteBook', preco: 'R$ 2500'},
        {nome: 'geladeira', preco: 'R$ 3000'},
        {nome: 'Smatphone', preco: 'R$ 1500'}
    ],
    ativa: true
}

const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
        {nome: 'Notebook', preco: 'R$ 2500'},
        {nome: 'Geladeira', preco: 'R$ 3000'},
        {nome: 'Smartphone', preco: 'R$ 1500'},
        {nome: 'Guitarra', preco: 'R$ 3500'}
    ],
    ativa: false,
}

const totalGasto = (compras) => {

    const total =  compras.map(itens => parseInt(itens.preco.replace('R$', '')))
    return total.reduce((acumulado, numero) => acumulado + numero);

}

const corSituacao = (ativa) => {
    let cor = ativa ? 'green' : 'red';
    return {color: cor};
}

const Persona = () =>  {
  const  persona = luana;

    return (
        <>
            <p>Nome: {persona.cliente}</p>
            <p>Idade: {persona.idade}</p>
            <p>Situação: <span style={corSituacao(persona.ativa)}>{persona.ativa ? 'Ativa' : 'Inativa'}</span></p>
            <p>Total gasto: R$ {totalGasto(persona.compras)}</p>
            <p style = {{display: totalGasto(persona.compras) >= 10000 ? 'block' : 'none'}}>Você está gastando muito!</p>
        </>
    );
}

export default Persona;