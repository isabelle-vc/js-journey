
const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;
const petDogIsAwake = false;

export function canExecuteFastAttack(knightIsAwake) {
      if (knightIsAwake == false){
      console.log("Fast Attack")
    } else {
      console.log ("No attack available")
}
}

canExecuteFastAttack(knightIsAwake)

// export function canSpy (knightIsAwake, archerIsAwake, prisonerIsAwake){
//     if (knightIsAwake == true || archerIsAwake == true || prisonerIsAwake == true){
//         console.log("Spying")
//     } else if (knightIsAwake == false || archerIsAwake == false || prisonerIsAwake == false) {
//         console.log ("Can't spy")
//     }
// }

export function canSpy (knightIsAwake, archerIsAwake, prisonerIsAwake){
    if (knightIsAwake == false && archerIsAwake == false && prisonerIsAwake == false){
        console.log("Can't spy")
    } else {
        console.log ("Spying")
    }
}

canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake)


export function canSignalPrisoner(archerIsAwake, prisonerIsAwake){
    if (archerIsAwake == true || prisonerIsAwake == false){
        console.log("No signal")
    } else {
        console.log("Signaling")
    }
}

canSignalPrisoner(archerIsAwake, prisonerIsAwake)


export function canFreePrisoner(
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent,
  ){
    if (petDogIsPresent == true && archerIsAwake == false){
        console.log("Escape")
  } else if (petDogIsPresent == false && prisonerIsAwake == true && knightIsAwake == false && archerIsAwake == false){
    console.log("Escape")
  } else {
    console.log("Can't escape")
  }
}

 canFreePrisoner (knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsAwake)