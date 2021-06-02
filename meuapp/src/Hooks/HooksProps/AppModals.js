import React, {Component} from 'react';
import ButtonModal from './Hooks/ButtonModal';
import Modal from './Hooks/Modal';

const App = () => {
    const [modal, setModal] = React.useState(() => true);
    const [itens, setItens] = React.useState('Teste')
    
    console.log('log');
    function handlerClick(){
        setItens('Outro');
    }
   
    return (
        <div> 
            <p>{itens}</p>
            <button onClick={handlerClick}>Clicar</button>
            <Modal modal={modal} setModal={setModal} />
            <ButtonModal setModal={setModal}/>

        </div>
    );
    

};

export default App;