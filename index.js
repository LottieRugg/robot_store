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
    return {
            "status": status,
            "message": message,
            "data": data
        }

}

app.get('/products', async (req,res) => {
    const connection = await getDb()
    const items = await connection.query('SELECT `id`, `image`, `title`, `price` FROM `products`; '
    )
    res.json(responseFormat(200,successMessage, items))
})

app.get('/products/:id', async (req, res) => {
    const userId = req.params.id
    if ( !Number.isInteger(parseInt(userId))){
        res.json(responseFormat(400, 'please check the id entered'))
    } else {
        const connection = await getDb()
        const itemById = await connection.query('SELECT `id`, `title`, `price`, `image`, `category_id`, `category` ' +
            '`character_id`, `character`, `description`, `image2`, `image3` FROM `products` WHERE `id` = ? ', [userId]
        )
        if (itemById.length==0){
            res.json(responseFormat(400,'There is no item matching that ID, please try again'))
        } else {
            res.json(responseFormat(200, successMessage, itemById[0]))
        }
    }

})

app.listen(port)
