import React from 'react';

const FormCheckbox1 = () => {

    const [termos, setTermos] =  React.useState(false);
    function hancleCheck(){
        termos ? setTermos(false) : setTermos(true);
    }

    return <form>
        <label>
           <input 
                type="checkbox"
                value="Termos"
                checked={termos}
                onChange={({target})=> setTermos(target.checked)}
            />
           Aceite os Termos. 
        </label>
    </form>
}

export default FormCheckbox1;