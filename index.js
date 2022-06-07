const express = require('express')
const mysql = require('promise-mysql')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const getDb = async () => {
    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'password',
        database: 'robot_store'
    })
}
const successMessage = 'The database request was successful'

const responseFormat =  (status, message, data) => {
    const formattedResponse =
        {
            "status": status,
            "message": message,
            "data": data
        }
        return formattedResponse
}

app.get('/products', async (req,res) => {
    const connection = await getDb()
    const items = await connection.query('SELECT `id`, `image`, `title`, `price` FROM `products`; '
    )
    res.json(responseFormat(200,successMessage, items))
})

app.get('/products/:id', async (req, res) => {
    const connection = await getDb()
    const userId = req.params.id
    const itemById = await connection.query('SELECT `id`, `title`, `price`, `image`, `category_id`, `category` ' +
        '`character_id`, `character`, `description`, `image2`, `image3` FROM `products` WHERE `id` = ' + userId
    )

    res.json(responseFormat(200, successMessage, itemById))
})

app.listen(port)
