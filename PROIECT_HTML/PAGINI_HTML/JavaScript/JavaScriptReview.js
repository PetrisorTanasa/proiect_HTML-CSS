let info = [];

function Salveaza(){
    console.log('ok')
    let input=document.getElementById("review").value;
    window.localStorage.setItem("review",input);



    let nume = document.getElementById("numeaaa").value;

    window.localStorage.setItem("nume",nume);
    reviewComplet = window.localStorage.getItem("nume") + ':'+window.localStorage.getItem("review")
    info.push(reviewComplet);

    console.log(info);
    let string = "Thank you "+window.localStorage.getItem("nume")+" for the review!";

    window.localStorage.removeItem('review')

    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(nume)) {
        alert(string);
        return true;
    }
    else {
        alert('Introduceti din nou e-mail')
        return false;
    }
}
