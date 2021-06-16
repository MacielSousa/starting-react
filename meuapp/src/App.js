import React from 'react';
import Produto from './Hooks/Desafio useContext/Produto';
import { GlobalStorage } from './Hooks/Desafio useContext/GlobalContext';
import CleanProduto from './Hooks/Desafio useContext/CleanProduto'

const App = () => {
    return (
           <GlobalStorage>
                <Produto />
                <CleanProduto />
           </GlobalStorage>
    );
    
};

export default App;