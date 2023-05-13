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

setInterval(clock, 1000)

function chrono(){

    window.onload = (event) => {
        
        let actual_time = new Date()

        let actual_hours = actual_time.getHours()
        let actual_minutes = actual_time.getMinutes()
        let actual_seconds = actual_time.getSeconds()

        console.log("heure au chargement : ",actual_seconds)

        setInterval(()=>{
            let time = new Date()
    
        let hours = time.getHours()
        let minutes = time.getMinutes()
        let seconds = time.getSeconds()
        console.log("heure actualle :",seconds)

        document.getElementById("chrono").innerHTML = inf10(hours-actual_hours) + ":" + inf10(minutes-actual_minutes) + ":" + inf10(seconds-actual_seconds) 

        },1000)

    }

}



function inf10(time) {

    

    if (time < 10) {
        time = '0' + time
    }
    return time;
}



main();