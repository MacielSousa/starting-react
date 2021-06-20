import React, { useState } from 'react';
import Checkbox from './Formulario/FormComponentes/Checkbox'

const App = () => {

    const [ingre, setIngre] = useState(['Sal Grosso', 'Vinagrete']);
        return(
            <form>
                <h3>Ingredientes Churrasco</h3>
                <Checkbox 
                options={['Carne', 'Carvão', 'Sal Grosso', 'Vinagrete']} 
                value={ingre} 
                setValue={setIngre}
                />
            </form>
         );
}

export default App;