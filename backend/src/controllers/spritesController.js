import Sprite from '../models/sprites'

const index = async (req,res) =>{
    const {name} = req.query
    const sprites = await Sprite.find({
        generation:name
    })
    res.json(sprites)
}
const store = async (req,res)=>{
    const {title,author,generation} = req.body
    const img = req.file.filename
    const sprite = await Sprite.create({
        title,
        author,
        generation,
        img
    })
    res.send(sprite)
}

const update = async(req,res) =>{

}

const delet = async(req,res) =>{

}
const spritesController = {index,store}

export default spritesController