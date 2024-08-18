const Chance = require('chance');


const chance = new Chance()

console.log(chance.rpg('9d6'))

console.log(0 - 2);

console.log("javascript is loading...")

const result = chance.rpg('4d6').sort().filter((_,i) => i).reduce((a, b) => a + b, 0)

document.getElementById("myBtn").addEventListener("click", applyRandom);


function applyRandom(e) {
    e.preventDefault();

    const resultStr = chance.rpg('4d6').sort().filter((_,i) => i).reduce((a, b) => a + b, 0)
    const resultDex = chance.rpg('4d6').sort().filter((_,i) => i).reduce((a, b) => a + b, 0)
    const resultCon = chance.rpg('4d6').sort().filter((_,i) => i).reduce((a, b) => a + b, 0)
    const resultInt = chance.rpg('4d6').sort().filter((_,i) => i).reduce((a, b) => a + b, 0)
    const resultWis = chance.rpg('4d6').sort().filter((_,i) => i).reduce((a, b) => a + b, 0)
    const resultCha = chance.rpg('4d6').sort().filter((_,i) => i).reduce((a, b) => a + b, 0)

    document.getElementById("strField").val = resultStr
    document.getElementById("dexField").val = resultDex
    document.getElementById("conField").val = resultCon
    document.getElementById("intField").val = resultInt
    document.getElementById("wisField").val = resultWis
    document.getElementById("chaField").val = resultCha

}