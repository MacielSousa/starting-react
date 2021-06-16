import React from "react";
import { GlobalContext } from './GlobalContext';


const CleanProduto =  () => {
    const global = React.useContext(GlobalContext);
    return <button onClick={()=> {global.setDados(null)}}>Limpar</button>
}


export default CleanProduto;