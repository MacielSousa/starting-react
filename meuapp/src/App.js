import React from 'react'
import Footer from './Footer'
import Form from './Form/Form'
import Header from './Header'

const Teste = () => {
    const actvi = false;
    if(actvi) return <p>Teste</p>;
    else{
        return null;
    }
}

const App = () => {
    return <>
        <div>App
            <Teste />
            <Header />
                <Form/>
            <Footer />
        </div>
    </>
}

export default App;