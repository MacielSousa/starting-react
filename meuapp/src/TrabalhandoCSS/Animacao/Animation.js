import React from 'react'
import Produto from '../Animacao/Produto'
import './AnimationCss.css'

const Animation = () => {
    const [ativar, setAtivar] = React.useState(false);
    return (
        <div>
            <button onClick={()=> {setAtivar(!ativar)}}>Ativar</button>
            {ativar && <Produto />}
        </div>
    )
}

export default Animation;