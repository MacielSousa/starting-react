import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
    display: flex;
`;

const Produto = styled.div`
    flex: 1;
`

const Titulo = styled.h1` 
    font-size: 3rem;
    color: tomato;
`;

const Paragrafo = styled.p`
    font-size: 1.5rem;
    color: green;
`;

//Aplicando css por propriedade
const Preco = styled.p`
    background: hsl(${Math.random() * 360}, 100%, 50%);
    color: white;
`;

const Comprar = styled.button`
    background: ${({ativo}) => ativo ? '#000': '#fff'};
    font-size: 1rem;
    border: 2px solid #000;
    border-radius: 5px;
    padding: 0.5rem;
    color:${({ativo}) => ativo ? '#fff': '#000'};
    cursor: pointer;
    &:hover {
        background: tomato;
    }
`;

const AppCss = () => {

    const [ativo, setAtivo] = React.useState(true);

    function template(value, total){
        console.log(value);
        console.log(total);
    }
    const total = 1000;
    template`Isso é ${total} um teste`;

    return <div>
        <Comprar ativo={ativo} onClick={(() => setAtivo(!ativo))}>Compre Aqui</Comprar>
        <ProdutosContainer>
            <Produto>
                <Titulo>Notebook</Titulo>
                <Paragrafo>Tablet</Paragrafo>
                <Preco cor="pink">R$ 5000</Preco>
            </Produto>
            <Produto>
                <Titulo>Smartphone</Titulo>
                <Paragrafo>Mi Band</Paragrafo>
                <Preco cor="red">R$ 1700</Preco>
            </Produto>
        </ProdutosContainer>
    </div>
}

export default AppCss;