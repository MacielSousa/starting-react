import React from 'react';

const ListProdutos = () =>{
    const produtos = [
        {nome: 'NoteNook', propriedades: ['16gb ram', '512gb hd']},
        {nome: 'SmartPhone', propriedades: ['2gb ram', '128gb memoria interna']}
    ]

    return produtos.map(produto => <div> <p key={produto.nome} style={{border: "1px solid", margin: "15px", padding: "15px"}}>
        {produto.nome}
        {produto.propriedades.map(pro => <li key={pro} style={{listStyleType: "square"}}>{pro}</li>)}
    </p> </div>)
}

export default ListProdutos;