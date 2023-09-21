const display1 = document.querySelector("#display1")
const display2 = document.querySelector("#display2")
const body = document.querySelector("body")
const button = document.querySelectorAll("button")
const toggle = document.querySelectorAll(".fa-regular")


button.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "ac") {
            display2.value = ""
        }
        else if (btn.id === "de") {
            display2.value = display2.value.slice(0, -1)
        }
        else if (btn.id === "=") {
            display2.value = eval(display2.value).toFixed(2)
        }
        else if(btn.id === "%"){
            display2.value = (display2.value / 100) + "*"
             
        }
        else {
            display2.value += btn.id
        }
    })
})


toggle.forEach((icon) => {
    icon.addEventListener("click", () => {
        if (icon.className.includes("fa-sun")) {
            body.classList.add('light-mode')
        }
        else if (icon.className.includes('fa-moon')) {
            body.classList.remove('light-mode')
        }
    })
})

