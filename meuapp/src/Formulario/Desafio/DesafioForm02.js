import React, { useState } from 'react';
import Input from '../FormComponentes/Input'
const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];

const DesafioForm02 = () =>{

    let resp = "";
    let acertos = 0;
    const [resposta, setResposta] = useState([]);
    const [questao, setQuestao] = useState(0);

    function handleChange({target}){
      resp = target.value;
    }

    function pontos(){
      perguntas.forEach((pergunta, index) => {
        console.log('Perguntar: '+pergunta.resposta, 'Index: '+index);
        if(pergunta.resposta === resposta[index]){
          acertos = acertos + 1;
        }
      });
    }

    function handleSubmit(event){
      event.preventDefault();
      if(resposta.length === 0){
        setResposta([resp]);
      }else{
       setResposta([...resposta, resp])
      }
      let cont = questao+1;
      setQuestao(cont);
      event.target.reset()
    }
    
    return (
    <>
    {questao < perguntas.length ?
        <form onSubmit={handleSubmit}>
          <fieldset>
              <legend>{perguntas[questao].pergunta}</legend>
              {perguntas[questao].options.map((op) => <div>
                  <Input type="radio" id="produto" label={op} value={op} onChange={handleChange}/>
              </div>)}
          </fieldset>
          <button style={{marginTop: "10px"}}>Avançar</button>
        </form>
     :
     <>
      {pontos()}
      <p>Você Acertou: {acertos}</p>
     </>
    }
    </>
    )
}
export default DesafioForm02;