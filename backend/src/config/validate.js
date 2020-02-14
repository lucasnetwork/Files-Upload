function existOrError(value,msg){
    if(!value) throw msg
    if(value.lenght === 0) throw msg
}

function notExistOrError(value,msg){
    try{
        existOrError(value,msg)
    }catch(msg){
        return
    }
    throw msg
}

export {existOrError,notExistOrError}