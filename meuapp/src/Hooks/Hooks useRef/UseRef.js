import React from 'react';

const UseRef = () => {
    const [comentorios, setComentarios] = React.useState([]);
    const [input, setInput] = React.useState('teste input');
    const inputElement = React.useRef();
    
   function handleClick(){
       setComentarios([...comentorios, input]);
       setInput('');
       inputElement.current.focus();
   }
    
    return <div>
        <ul>
            {comentorios.map((comentario, index) => (
                <li key={index}>{comentario}</li>
            ))}
            
        </ul>
        <input 
            type="text"
            ref={inputElement}
            value={input}
            onChange={({target}) => setInput(target.value)}
        />
        <br />
        <button onClick={handleClick}>Enviar</button>
    </div>
}

export default UseRef;