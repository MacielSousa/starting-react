# starting-react
# create-react-app

Cria um ambiente de desenvolvimento já configurado e otimizado para a criação de aplicativos com React. https://create-react-app.dev/

npx create-react-app meuapp

npx é um comando do NPM que executa diretamente um pacote online, sem a necessidade de instalarmos o pacote na nossa máquina. A vantagem é que ele irá sempre instalar a versão mais atualizada do ambiente criado por create-react-app.

Estrutura Básica
- node_modules
- public
    - index.html
- src
    - index.js
- package.json
- package-lock.json

Código básico para o index.html

<html lang="pt-Br">
    <head>
        <meta charst="utf-8">
        <title>React App</title>
    </head>

    <body>
        <div id="root"></div>
    </body>
</html>

Código Básico para o index.js
import ReactDOM from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<div>Meu App</div>, document.getElementById('root'))

Comando para startar projeto

npm start

Criar a build final

npm build