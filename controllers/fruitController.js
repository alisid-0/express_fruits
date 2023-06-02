const fruitsArr = [`apple`, `mango`, `banana`]

const getFruits = (req,res)=>{
    res.send(fruitsArr)
}

const getFruit = (req,res)=>{
    const sortFruit = fruitsArr.sort()
    const fruitIdx = fruitsArr.indexOf(req.params.name)
    req.params.name == `sort` ? res.send(sortFruit) : res.send(fruitsArr[fruitIdx])
    
}


module.exports = {getFruits, getFruit}