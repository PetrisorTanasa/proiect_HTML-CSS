let cuvinte = "Ut aliquam vulputate est eu gravida. Curabitur vel sapien volutpat, finibus nulla ut, sagittis turpis. Cras at porta erat. Nam non odio id elit blandit lacinia et et urna. Curabitur efficitur sit amet libero ac laoreet. Nullam aliquet purus nisl. Ut id dolor tortor. Donec varius at lacus ut ultricies."

let lista;
let x;
let verif = 0;

function submis(){
    let h = document.getElementById('textul')
    let v = h.value;
    lista = v.split(" ")
    for(x=0;x<lista.length;x++){
        let div = document.createElement('div')
        let continut = lista[x] + " "
        div.innerHTML = continut
        div.id = x
        div.style.margin = '4px';
        document.body.appendChild(div)
    }
    verif = 1
}

document.addEventListener("input", function(){
    if(verif == 1){
    for(x=0;x<lista.length;x++){
        let divi = document.getElementById(x)
        divi.style.backgroundColor = 'white';
    }
    
    let inputSearch = document.getElementById('input')
    let inputValue = inputSearch.value ;
    let regex =new RegExp(inputValue)
    
    for(x=0;x<lista.length;x++){
        let valid = regex.test(lista[x])
        if(valid == true){
            let divi = document.getElementById(x)
            divi.style.backgroundColor = 'yellow'
        }
    }
}
    })