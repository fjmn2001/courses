import express from 'express'

const app = express()
const port = 3000

app.get('/', (_req, res) => {
    // res.status(401).json({
    //     ok: false,
    //     message: 'Without token'
    // })
    res.status(200).json({
        ok: true,
        message: 'Wohooo with TS'
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})