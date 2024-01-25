// lager en randomNumbers array
let randomNumbers:any = []

// Fyller arrayet med 200 tilfeldige tall mellom 0 og 200
for (let i = 0; i < 200; i++) {
    randomNumbers.push(Math.floor(Math.random() * 200))
}

// variabler som inneholder informasjon om arrayet
const isFiveorHigher:number = randomNumbers.filter((number:number) => number >= 5).length
const isFour:number = randomNumbers.filter((number:number) => number === 4).length
const summedNumbers:number = randomNumbers.reduce((a:number, b:number) => a + b, 0)
const averageNumber:number = summedNumbers / randomNumbers.length
const biggestNumber:number = Math.max(...randomNumbers)
const lowestNumber:number = Math.min(...randomNumbers)
const isEven:number = randomNumbers.filter((number:number) => number % 2 === 0).length
const isOdd:number = randomNumbers.filter((number:number) => number % 2 !== 0).length

console.log(`Antall tall som er 5 eller høyere: ${isFiveorHigher}`)
console.log(`Antall tall som er 4: ${isFour}`)
console.log(`Summen av tallene: ${summedNumbers}`)
console.log(`Gjennomsnittet av tallene: ${averageNumber}`)
console.log(`Det største tallet: ${biggestNumber}`)
console.log(`Det minste tallet: ${lowestNumber}`)
console.log(`Antall partall: ${isEven}`)
console.log(`Antall oddetall: ${isOdd}`)