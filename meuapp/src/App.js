import React from 'react';
import Produtos from './Hooks/DesafioHookEffect/Produtos';

const App = () => {

    const [produto, setProduto] = React.useState(null)

    React.useEffect(() => {
        const produtoLocal = window.localStorage.getItem('produto');
        if(produtoLocal !== null) setProduto(produtoLocal)
        console.log(produtoLocal);
    }, [])

    React.useEffect(() => {
       if(produto !== null) window.localStorage.setItem('produto', produto);
    }, [produto])

    function handleClick({target}){
        setProduto(target.innerText)
    }

    return (
        <div>
            <h1>Preferências: {produto}</h1>
            <button style={{margin: '1rem'}} onClick={handleClick}>notebook</button>
            <button style={{margin: '1rem'}} onClick={handleClick}>smartphone</button>
            <Produtos produto={produto}/>
        </div>
    );
    
};

export default App;