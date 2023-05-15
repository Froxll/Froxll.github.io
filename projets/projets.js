function main(){
    
}

function goUp(){
    
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

}

let counter_drone = 0
let counter_submarine = 0
let counter_castel = 0
let counter_seas = 0

function changeImageDrone(){

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

function changeImageCastel(){

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

window.onload = () => {
    main();
}