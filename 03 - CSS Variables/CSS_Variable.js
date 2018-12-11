const inputs = document.querySelectorAll('.controls input');
// console.log(inputs);

function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    // console.log(suffix);
    // console.log(this.name);
    // let doc = document.documentElement;
    // console.log(doc);
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
    // console.log(this.dataset);

}
inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));