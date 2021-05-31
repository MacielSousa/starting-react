import React, {Component} from 'react'
import LinkComponente from './DesafioComponente/LinkComponente'
import ListProdutos from './DesafioComponente/ListProdutos'

const App = () => {

    return <>
        <LinkComponente nome="Home" link='http://localhost:3000/' estilo = 'listStyleType: "square"'  />
        <LinkComponente nome="Produto" link='http://localhost:3000/produtos' estilo = 'listStyleType: "square"'/>
        { 
                window.location.href == 'http://localhost:3000/' 
                ?
                <>
                <h3 style={{color: "green"}}>Home</h3>
                <p>Essa é a home do Site</p>
                </>
                : 
                <>
                <h3 style={{color: "green"}}>Produtos</h3>
                {
                    <ListProdutos />
                }
                </>
        }
    </>

}

export default App;