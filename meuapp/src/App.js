import React from 'react';
import Produto from './Hooks/Hooks useContext/Produto';
import { GlobalStorage } from './Hooks/Hooks useContext/GlobalContext';

const App = () => {
    return (
           <GlobalStorage>
                <Produto />
           </GlobalStorage>
    );
    
};

export default App;