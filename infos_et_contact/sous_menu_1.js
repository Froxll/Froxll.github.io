function main(){

    chrono()
    disableButton()
    setInterval(disableButton,1000)         //Il y a t'il un autre moyen de voir si disableButton est vrai (sans l'appeler toutes les secondes)

}
    
function clock() {

    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    
    document.getElementById("clock").innerHTML = inf10(hours) + ":" + inf10(minutes) + ":" + inf10(seconds)  
    
}

function chrono(){
        let actual_time = new Date()

        setInterval(()=>{
            let time = new Date()
    
            time = new Date(time - actual_time)
            let hours = time.getHours()
            let minutes = time.getMinutes()
            let seconds = time.getSeconds()
            
            clock()

            document.getElementById("chrono").innerHTML = inf10(hours-1) + ":" + inf10(minutes) + ":" + inf10(seconds) 

        },1000)
}



function inf10(time) {
    if (time < 10) {
        time = '0' + time
    }
    return time;
}

function disableButton(){

    document.getElementById("button").disabled = true
    
    if(checkCommentary() == true && checkName() == true && checkMail() == true){
        document.getElementById("button").disabled = false
    }

}

function checkName(){

    let nb_space = document.getElementById("name").value.split(" ").length          //Ptit bug, "Nathan " est compté comme 2 mots a cause de l'espace

    if(nb_space == 2){
        return true
    }
    else{
        return false
    }

}

let nb_arobase = 0
let nb_point = 0

function checkMail(){

    let nb_arobase = document.getElementById("email").value.split('@').length - 1;
    let nb_point = document.getElementById("email").value.split('.').length - 1;
    
    if(nb_point == 1 && nb_arobase == 1){
        return true
    }
    else{
        return false
    }

}

function checkCommentary(){

    let nb_char = document.getElementById("commentary").value.length
    
    
    if(nb_char >= 20 && nb_char <= 1000){
        return true
    }
    else{
        return false
    }

}

function errorMessage(){

    if(checkName() == true){
        document.getElementById("survol_prenom").style.display = "none"
    }
    if(checkName() == false){
        document.getElementById("survol_prenom").style.display = "block"
    }
    if(checkMail() == true){
        document.getElementById("survol_email").style.display = "none"
    }
    if(checkMail() == false){
        document.getElementById("survol_email").style.display = "block"
    }
    if(checkCommentary() == true){
        document.getElementById("survol_commentaire").style.display = "none"
    }
    if(checkCommentary() == false){
        document.getElementById("survol_commentaire").style.display = "block"
    }

}

function startGame(){
    console.log("a completer")
}

window.onload = () => {
    main();
}