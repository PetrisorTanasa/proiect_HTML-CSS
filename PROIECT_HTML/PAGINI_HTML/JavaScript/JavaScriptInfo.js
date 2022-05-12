let Petrisor = {
    'nume':'Tanasa Florin Petrisor',
    'pasiuni':['Coding','Basketball','Watching Movies'],
    'note':[10,10,10,9,8,7,7],
    'numeTata':'Gheorghe Mihai',
    'numeMama':'Mihaela',
    'dataNastere':'15/10/2002'
}
let div = document.createElement('div');
function info_afis(){
    let i = Math.random()*5;
    let medie=0;
    i = Math.floor(i);
    let div = document.createElement('div');
    div.style.width = 'auto';
    div.style.height = '20px';
    div.style.backgroundColor = 'navajowhite';
    if(i==0){
        div.innerHTML = 'My name is '+Petrisor.nume;
    }
    if(i==1){
        div.innerHTML = 'Im interested in ';
        for(let i = 0;i<Petrisor.pasiuni.length;i++){
            let text = div.innerHTML;
            div.innerHTML = text + '' + Petrisor.pasiuni[i]+", ";
        }
        i = 9;
    }
    if(i==2){
        
        for(let i = 0;i<Petrisor.note.length;i++){
            medie = medie + Petrisor.note[i];
        }
        medie = medie /Petrisor.note.length;
        div.innerHTML = 'My first semester median grade was '+medie;
        i = 9;
    }
    if(i==3){
        div.innerHTML = 'My parents names are '+Petrisor.numeTata+ ' and '+Petrisor.numeMama;
    }
    if(i==4){
        div.innerHTML = 'I was born on '+Petrisor.dataNastere;
    }
    document.body.appendChild(div);
}