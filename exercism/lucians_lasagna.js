
// Lucian's Luscious Lasagna

const timePerLayer = 2
const expectedMinutesInOven = 40

function remainingMinutesInOven(actualMinutesInOven) {
  return expectedMinutesInOven - actualMinutesInOven;
}

console.log(remainingMinutesInOven(3))

function preparationTimeInMinutes(numberOfLayers){
  return timePerLayer*numberOfLayers;
}

console.log(preparationTimeInMinutes(4))

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + (actualMinutesInOven)
}

console.log(totalTimeInMinutes(2,20))
