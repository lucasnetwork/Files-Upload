import jwt from 'jsonwebtoken'
import {secret} from '../.env'

const validateToken = (req,res) =>{
    const {authorization} = req.headers
   try{
        if(!authorization) throw "sem token"
        jwt.verify(authorization,secret)
   }catch(e){
        return res.status(400).send(false)
   }
   return res.send(true)
}
const generateJWT = ({_id,email})=>{
    const payload = {
        _id,
        email,
    }
    const token = jwt.sign(payload,secret,{expiresIn:"2 days"})
    return {
        ...payload,
        token
    }
}
export {generateJWT,validateToken}