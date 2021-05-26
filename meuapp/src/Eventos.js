import React from 'react'

const handleClick = (event) => {
    console.log(event.target)
}

function handleScroll(event) {
    console.log(event)
}

window.addEventListener('scroll', handleScroll)

const Eventos = () => {
    return (
        <>
        <div style={{ height: '200vh'}}>
            <button onClick={handleClick} onMouseMove= {handleClick}>Clique</button>
            <button onClick={(event) => alert(event.target.innerText)}>Compre um violão</button>
        </div>
        </>
    )
}

export default Eventos;