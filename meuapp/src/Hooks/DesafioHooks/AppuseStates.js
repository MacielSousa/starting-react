import React from 'react';
import Button from './Hooks/DesafioHooks/Button';
import ShowProduto from './Hooks/DesafioHooks/ShowProduto';


const App = () => {

    const [produto, setProduto] = React.useState('produto')
    const [arrayProdutos, setArrayProdutos] = React.useState(null);
    const [carregando, setCarregando] = React.useState(null);



    return (
        <div>
           <Button nomeProduto='tablet' setProduto={setProduto}  setArrayProdutos={setArrayProdutos} setCarregando={setCarregando}/>
           <Button nomeProduto='smartphone' setProduto={setProduto} setArrayProdutos={setArrayProdutos} setCarregando={setCarregando}/>
           <Button nomeProduto='notebook' setProduto={setProduto} setArrayProdutos={setArrayProdutos} setCarregando={setCarregando}/>
           <ShowProduto produto={produto} arrayProdutos={arrayProdutos} carregando={carregando}/>
        </div>
        

    );
    

};

export default App;