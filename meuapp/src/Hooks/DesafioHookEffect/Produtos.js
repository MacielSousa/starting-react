import React from 'react';

const Produtos = ({nome, setDados, dados}) => {

    React.useEffect(() => {
        
      function handleClick(event){
         fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
            .then((resp) => resp.json())
            .then((json) => setDados(json))
        }
        window.addEventListener('click', handleClick)
        return  () => {
            window.removeEventListener('click', handleClick)
        }
    }, [])

    
    return (
        <>
            <button style={{margin: '5px'}}>{nome}</button>
        </>
    )
}

export default Produtos;