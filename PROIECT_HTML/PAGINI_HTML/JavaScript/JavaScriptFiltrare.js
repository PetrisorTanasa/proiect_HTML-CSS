let clase = ['prost','mediocru','destept','stefan']

function afisare(){
    for(let i=0;i<clase.length;i++){
        console.log(clase[i])
        let x = document.getElementsByClassName(clase[i])
        for(let j=0;j<x.length;j++){
                x[j].style.display = 'flex'
            }
    }
    let input = document.getElementsByTagName('input')[0].value
    console.log(input)
    for(let i=0;i<clase.length;i++){
        if(clase[i]!=input){
            console.log(clase[i])
            let x = document.getElementsByClassName(clase[i])
            for(let j=0;j<x.length;j++){
                x[j].style.display = 'none'
            }
        }
    }
}