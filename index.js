function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance < 400){
    return `This one is on me!`
  }else if ( distance > 2000 && distance <=2500 ){
    return`I will gladly take your thirty bucks.`
  }else if(distance > 2500){
    return `No can do.`
  }
}

function ternaryCheckCity(city){
  // Write your code here!
const result = city === `NYC`?`Ok, sounds good.`:`No go.`;
return result ;

}

function switchOnCharmFromTip(tip){
  // Write your code here!
if(tip === `generous`){
  return `Thank you so much.`
}else if(tip === `not as generous`){
  return `Thank you.`
}else{
  return `Bye.`
}


}