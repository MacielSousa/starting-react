import React, { memo } from 'react';

function opercaoLenta() {
    let c;
    for(let i = 0; i < 100000000; i++){
        c = i + i / 10;
    }
    return c;
}
const ExemploUm  = () => {
    const [contar, setContar] = React.useState(0);

    /** Exemplo que deixa o desenpenho em baixa performance
         const valor = React.useMemo(() => {
            const localItem = window.localStorage.getItem('produto');
            console.log('Aconteceu o memo');
            return localItem
        }, []) 
     */
    const t1 = performance.now();
    const valor = React.useMemo(() => opercaoLenta(), []);
    console.log(valor);
    console.log(performance.now() - t1)

    return <button onClick={() => setContar(contar + 1)}>{contar}</button>
};

export default ExemploUm;