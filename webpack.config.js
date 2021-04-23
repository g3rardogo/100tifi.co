//Acceder a la variable path que nos permitira saber en que directorio nos encontramos y hacia donde nos moveremos
const path = require('path');
//Asignando el plugin de HTML Webpack a una variable
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

//Modulo que exporta la configuracion
module.exports = {
    //Punto de entrada
    entry: './src/index.js',
    //Ruta a la que enviaremos el codigo listo y preparado para produccion
    output: {
        path: path.resolve(__dirname, 'dist'),
        //Nombre del archivo ya compilado
        filename: 'main.js'
    },
    //Trabajando sobre las extensiones
    resolve: {
        extensions: ['.js'],
    },
    //Modulo de las reglas
    module: {
        rules: [
            {
                //Extensiones que usaremos en el loader
                test: /\.m?js$/,
                //Excluyendo la carpeta node_modules
                exclude: /node_modules/,
                //Indicamos que utilizaremos el babel loader
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    //Seccion de plugins
    plugins: [
        new HtmlWebpackPlugin(
            {
                //Indicamos que vamos a injectar un valor al archivo HTML
                inject: true,
                //Ruta de donde se encuentra el template principal
                template: './public/index.html',
                //Nombre y ruta que tendra el archivo final, en este caso partimos de la carpeta dist
                filename: './index.html',
            }
        ),
        new CopyWebpackPlugin([{
            from: './src/styles/styles.css',
            to: '',
        }]),
    ]
}