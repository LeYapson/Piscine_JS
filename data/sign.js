function sign(nb) {
    if(nb==0) {
        return 0
    } else if(nb > 0) {
        return 1
    } else {
        return -1
    }
}
console.log(sign(-12))

function sameSign(x,y) {
    return(sign(x)==sign(y));
}
console.log(sameSign(14,0))