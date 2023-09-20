const btnEl=document.getElementById("btn-el")
const lengthEl=document.getElementById("length-el")
const inputEl=document.getElementById("input-el")
const volumeEl=document.getElementById("volume-el")
const massEl=document.getElementById("mass-el")

btnEl.addEventListener("click",function(){
    let inputValue=inputEl.value

    lengthEl.textContent=""
    volumeEl.textContent=""
    massEl.textContent=""

    let meterToFeet=inputValue * 3.281
    let feetToMeter=inputValue / 3.281
    let literToGallon=inputValue * 0.264
    let gallonToLiter=inputValue / 0.264
    let kgToPound=inputValue * 2.204
    let poundToKg=inputValue / 2.204

    lengthEl.innerHTML+=`${inputValue} meters = ${meterToFeet.toFixed(3)} feet | ${inputValue} feet = ${feetToMeter.toFixed(3)} meters`
    volumeEl.innerHTML+=`${inputValue} liters = ${literToGallon.toFixed(3)} gallon | ${inputValue} gallon = ${gallonToLiter.toFixed(3)} liters`
    massEl.innerHTML+=`${inputValue} Kg = ${kgToPound.toFixed(3)} pound | ${inputValue} pound = ${poundToKg.toFixed(3)} kg`
})

