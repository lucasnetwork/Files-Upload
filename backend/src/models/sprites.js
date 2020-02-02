import mongoose,{Schema} from 'mongoose'

const spriteSchema = new Schema({
    title: String,
    author: String,
    generation: String,
    img: String
})

export default mongoose.model('Sprite',spriteSchema)