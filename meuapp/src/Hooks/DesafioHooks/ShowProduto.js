import React from 'react';


const ShowProduto = ({produto, arrayProdutos, carregando}) =>{
    return <>
    {
       ['tablet', 'smartphone', 'notebook'].indexOf(produto.valueOf()) > -1 && (arrayProdutos != null) && (!carregando)
       ? 
       <div>
            {!carregando && <p>Carregando...</p>}
            <h1>{arrayProdutos.nome}</h1>
            <p>R$ {arrayProdutos.preco}</p>
            <img src={arrayProdutos.fotos[0].src}/>
       </div>
       : 
       null
    }
    </>
}

export default ShowProduto;