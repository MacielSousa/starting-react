import Ract from 'react';


const Button = ({nomeProduto, setProduto, setArrayProdutos, setCarregando}) => {

    
   async function fetchProdutos(){
        setCarregando(true);
        let nome = (nomeProduto)
        let url = 'https://ranekapi.origamid.dev/json/api/produto/'+nome;
        const resp = await fetch(url)
        const json = await resp.json();
        setArrayProdutos(json)
        setCarregando(false);
    }
    

    function getProdutos(){
        fetchProdutos({nomeProduto})
        setProduto((nomeProduto.toString()))
    }

    return <button style={{margin: "10px", width: "200px", height: "65px"}} onClick={getProdutos}>{nomeProduto}</button>
    
}

export default Button;