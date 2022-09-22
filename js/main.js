// xu ly cac input form
const inputs = document.querySelectorAll(".form-control[data-type='required']")
inputs.forEach(input => {
    input.addEventListener("input", () => {
        input.setAttribute("required", true)
        console.log(12)
    }, {
        once: true
    })
})

const btnSubmit = document.querySelector("#submit")
btnSubmit.addEventListener("click", () => {
    inputs.forEach(input => {
        input.setAttribute("required", true)
    })
}, {
    once: true
})

//xu ly header
const navBar = document.getElementById("navBar")
const title = document.querySelector(".title")
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navBar.classList.remove("active")
            entry.target.classList.toggle("active")
        } else {
            navBar.classList.add("active")

        }
    })
})

observer.observe(title)

//xu ly animate on scroll
const observeAnimate = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("wow")
                observeAnimate.unobserve(entry.target)
            }
        })
    }, {
    rootMargin: "0px 0px -100px"
})

const wows = document.querySelectorAll(".wow")
wows.forEach(wow => {
    observeAnimate.observe(wow)
})
