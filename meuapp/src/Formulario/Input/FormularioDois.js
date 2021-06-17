import React from 'react';

const FormularioDois = () => {
    const [form, setForm] = React.useState({
        nome: '',
        email: '',
        password: ''
    });
    

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);
    }

    function handleChange({target}){
        const {id, value} = target;
        console.log(id, value)
        setForm({...form, [id]: value});
    }
    return <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input 
            id="nome"
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
        />
        {form.nome}
        <label htmlFor="email">Email</label>
        <input 
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
        />
        {form.email}
        <label htmlFor="password">Password</label>
        <input 
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
        />
        {form.password}
        <br/>
        <button>Enviar</button>
         </form>
}

export default FormularioDois;