const words = (str) => str.split(' ')

console.log(words("un donut sucré au sucre"))

const sentence = (arr) => arr.join(' ')

console.log(sentence(["un","donut","sucré","au","sucre"]))

const yell =(STR) => STR.toUpperCase()

console.log(yell("mais billy, c'est pas homer"))

const whisper = (str) => "*" + str.toLowerCase() + "*"

console.log(whisper(" C'EST HOMERDE! "))

const capitalize = (Str) => Str.charAt(0).toUpperCase() + Str.slice(1);

console.log(capitalize("je suis mort de rire ahah"))
