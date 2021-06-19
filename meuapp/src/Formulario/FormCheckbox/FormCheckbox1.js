import React from 'react';

const FormCheckbox1 = () => {

    const [cores, setCores] =  React.useState(['vermelho', 'amarelo']);
    function handleChange({target}) {
        if(target.checked){
            setCores([...cores, target.value])
        }else {
            setCores(
                cores.filter((cor) => cor !== target.value)
            );
        }
    }

    return <form>
        <label>
           <input 
                type="checkbox"
                value="azul"
                checked={cores.includes('azul')}
                onChange={handleChange}
            />
           Azul
        </label>
        <label>
           <input 
                type="checkbox"
                value="vermelho"
                checked={cores.includes('vermelho')}
                onChange={handleChange}
            />
           vermelho
        </label>
        <label>
           <input 
                type="checkbox"
                value="amarelo"
                checked={cores.includes('amarelo')}
                onChange={handleChange}
            />
           Amarelo
        </label>
    </form>
}

export default FormCheckbox1;