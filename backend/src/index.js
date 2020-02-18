import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './routes'
import {connect} from './.env'

const app = express()
mongoose.connect(connect,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(express.json()) 
app.use(routes)
app.listen(3333,() => console.log("Api rodando na porta 3333"))
