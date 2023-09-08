import { calcular } from "./src/calculoIMC.js";

let button1 = document.querySelector('#buttonOne')
let button2 = document.querySelector('#button2')

let page1 = document.querySelector(".template1")
let page2 = document.querySelector(".template2")

const name = document.querySelector("#name")
const name2 = document.querySelector(".name")

const idade = document.querySelector("#idade")
const idade2 = document.querySelector(".idade")

const peso = document.querySelector("#peso")
const peso2 = document.querySelector(".peso")

const altura = document.querySelector("#altura")
const altura2 = document.querySelector(".altura")

const sexo = document.querySelector("#sexo")
const sexo2 = document.querySelector(".sexo")

const imce = document.querySelector(".imc")
const status = document.querySelector(".status")
const tabela = document.querySelector(".tabela")




button1.addEventListener("click", () => {

    if (altura.value == "" || peso.value == "") {
        alert("preencha todos os campos!")
    } else {
        page1.classList.add('hide')
        page2.classList.remove('hide')
        result()
        calculoimc()
    }

})

button2.addEventListener("click", () => {
    name.value = ""
    peso.value = ""
    idade.value = ""
    altura.value = ""
    page2.classList.add('hide')
    page1.classList.remove('hide')
    tabela.classList.add("hide2")


})

status.addEventListener("click", () => {

    if (tabela.classList.contains("hide2")) {
        tabela.classList.remove("hide2")
    } else {
        tabela.classList.add("hide2")
    }


})


function result() {
    name2.innerHTML = name.value
    peso2.innerHTML = peso.value
    idade2.innerHTML = idade.value
    altura2.innerHTML = altura.value
    sexo2.innerHTML = sexo.value
}

function calculoimc() {
    let imc = calcular(Number(peso.value), Number(altura.value))
    let imc2 = imc.toFixed(2)
    if (imc2 < 18.5) {
        status.innerHTML = "Magreza"
    } else if (imc2 >= 18.5 && imc2 < 24.9) {
        status.innerHTML = "Normal"
    } else if (imc2 >= 24.9 && imc2 < 30) {
        status.innerHTML = "Sobrepeso"
    } else if (imc2 >= 30) {
        status.innerHTML = "Obesidade"
    }

    imce.innerHTML = imc2 + " kg/m²"

}
