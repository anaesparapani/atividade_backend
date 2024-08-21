const express = require('express') //Importa o módulo Express

//Define uma clase para organizar a lógica da aplicação
class AppController{

    constructor(){
        this.express = express();//Cria uma nova instância do Express dentro da classe
        this.middlewares();//Chama o método middlewares para configurar os middlewares
        this.routes();//Chama o método routes para definir as rotas da Api
    }
    middlewares(){
        //Permitir que a aplicação receba dados em formato JSON nas requisições 
        this.express.use(express.json());
    }

    //Define as rotas da nossa API
    routes(){
        //Define uma rota GET para o caminho health
        this.express.get("/health/" ,(req, res) => {
            res.send({ nome:"Ana Clara", idade: "16", CPF: "43083688806" });
        });//Essa rota é usada para mostrar as informações
    }
}

//Exportando a instância de Express configurada, para que seja acessada em outros arquivos
module.exports = new AppController().express;