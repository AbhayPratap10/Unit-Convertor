
//get reference to DOM manipulation
const btnEl=document.getElementById("btn-el")
const inputEl=document.getElementById("input-el")
const lengthEl=document.getElementById("length-el")
const volumeEl=document.getElementById("volume-el")
const massEl=document.getElementById("mass-el")

//Conversion functions 
function convertLength(value){
    const meterToFeet=value * 3.281
    const feetToMeter=value / 3.281
    return `${value} meters = ${meterToFeet.toFixed(3)} feet | ${value} feet = ${feetToMeter.toFixed(3)} meters`
}

function convertVolume(value){
    const literToGallon=value * 0.264
    const gallonToLiter=value / 0.264
    return `${value} liters = ${literToGallon.toFixed(3)} gallon | ${value} gallon = ${gallonToLiter.toFixed(3)} liters`
}

function convertMass(value){
    const kgToPound=value * 2.204
    const poundToKg=value / 2.204

    return `${value} Kg = ${kgToPound.toFixed(3)} pound | ${value} pound = ${poundToKg.toFixed(3)} kg`
}

//convert butoon listener

btnEl.addEventListener("click",function(){
    const inputValue = parseFloat(inputEl.value)

    if(!isNaN(inputValue)){
    lengthEl.textContent = convertLength(inputValue)
    volumeEl.textContent = convertVolume(inputValue)
    massEl.textContent = convertMass(inputValue)
    }else{
        lengthEl.textContent = "Invalid input"
        volumeEl.textContent = "Invalid input"
        massEl.textContent = "Invalid input"
    }
})

