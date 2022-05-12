let info = [];

function Salveaza(){
    let input=document.getElementById("review").value;
    window.localStorage.setItem("review",input);

    let nume = document.getElementById("numeaaa").value;
    window.localStorage.setItem("nume",nume);
    reviewComplet = window.localStorage.getItem("nume") + ':'+window.localStorage.getItem("review")
    info.push(reviewComplet);
    console.log(info);
    let string = "Thank you "+window.localStorage.getItem("nume")+" for the review!";

    alert(string);
    window.localStorage.clear();
}
