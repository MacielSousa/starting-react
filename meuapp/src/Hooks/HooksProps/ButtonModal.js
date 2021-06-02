import React from 'react';


const ButtonModal = ({setModal}) => {

    function handlerClick(){
        setModal((ativo) => !ativo)
    }
    return <button onClick={handlerClick}>Abrir</button>
}

export default ButtonModal;