import mongoose,{Schema} from 'mongoose'
import bcrypt from 'bcrypt-nodejs'
const UserSchema = new Schema({
    email: String,
    hash:String,
})
UserSchema.methods.setPassword = function(password){
    const salt = bcrypt.genSaltSync(10)
    this.hash = bcrypt.hashSync(password,salt)
}

export default mongoose.model('User',UserSchema)