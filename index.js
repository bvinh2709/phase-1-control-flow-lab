function scuberGreetingForFeet(someValue) {
  // Write your code here!
  if (someValue > 0 && someValue < 400) {
    return 'This one is on me!'
  }
  else if (someValue > 400 && someValue < 2000) {
    return 'That will be twenty bucks.'
  }
  else if (someValue > 2000 && someValue <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else if (someValue > 2500) {
    return 'No can do.'
  }
}

scuberGreetingForFeet(1500);

function ternaryCheckCity(isNYC){
  // Write your code here!
  if (isNYC === 'NYC') {
    return 'Ok, sounds good.'
  }
  else {
    return 'No go.'
  }
}

ternaryCheckCity('NYC');

function switchOnCharmFromTip(gratuity){
  // Write your code here!
  switch (gratuity) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}