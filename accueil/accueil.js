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

    window.onload = (event) => {
        
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


main();