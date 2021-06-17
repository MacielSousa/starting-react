import React from 'react';

const Formulario = () => {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);
    }
    return <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input 
            id="nome"
            type="text"
            name="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input 
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input 
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
        />
        
        <button>Enviar</button>
         </form>
}

export default Formulario;

