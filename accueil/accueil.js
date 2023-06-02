function main(){

    chrono()

    WhoAreWe()
    setInterval(WhoAreWe, 15000)
    
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



function inf10(time) {                  // On fait une fonction qui modifie l'affichage afin d'aficher "09" au lieu de "9"
    if (time < 10) {
        time = '0' + time
    }
    return time;
}

let counter = 0;

function survol_competence(){

    document.getElementById("schema").addEventListener("click",function() {     //Détecte le clic sur l'image
        
        if(counter%2==0){
            let schema = document.getElementById("schema")                      
    
            schema.style.width = '100%'                                         //Augmente la taille
            schema.style.height = '100%'
        }
        else{
            let schema = document.getElementById("schema")                      //Diminue la taille
    
            schema.style.width = '70%'
            schema.style.height = '70%'
        }
    
        counter+=1

    })

}

function WhoAreWe(){
        
    document.getElementById("WhoAreWe").innerHTML += "Qui"                      //Affiche "qui" directement

    setTimeout(function() {
        document.getElementById("WhoAreWe").innerHTML += " sommes"              //Affiche "sommes" au bout d'1 seconde
    },1000)

    setTimeout(function() {
        document.getElementById("WhoAreWe").innerHTML += "-nous ?"              //Affiche "nous" au bout de 2 secondes
    },2000)

    setTimeout(function() {
        document.getElementById("WhoAreWe").style.marginLeft = "85vw"           //Au bout de 3s, le texte se déplace à droite
    },3000)

    setTimeout(function() {
        document.getElementById("WhoAreWe").style.marginLeft = "0"              //Au bout de 8s, le texte se remet a gauche
    },8000)

    setTimeout(function() {
        document.getElementById("WhoAreWe").innerHTML = ""                      //Au bout de 14s, le texte disparait
    },14000)
                                                                                //La transition est fluide grâce au css et cette fonction est appellée toutes les 15s
}


window.onload = () => {
    main();
}