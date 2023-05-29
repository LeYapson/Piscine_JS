const get = (get) => sourceObject[get]
console.log(get("num"))

function set (key, value) {
    sourceObject[key] = value;
    return sourceObject[key];
}