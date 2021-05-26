import React from 'react'

const produtos = [
    {
        id: 1,
        nome: 'Smartphone',
        preco: 'R$ 2000',
        cores: ['#29d8d5', '#252a34', '#fc3766']
    },
    {
        id: 2,
        nome: 'Notebook',
        preco: 'R$ 3000',
        cores: ['#ffd045', '#d4394b', '#f38c59']
    },{
        id: 3,
        nome: 'Tablet',
        preco: 'R$ 1500',
        cores: ['#365069', '#47c1c8', '#f95786']
    }
]
const limparPreco = (preco) => {
    return parseInt(preco.replace('R$ ', ''))
}

const Produtos = () => {
    return (
        <>
            {
                produtos.filter(({preco}) => limparPreco(preco) > 1500)
                .map(({nome, preco, cores}) => (
                    <>
                    <h1 key={nome} >{nome}</h1>
                    <p key={preco} >Preço: <span key={preco} >{preco}</span></p>
                    {
                        cores.map(cor => (
                            <p style={{background: cor, color: "white"}} key={cor}>{cor}</p>
                        ))
                    }
                    </>
                ))
            }
        </>
    )
}

export default Produtos;