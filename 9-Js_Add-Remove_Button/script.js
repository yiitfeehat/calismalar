
document.querySelector("body").classList.add("text-center")
document.querySelector("h1").classList.add("text-danger")
document.querySelector(".item-list h2").classList.add("text-bg-warning")
//! Selectors

const input = document.querySelector("#input")
const EkleBtn = document.getElementById("btn")
const SilBtn = document.getElementById("btn2")
const ul = document.querySelector("ul")

// değişken Tanımlamaları yaptık. 
//* Event tanımlamalarını yapalım.

EkleBtn.addEventListener("click", () => {
    input.focus()
    if (!input.value) {
        alert("Boş iş yapamazsınız.")
        return
    }
    const li = document.createElement("li")
    li.textContent = input.value
    ul.appendChild(li)
    input.value = ""
})

SilBtn.addEventListener("click", () => {
    input.focus()
    const SilinecekSonEleman = ul.lastElementChild;
    if (SilinecekSonEleman){
        ul.removeChild(SilinecekSonEleman)
    } else {
        alert("Silinecek görev kalmadı.")
    }

}) 

