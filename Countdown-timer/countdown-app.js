let time = 14*24*60*60;

console.log(time+' here is the time')
let secondsEl= document.getElementById('seconds');
let minutesEl= document.getElementById('minutes');
let hoursEl= document.getElementById('hours');
let daysEl= document.getElementById('days'); 
setInterval(countDown,1000);

//***************************
// this function is used to return a 0 besides the digit
// in case of having single digit numbers
function singleDigitsFixer(element){
    if (element<10){
        element=`0${element}`;
        return element;
    }else{ return element}
}
//***************************
function countDown(){
    let timeInSeconds=time%60;
    let remainderTime=time-timeInSeconds;
    let remainderTimeInMinutes= Math.floor(remainderTime/60);
    let timeInMinutes= remainderTimeInMinutes%60;
    let remainderTimeInHours=Math.floor(remainderTimeInMinutes/60);
    let timeInHours= remainderTimeInHours%24;
    let timeInDays=Math.floor(remainderTimeInHours/24);
   
    secondsEl.innerHTML= singleDigitsFixer(timeInSeconds);
    minutesEl.innerHTML =singleDigitsFixer(timeInMinutes);
    hoursEl.innerHTML= singleDigitsFixer(timeInHours);
    daysEl.innerHTML= singleDigitsFixer(timeInDays);
    time--;
    //the following if statement is to prevent the counter from
    // counting in negative number.. it makes it stop when it
    // reaches zero
    if (time <0){
        clearInterval(time=0)
    }
}