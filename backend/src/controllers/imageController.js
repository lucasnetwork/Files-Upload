import path from 'path'
const index = (req,res) =>{
    const filename = req.params.id
    res.sendFile(path.resolve(__dirname,'..','tmp','uploads',filename))
}

const imageController = {index}
export default imageController