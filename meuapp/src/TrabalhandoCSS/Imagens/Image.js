import React from 'react'
import foto from './img/Dog1.jpg';
import './Imagem.css'
const Image = ()  =>  {

    return <div>
        <p className="fundo"></p>
        <img src={foto} alt="Cachorro"/>
    </div>
}

export default Image;