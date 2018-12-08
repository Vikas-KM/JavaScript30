window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if(!audio)  return;
    // console.log(audio);
    audio.currentTime = 0; //for rewind
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e){
    // console.log(e.propertyName);
    if(e.propertyName !== 'transform')    return;
    // console.log(this);  // refers to the key event which it triggered
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));