function main(){

    chrono()
    
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


//innitialisation d'un conteur utile pour desactiver le mode edition

let counter = 0;

 

//active le mode edition

function editionmode (){
    if (counter%2 == 0) {
        var nomsaisit = prompt("Entrez le nom du profil","admin");
        //on initialise une variable qui contient la bonne reponse au prompt nom
        var nomreponse = "admin";
        // on verifie si la valeur entree dans le prompt est la bonne
        if (nomsaisit == nomreponse){
            var mdpsaisit = prompt ("Entrez le mot de passe", "password");
            //on initialise une variable qui contient la bonne reponse au prompt mdp
            var mdpreponse = "admin_pwd"
            // on verifie si la valeur entree dans le prompt est la bonne
            if ( mdpsaisit == mdpreponse){
                // alert pour prevenir le changement de mode et changement de couleur du boutton mode eddition
                alert("Mode admin activé");
                counter = counter+1;
                var boutton = document.getElementById("mode_edition");
                boutton.style.backgroundColor = "green";
                // on fait apparaitre le boutton ajout
                let boutton_ajout = document.getElementById("bouton_ajout2");
                boutton_ajout.style.display = "block";
            }
            else {
                alert("Mot de passe incorrect");
            }
        }
        else {
            alert("Nom d'utilisateur incorrect");
        }
    }
    else {
        let conf = confirm("Êtes vous sûr de vouloir quitter le mode édition ?");
        if (conf == true) {
            counter = counter+1;
            // remet la couleur innitiale du boutton
            var bouton = document.getElementById("mode_edition");
            bouton.style.backgroundColor = "red";
            // on refait disparaitre le boutton ajout
            let boutton_ajout = document.getElementById("bouton_ajout2");
            boutton_ajout.style.display = "none";
        }
    }
}

function grattage(){
    document.getElementById("img_ayoubKarin").style.filter = "none"
}


function nom_modif() {
    if (counter%2 == 0){
        //message d'erreur
        console.log("Veuillez activer le mode édition");
    }
    else {
         // prend l'ellement a changer, ici le nom 
        let chgname = document.getElementById("nom_membre");

        // Ouvre un prompt pour saisir le nouveau nom
        var newNom = prompt("Entrez le nouveau nom");
        if(newNom != ""){
            //on remplace le nom existant par le new
            chgname.innerHTML = newNom;
        }
        else{
            console.log("Veuillez rentrer un nom existant.")
        }
       
    }
}

function nom_modif2() {
    if (counter%2 == 0){
        console.log("Veuillez activer le mode édition");
    }
    else {
         // prend l'ellement a changer, ici le nom 
        let chgname = document.getElementById("nom_membre2");

        // Ouvre un prompt pour saisir le nouveau nom
        var newNom = prompt("Entrez le nouveau nom");
        if(newNom != ""){
            //on remplace le nom existant par le new
            chgname.innerHTML = newNom;
        }
        else{
            console.log("Veuillez rentrer un nom existant.")
        }
       
    }
}

function nom_modif3() {
    if (counter%2 == 0){
        console.log("Veuillez activer le mode édition");
    }
    else {
         // prend l'ellement a changer, ici le nom 
        let chgname = document.getElementById("nom_membre3");

        // Ouvre un prompt pour saisir le nouveau nom
        var newNom = prompt("Entrez le nouveau nom");
        if(newNom != ""){
            //on remplace le nom existant par le new
            chgname.innerHTML = newNom;
        }
        else{
            console.log("Veuillez rentrer un nom existant.")
        }
        
       
    }
}


function nom_modif4() {
    if (counter%2 == 0){
        console.log("Veuillez activer le mode édition");
    }
    else {
        // prend l'ellement a changer, ici le nom 
        let chgname = document.getElementById("nom_membre4");

        // Ouvre un prompt pour saisir le nouveau nom
        var newNom = prompt("Entrez le nouveau nom");
        if(newNom != ""){
            //on remplace le nom existant par le new
            chgname.innerHTML = newNom;
        }
        else{
            console.log("Veuillez rentrer un nom existant.")
        }
         
    }
}

//compteur pour aficher 1 par 1 les nouvelles cartes
let counter2 = 0;

function ajout_carte() {


    if (counter2%2 == 0){

        //prend l'element (la nouvelle carte et change son style pour la rendre visibler
        let carte = document.getElementById("cacher");
        carte.style.display = "block";
        counter2 = counter2 + 1;
    }
    else{

        //prend l'element (la nouvelle carte et change son style pour la rendre visibler
        let carte2 = document.getElementById("cacher2");
        carte2.style.display = "block";
        counter2 = counter2 + 1;
    }

}

function delete_card() {

    let carte = document.getElementById("cacher");
    carte.style.display = "none";
    counter2 = counter2 + 1;
}

function delete_card2() {

    let carte = document.getElementById("cacher2");
    carte.style.display = "none";
    counter2 = counter2 - 1;
}


window.onload = () => {
    main();
}