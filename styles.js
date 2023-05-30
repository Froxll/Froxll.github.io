function main(){

    let phone = document.getElementById("phone_number");
    console.log("test")
    
    phone.addEventListener("copy", function() {
        var verif = prompt("Voulez vous vraiment appeler ce numero, si oui réecriver le ci-dessous","06 00 00 00 00");
        if (phone == verif) {
            console.log("vous appelez ce numéro : +",phone);
        }
    });

    document.getElementById("accueil").onclick = showLoader()
    document.getElementById("projets").onclick = showLoader()
    document.getElementById("publications").onclick = showLoader()
    document.getElementById("partenaires").onclick = showLoader()
    document.getElementById("thematiques").onclick = showLoader()
    document.getElementById("plateformes").onclick = showLoader()
    document.getElementById("contactez").onclick = showLoader()
    document.getElementById("plan").onclick = showLoader()
    document.getElementById("offres").onclick = showLoader()
    
}

function showLoader(){

    console.log("TEST SHOWLOADER")

    document.getElementById("header").style.visibility = "hidden"
    document.getElementById("main").style.visibility = "hidden"
    document.getElementById("footer").style.visibility = "hidden"

    document.getElementById("loader").style.visibility = "visible"
    document.getElementById("preloader").style.visibility = "visible"
    

    setTimeout(unshowLoader,2000)
}

function unshowLoader(){

    console.log("TEST UNSHOWLOADER")

    document.getElementById("header").style.visibility = "visible"
    document.getElementById("main").style.visibility = "visible"
    document.getElementById("footer").style.visibility = "visible"

    document.getElementById("loader").style.visibility = "hidden"
    document.getElementById("preloader").style.visibility = "hidden"

}

function navalert() {

    let conf = confirm("Voulez-vous vraiment vous diriger vers la page membre ?");

    if (conf == true){
        window.location.href = "../membres/membres.html";
    }

}

function MessageCopy() {
    document.addEventListener('copy', function(event) {
      event.preventDefault();
      console.log("Copiez pas svp");
    });
  }
  
  MessageCopy();

main()
