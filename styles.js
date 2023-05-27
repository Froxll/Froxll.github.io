function main(){

    

    document.getElementById("membres").onclick = showLoader()
    console.log("fonctionne")

    document.getElementById("projets").onclick = showLoader()
    console.log("fonctionne")

    document.getElementById("thematiques").onclick = showLoader()

    document.getElementById("plateformes").onclick = showLoader()

    document.getElementById("publications").onclick = showLoader()

    document.getElementById("partenaires").onclick = showLoader()

    document.getElementById("contactez").onclick = showLoader()

    document.getElementById("plans").onclick = showLoader()

    document.getElementById("offres").onclick = showLoader()
    
}

function showLoader(){

    console.log("TEST SHOWLOADER")

    document.getElementById("header").style.display = "none"
    document.getElementById("main").style.display = "none"
    document.getElementById("footer").style.display = "none"

    document.getElementById("loader").style.display = "block"
    document.getElementById("preloader").style.display = "block"

    setTimeout(unshowLoader,2000)
}

function unshowLoader(){

    console.log("TEST UNSHOWLOADER")

    document.getElementById("header").style.display = "block"
    document.getElementById("main").style.display = "block"
    document.getElementById("footer").style.display = "block"

    document.getElementById("loader").style.display = "none"
    document.getElementById("preloader").style.display = "none"

}

main()
