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

function openModal() {
    let modal = document.getElementById("Modal");
    modal.style.display = "block";
}
  
function closeModal() {
    let modal = document.getElementById("Modal");
    modal.style.display = "none";
}


function openModal2() {
    let modal = document.getElementById("Modal2");
    modal.style.display = "block";
}
  
function closeModal2() {
    let modal = document.getElementById("Modal2");
    modal.style.display = "none";
}

window.onload = () => {
    main();
}