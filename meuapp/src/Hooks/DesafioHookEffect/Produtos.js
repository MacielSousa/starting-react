import React from 'react';

const Produtos = ({produto}) => {

    const [dados, setDados] = React.useState(false);
    React.useEffect(() => {
        if(produto !== null) {
            fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
            .then((resp) => resp.json())
            .then((json) => setDados(json))
        }
    },[produto])

    if (dados === null) return null;
    return (
        <>
        <h1>{dados.nome}</h1>
        <p>R$ {dados.preco}</p>
        </>
    )
}

export default Produtos;