function main(){
    
    chrono()

}

function goUp(){                                    //Cette fonction est appelée au clic sur le bouton
    
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

}

let counter_drone = 0
let counter_submarine = 0
let counter_castel = 0
let counter_seas = 0

function changeImageDrone(){                        //Est appelé au clic sur l'image, affiche une image et enlève l'autre

    if(counter_drone%2==0){
        document.getElementById("pictures_drone").style.display = 'none'
        document.getElementById("pictures_drone_2").style.display = 'block'
    }
    else{
        document.getElementById("pictures_drone").style.display = 'block'
        document.getElementById("pictures_drone_2").style.display = 'none'
    }
    counter_drone += 1

}

function changeImageCastel(){                       //Pareil pour toutes les autres fonctions

    if(counter_castel%2==0){
        document.getElementById("pictures_castel").style.display = 'none'
        document.getElementById("pictures_castel_2").style.display = 'block'
    }
    else{
        document.getElementById("pictures_castel").style.display = 'block'
        document.getElementById("pictures_castel_2").style.display = 'none'
    }
    counter_castel += 1

}

function changeImageSubmarine(){

    if(counter_submarine%2==0){
        document.getElementById("pictures_submarine").style.display = 'none'
        document.getElementById("pictures_submarine_2").style.display = 'block'
    }
    else{
        document.getElementById("pictures_submarine").style.display = 'block'
        document.getElementById("pictures_submarine_2").style.display = 'none'
    }
    counter_submarine += 1

}

function changeImageSeas(){

    if(counter_seas%2==0){
        document.getElementById("pictures_seas").style.display = 'none'
        document.getElementById("pictures_seas_2").style.display = 'block'
    }
    else{
        document.getElementById("pictures_seas").style.display = 'block'
        document.getElementById("pictures_seas_2").style.display = 'none'
    }
    counter_seas += 1

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

window.onload = () => {
    main()
}