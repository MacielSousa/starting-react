import React from 'react';

const LinkComponente = ({nome, link, estilo}) => {
    return (
        <>
         <li style={{listStyleType: "square"}}><a href={link}>{nome}</a></li>
        </>
    )
}

export default LinkComponente;