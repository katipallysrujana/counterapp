
let Value = document.getElementById("count");
let increase = document.getElementById("increment")
let decrease= document.getElementById("decrement")
let reset = document.getElementById("reset")


reset.addEventListener("click", () => {


    count = 0
    display()
})

function display() {
    Value.textContent = count;
}

let count = 0

decrease.addEventListener("click", function () {
    count--
    display()

})
increase.addEventListener("click", function () {
     count++
    display()
})