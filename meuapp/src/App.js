import React from 'react';
import UseContext from './Hooks/Hooks useContext/UseContext';
import Produto from './Hooks/Hooks useContext/Produto'
const App = () => {
    return (
        <UseContext.Provider value={{nome: 'Maciel'}}>
            <Produto />
        </UseContext.Provider>
    );
    
};

export default App;