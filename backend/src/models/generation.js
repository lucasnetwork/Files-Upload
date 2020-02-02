import mongoose,{Schema} from 'mongoose'

const generationSchema = new Schema({
    name: String
})

export default mongoose.model('generation',generationSchema)