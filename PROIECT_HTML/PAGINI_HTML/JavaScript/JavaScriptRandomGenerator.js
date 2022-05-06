let array=[];
var div = document.createElement('div');
let variabila=0;
let array_copie;
let ui;
let element = document.getElementById("ok");
element.style.backgroundColor = 'aquamarine';

function Enter() {
    if(variabila == 0){
    try{
    div.remove();
    }
    catch{
        let ok = 1;
    }
    const val = document.querySelector('input').value;
    array.push(val);
    console.log(array);

    div.style.width = 'auto'
    div.style.height = '50px'
    div.style.backgroundColor = "aquamarine"
    div.style.fontSize = 'large'

    div.innerHTML = array;
    div.style.display = 'block';

    document.body.appendChild(div);

    var text = document.getElementById('inputul')
    text.value = ''

}
  }
function random(){
    var rez = Math.random()*(array.length-1);
    rez= Math.floor(rez);
    div.innerHTML = 'The winner is: ' +array[rez];
    div.style.width = 'auto'
    div.style.height = '50px'
    div.style.backgroundColor = "pink"
    div.style.fontSize = 'xx-large'
    document.body.appendChild(div)
    var text = document.getElementById('inputul')
    text.value = ''
    array_copie = array;
    myInterval = setInterval(function(){div.remove();},7500);
    callback();
}
function callback(){

    setTimeout(function(){variabila = 0;el.remove();clearInterval(myInterval)},10000)
    let el = document.createElement('div')
    el.innerHTML = 'Wait 10 seconds for another generation!';
    el.style.fontSize = 'x-large'
    el.style.color = 'cornflowerblue'
    document.body.appendChild(el);
    array = []
    variabila = 1
}

function deleteArray(){
    while(array.length > 0){array.pop()}
    div.remove()
}

function sortare(){
    div.remove()
    div.innerHTML = array.sort()
    document.body.appendChild(div)
}

function concatenare(){
    div.remove()
    array = array.concat(array_copie)
    div.innerHTML = array
    document.body.appendChild(div)
}

function CuloareRandom(){
    element = document.getElementById("ok");
    var first=Math.random()*255;
    var second=Math.random()*255;
    var third=Math.random()*255;
    let color="rgb("+first+","+second+","+third+")";
    element.style.backgroundColor = color;
}