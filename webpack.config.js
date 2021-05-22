module.exports = {
    //Nos módulos
    module: {
        //Aplique as seguintes regras
        rules: [
            {
                //Nos arquivos que terminam ($) com .css
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                //Nos arquivos que terminam ($) com .html
                test: /\.js$/,
                //Não procura nada em node_modules
                exclude: /node_modules/,
                // Use o seguinte
                use: {
                    //Babel
                    loader: 'babel-loader',
                    //Com os opções padrões para o React
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            }
        ]
    }
}