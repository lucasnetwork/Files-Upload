import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'
import bodyParser from 'body-parser'
const app = express()
mongoose.connect("mongodb+srv://lucas:1234@cluster0-5dcar.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(3333,() => console.log("Api rodando na porta 3333"))