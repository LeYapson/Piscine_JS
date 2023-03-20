const escapeStr = "\`,\\,/,\",'"
console.log(escapeStr)

const arr =[4, "2"]
Object.freeze(arr)
console.log(arr)

const obj = {
    str : "hello",

    num : 42,

    bool : true,

    undef : undefined
}
Object.freeze(obj)
console.log(obj)

const nested = {
    arr : [4, undefined, '2'],
    
    obj : {
        str : "hello",
        num : 42,
        bool : true
    },
}
Object.freeze(nested)
console.log(nested)
