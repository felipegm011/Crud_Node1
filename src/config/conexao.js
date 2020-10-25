const mysql = require('mysql');
const environment = "development";
const config = require("./config.js")[environment];

const con = mysql.createConnection({
    host: config.database.host, // O host do banco. Ex: localhost
    user: config.database.user, // Um usuário do banco. Ex: user 
    password: config.database.password, // A senha do usuário. Ex: user123
    database: config.database.database // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

// verificando se houve erro
con.connect((err) => {
    if (err) {
        console.log('Erro ao conectar...', err)
        return
    }
    console.log('Connection Realizada!')
})


// inserindo dados
const agendamento = {matricula: '00000000', nome:'TESTE INSERT', curso: 'TECNOLOGIA DA INFORMAÇÃO'}
con.query('INSERT INTO usuario SET ? ', agendamento, (err,rows) => {
    if(err) throw err
    console.log("Registro incluído com sucesso!!");
})


// atualizando dados
con.query('UPDATE usuario SET matricula = ? where ID = ? ', ['11111111','2'], (err,rows) => {
    if(err) throw err
    console.log("Registro Atualizado com sucesso!!");
})


// deletando registro
con.query('DELETE FROM usuario where ID = ? ', ['2'], (err,rows) => {
    if(err) throw err
    console.log("Registro Excluido com sucesso");
})

// encerrando conexão
con.end((err) => {
    if(err) {
        console.log('Erro ao finalizar conexão...', err)
        return 
    }
    console.log('Conexão encerrada...')
})