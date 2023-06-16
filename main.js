let val = document.getElementById("count-el")
let saved_str = document.getElementById("save-el")

console.log(saved_str.innerHTML.length)

let count = 0

function increase() {
    count = count + 1
    console.log(count)
    val.innerHTML = count
}

function decrease() {
    count = count - 1
    console.log(count)
    val.innerHTML = count
}

function save() {
    console.log(saved_str.innerHTML.length)

    if (saved_str.innerHTML.length >= 1) {
        saved_str.innerHTML = saved_str.innerHTML + ", " + count
    }
    else {
        saved_str.innerHTML = saved_str.innerHTML + count
    }
    count = 0
    val.innerHTML = 0
}

function clear() {
    console.log("clearing")
    saved_str.innerHTML = " "
    count = 0
}
