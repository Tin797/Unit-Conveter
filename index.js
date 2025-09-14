/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let btn = document.getElementById("btn-el").addEventListener("click", function(){
    let inp = document.getElementById("inp-el").value
    let meterToFeet = (inp * 3.281).toFixed(3) 
    let literToGallon = (inp * 0.264).toFixed(3)
    let kiloToPound = (inp * 2.204).toFixed(3)
    if (!Number(inp)  || inp <= 0 || inp === ""){
        console.log("inp is not : "+Number(inp))
        document.getElementById("result-length-el").textContent =  `This "${inp}" not integer ,Please enter a valid number , greater than 0`;
        document.getElementById("result-volume-el").textContent =  `This "${inp}" not integer ,Please enter a valid number , greater than 0`;
        document.getElementById("result-mass-el").textContent =  `This "${inp}" not integer ,Please enter a valid number , greater than 0`;
    }else if( inp != "" && inp > 0){
        console.log("inp = number: "+Number(inp))
        document.getElementById("result-length-el").textContent = `${inp} meters = ${meterToFeet} feet | ${inp} feet = ${(inp / 3.281).toFixed(3)} meters`;
        document.getElementById("result-volume-el").textContent = `${inp} liters = ${literToGallon} gallons | ${inp} gallons = ${(inp / 0.264).toFixed(3)} liters`;
        document.getElementById("result-mass-el").textContent = `${inp} kilos = ${kiloToPound} pounds | ${inp} pounds = ${(inp / 2.204).toFixed(3)} kilos`;
    }
});