
document.addEventListener("keydown",miscare);

function miscare(e){
    if(e.code=='KeyW'){
        W();
    }
    if(e.code=='KeyA'){
        A();
    }
    if(e.code=='KeyS'){
        S();
    }
    if(e.code=='KeyD'){
        D();
    }
}

function W(){
    let patrat = document.getElementById('patrat');
    let pozitie = window.getComputedStyle(patrat).getPropertyValue('top');
    pozitie = pozitie.slice(0, -2);
    pozitie = parseFloat(pozitie);
    pozitie -= 5;
    if(pozitie < 0){miscare.stopPropagation()}
    if(pozitie >950){miscare.stopPropagation()}
    patrat.style.top = pozitie + 'px';
    
}
function A(){
    let patrat = document.getElementById('patrat');
    let pozitie = window.getComputedStyle(patrat).getPropertyValue('left');
    pozitie = pozitie.slice(0, -2);
    pozitie = parseFloat(pozitie);
    pozitie -= 5;
    if(pozitie < 0){miscare.stopPropagation()}
    if(pozitie > 950){miscare.stopPropagation()}
    patrat.style.left = pozitie + 'px';
}
function S(){
    let patrat = document.getElementById('patrat');
    let pozitie = window.getComputedStyle(patrat).getPropertyValue('top');
    pozitie = pozitie.slice(0, -2);
    pozitie = parseFloat(pozitie);
    pozitie += 5;
    if(pozitie < 0){miscare.stopPropagation()}
    if(pozitie >950){miscare.stopPropagation()}
    patrat.style.top = pozitie + 'px';
}
function D(){
    let patrat = document.getElementById('patrat');
    let pozitie = window.getComputedStyle(patrat).getPropertyValue('left');
    pozitie = pozitie.slice(0, -2);
    pozitie = parseFloat(pozitie);
    pozitie += 5;
    if(pozitie < 0){miscare.stopPropagation()}
    if(pozitie > 950){miscare.stopPropagation()}
    patrat.style.left = pozitie + 'px';
}

function lightdark(){
    let elemnent = document.getElementById('divi')
    let patri = document.getElementById('patrat')
    let badi = document.getElementById('bodi')
    if(elemnent.style.backgroundColor == 'coral'){
        elemnent.style.backgroundColor = 'grey';
        patri.style.backgroundColor = 'darkgrey';
        badi.style.backgroundColor='black';
        badi.style.color = 'grey';
    }
    else{
        badi.style.backgroundColor = 'white';
        patri.style.backgroundColor = 'aquamarine';
        elemnent.style.backgroundColor = 'coral';
    }
}