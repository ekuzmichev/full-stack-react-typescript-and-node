const inputElement = document.querySelector("#userName")
console.log("input", inputElement)
const paragraphElement = document.querySelector("#welcomeMsg")
inputElement.addEventListener("change", (e) => {
    paragraphElement.innerHTML = "Welcome " + e.target.value
})