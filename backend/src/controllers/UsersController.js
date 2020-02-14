import bcrypt from 'bcrypt-nodejs'
import User from '../models/user'

import {generateJWT} from '../config/auth'
import {existOrError,notExistOrError} from '../config/validate'

const store = async(req,res)=>{
    const {email,password} = req.body
    try{
        existOrError(email,"email não informado ")
        existOrError(password,"Senha não informada")

        const existeUser = await User.findOne({email})
        notExistOrError(existeUser,"Usuario já existe")
    }catch(msg){
        return res.status(400).send(msg)
    }

    const finalUser = new User({email})
    finalUser.setPassword(password)
    
    const response = await finalUser.save()
    return res.json(generateJWT(response))
}
const index = async(req,res) =>{
    const {email,password} = req.body
    
    try{
        existOrError(email,"Email não informado")
        existOrError(password,"Senha não informada")
        const user = await User.findOne({email})
        existOrError(user.email,"Usuário não existe")
    }catch(msg){
        return res.status(400).send(msg)
    }
    const isMatch = bcrypt.compareSync(password,user.hash)
    if(isMatch) {
        return res.json(user)
    }else{
        return res.status(400).send("senha invalida")
    }
}

const userController = {store,index}

export default userController