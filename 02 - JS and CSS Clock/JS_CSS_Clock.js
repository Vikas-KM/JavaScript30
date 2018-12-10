const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minsHand = document.querySelector('.min-hand');
const glitch = document.querySelector('.fast');
function setDate(){
    const date = new Date();
    const hour = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    const secsDeg = ((secs/60)*360)+90; //90 added for the offset we did initially
    const minsDeg = ((mins/60)*360)+90;
    const hoursDeg = ((hour/12)*360)+90;

    if(secs === 0)
        secondHand.classList.add('fast');
    if(secs === 1)
        secondHand.classList.remove('fast');
    secondHand.style.transform = `rotate(${secsDeg}deg)`;
    minsHand.style.transform = `rotate(${minsDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;

    console.log(`hour is ${hour}, mins is ${mins} and secs is ${secs}`);
}

let myDate = setInterval(setDate,1000);

