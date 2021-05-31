module.exports = function gerar(qct=5) {
    let string=""
    let lista="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    for(let i=0;i<qct;i++){
        let r=lista.charAt(Math.floor(Math.random() * lista.length))
        string+=r
    }
    return string
}