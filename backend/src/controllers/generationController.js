import Generation from '../models/generation'
const index = async (req,res) =>{
    const generations = await Generation.find()
    res.json(generations)
}

const store = async (req,res) =>{
    const {name} = req.body
    const generation = await Generation.create({
        name
    })

    return res.json(generation)
}

const generationController = {index,store}
export default generationController