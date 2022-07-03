const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')

const config = {
    host: 'db',
    user: 'root',
    password: '15a20c30ba',
    database: 'nodedb'
}
const connection = mysql.createConnection(config)
const sql = `INSERT INTO people (name) VALUES ('Samuel')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Full cycle</h1>')
})

app.listen(port, () => {
    console.log('rodando na porta '+port);
})