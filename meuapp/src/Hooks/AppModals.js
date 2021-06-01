import React, {Component} from 'react'
import ButtonModal from './Hooks/ButtonModal';
import Modal from './Hooks/Modal';

const App = () => {
    const [modal, setModal] = React.useState(false);

   
    return (
        <div>
         
            <Modal modal={modal} setModal={setModal} />
            <ButtonModal setModal={setModal}/>

        </div>
    );
    

};

export default App;