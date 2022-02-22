function trim(){
    let name = "  functionUp  "
    let result =name.trim()
    console.log(result)
}


function convert (){
    let string = ' FunctionUp'
    let lowerCase = string.toLowerCase()
    let upperCase = string.toUpperCase()
    console.log(lowerCase,upperCase)
}

module.exports.trim=trim
module.exports.convert=convert