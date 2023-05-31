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



function inf10(time) {
    if (time < 10) {
        time = '0' + time
    }
    return time;
}

let counter = 0;

function survol_competence(){

    document.getElementById("schema").addEventListener("click",function() {
        
        if(counter%2==0){
            let schema = document.getElementById("schema")
    
            schema.style.width = '100%'
            schema.style.height = '100%'
        }
        else{
            let schema = document.getElementById("schema")
    
            schema.style.width = '70%'
            schema.style.height = '70%'
        }
    
        counter+=1

    })

}

function WhoAreWe(){
        
    document.getElementById("WhoAreWe").innerHTML += "Qui"

    setTimeout(function() {
        document.getElementById("WhoAreWe").innerHTML += " sommes"
    },1000)

    setTimeout(function() {
        document.getElementById("WhoAreWe").innerHTML += "-nous ?"
    },2000)

    setTimeout(function() {
        document.getElementById("WhoAreWe").style.marginLeft = "85vw"
    },3000)

    setTimeout(function() {
        document.getElementById("WhoAreWe").style.marginLeft = "0"
    },8000)

    setTimeout(function() {
        document.getElementById("WhoAreWe").innerHTML = ""
    },14000)

}


window.onload = () => {
    main();
}