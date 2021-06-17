import React from 'react';
import useFetch from './Hooks/Custom Hooks/useFetch';
import useLocalStorage from './Hooks/Custom Hooks/useLocalStorage';


const App = () => {
const [produto, setProduto] = useLocalStorage('produto', '')
const {request, data, loading, error} = useFetch();


React.useEffect(() => {
    async function fetchData() {
       const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/');
        console.log(response, json);
    }
    fetchData();
}, [request])

function handleClick ({target}) {
    setProduto(target.innerText);
}

    if(error) return <p>{error}</p>
    if(loading) return <p>Carregando...!</p>
    if(data === null) return null;
    if(data)
        return <div>
            <p>Produto preferido: {produto}</p>
            <button onClick={handleClick}>notebook</button>
            <button onClick={handleClick}>smartphone</button>
            {data.map((produto) => (
                <div key={produto.id}>
                    <h1>{produto.nome}</h1>
                </div>
            ))}
        </div>
    else return null;
    
};

export default App;