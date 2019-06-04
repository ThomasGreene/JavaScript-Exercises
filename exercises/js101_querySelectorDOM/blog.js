const hEl = document.querySelector(".article__header")

hEl.textContent = "Welcome to the Thomas blog"

const hElPlus = document.querySelectorAll(".article__header")

hElPlus[0].classList.add("important")
hElPlus[1].classList.add("important")
console.log(hElPlus)

const dashedEl = document.querySelector(".dashed")
dashedEl.classList.remove("dashed")
console.log(dashedEl)

const fEl = document.querySelector(".article__footer")
fEl.classList.add("goldenrod")
console.log(fEl)