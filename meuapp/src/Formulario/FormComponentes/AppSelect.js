import React, { useState } from 'react';
import Select from './Formulario/FormComponentes/Select'

const App = () => {

    const [value, setValue] = useState();
        return(
            <form>
                <Select options={['notebook', 'tablet', 'smatphone']} value={value} setValue={setValue}/>
            </form>
         );
}

export default App;