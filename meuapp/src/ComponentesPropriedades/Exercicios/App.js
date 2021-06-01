import React from 'react';

const titulo = <h1>Esse é o meu Titulo</h1>

const App = () => {

    const random = Math.random();
    const ativo = false;
    function mostrarNome(sobreNome) {
        return 'Maciel ' + sobreNome
    }

    const carro = {
        nome: 'Fusca',
        rodas: '4',
        marca: 'Sei lá'
    }

    const estiloP = {
        color: "red",
        fontSize: '2rem'
    }

    return (
        <>
            {titulo}
            <p>{false ? 'Verdadeiro' : 'Mais falso que nota de 400'} - {10}</p>
            <p style={estiloP}>{mostrarNome('Sousa')}</p>
            <p>{new Date().getFullYear()}</p>
            <p>{carro.marca}</p>
            <p>{carro.rodas}</p>
            <p>{carro.nome}</p>
            <p className={ativo ? 'ativo' : 'inativo'}>{random * 100}</p>
        </>
    );
}

export default App;