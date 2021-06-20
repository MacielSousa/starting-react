import React from 'react';
import Input from './Formulario/FormComponentes/Input'

const App = () => {
    const [cep, setCep] = React.useState('');
    const [erro, setErro] = React.useState(null);

    function validateCep(value) {
        if(value.length === 0) {
            setErro('Preencha um valor');
            return false;
        }else if(!/^\d{5}-?\d{3}$/.test(value)){
            setErro('Preencha um CEP válido');
            return false;
        }else {
            setErro(null);
            return true;
        }
    }

    function handleBlur({target}){
        validateCep(target.value);
    }

    function handleChange({target}) {
       if(erro) validateCep(target.value);
       setCep(target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(validateCep(cep)) {
            console.log('Enviou!');
        }else {
            console.log('Não enviar!');
        }
    }
        return(
            <form onSubmit={handleSubmit}>
                <Input 
                    label="CEP" 
                    id="cep" 
                    type="text" 
                    placeholder="00000-000" 
                    value={cep}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    setValue={setCep}
                />
                {erro && <p>{erro}</p>}
                <button>Enviar</button>
            </form>
         );
}

export default App;