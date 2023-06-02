function main(){

    chrono()
    filtreDate()
    
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

function filtreRevue(){
    if(document.getElementById("articles").checked){
        document.getElementById("Lefebvre_Jridi").style.display = "flex";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "none";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "none";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "flex";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "flex";
    }
    if(document.getElementById("revues").checked){
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "flex";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "flex";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "none";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "none";
    }
    if(document.getElementById("toutes").checked){
        document.getElementById("Lefebvre_Jridi").style.display = "flex";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "flex";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "flex";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "flex";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "flex";
    }
}

function filtreDate(){
    var datanniv= new Date(document.getElementById("start").value)
    var bmonth= datanniv.getMonth() + 1
    var byear= datanniv.getFullYear()

    if(byear == "2022"){
        document.getElementById("Lefebvre_Jridi").style.display = "flex";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "none";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "none";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "flex";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "none";
    }
    else if(byear == "2022" && bmonth == "10"){
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "flex";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "flex";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "none";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "none";
    }
    else if(byear == "2023" && bmonth != "05"){
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "none";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "none";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "none";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "flex";
    }
    else{
        document.getElementById("Lefebvre_Jridi").style.display = "flex";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "flex";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "flex";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "flex";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "flex";
    }

}

function FiltreTitle(){                 //Je n'ai pas trouvé de meilleur manières en javascript pour filtrer les recherches en prenant en compte
                                        //les erreurs de l'utilisateur, ces fonctions sont un ptit peu longue et ne nécessite pas forcément
                                        //de commentaires

    let recherche = document.getElementById("commentaryTitle").value
    if(recherche == ""){
        document.getElementById("Lefebvre_Jridi").style.display = "flex";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "flex";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "flex";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "flex";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "flex";
    }
    else if(recherche == "R" || recherche == "Re" || recherche == "Rec" || recherche == "Reco" || recherche == "Recon" || recherche == "Recons" || recherche == "Reconsi" || 
    recherche == "Reconsid" || recherche == "Reconside" || recherche == "Reconsider" || recherche == "Reconsideri" || recherche == "Reconsiderin" || recherche == "Reconsidering" || 
    recherche == "Reconsidering " || recherche == "Reconsidering c" || recherche == "Reconsidering co" || recherche == "Reconsidering con" || recherche == "Reconsidering conc" || 
    recherche == "Reconsidering conce" || recherche == "Reconsidering concep" || recherche == "Reconsidering concept" || recherche == "Reconsidering conceptu" || 
    recherche == "Reconsidering conceptua" || recherche == "Reconsidering conceptual" || recherche == "Reconsidering conceptual " || recherche == "Reconsidering conceptual k" || 
    recherche == "Reconsidering conceptual kn" || recherche == "Reconsidering conceptual kno"){
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "none";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "none";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "none";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "flex";
    }
    else if(recherche == "Reconsidering conceptual know" || recherche == "Reconsidering conceptual knowl" || recherche == "Reconsidering conceptual knowle" || 
    recherche == "Reconsidering conceptual knowled" || recherche == "Reconsidering conceptual knowledg" || recherche == "Reconsidering conceptual knowledg" || 
    recherche == "Reconsidering conceptual knowledge" || recherche == "Reconsidering conceptual knowledge: " || recherche == "Reconsidering conceptual knowledge: H" || 
    recherche == "Reconsidering conceptual knowledge: He" || recherche == "Reconsidering conceptual knowledge: Het" || recherche == "Reconsidering conceptual knowledge: Hete" || 
    recherche == "Reconsidering conceptual knowledge: Heter" || recherche == "Reconsidering conceptual knowledge: Hetero" || 
    recherche == "Reconsidering conceptual knowledge: Heterog" || recherche == "Reconsidering conceptual knowledge: Heteroge" || 
    recherche == "Reconsidering conceptual knowledge: Heterogen"){
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "none";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "none";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "none";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "flex";
    }
    else if(recherche == "Reconsidering conceptual knowledge: Heterogene" || recherche == "Reconsidering conceptual knowledge: Heterogenei" || 
    recherche == "Reconsidering conceptual knowledge: Heterogeneit" || recherche == "Reconsidering conceptual knowledge: Heterogeneity" || 
    recherche == "Reconsidering conceptual knowledge: Heterogeneity " || recherche == "Reconsidering conceptual knowledge: Heterogeneity o" || 
    recherche == "Reconsidering conceptual knowledge: Heterogeneity of" || recherche == "Reconsidering conceptual knowledge: Heterogeneity of " || 
    recherche == "Reconsidering conceptual knowledge: Heterogeneity of i" || recherche == "Reconsidering conceptual knowledge: Heterogeneity of its" || 
    recherche == "Reconsidering conceptual knowledge: Heterogeneity of its " || recherche == "Reconsidering conceptual knowledge: Heterogeneity of its c" || 
    recherche == "Reconsidering conceptual knowledge: Heterogeneity of its co" || recherche == "Reconsidering conceptual knowledge: Heterogeneity of its com" || 
    recherche == "Reconsidering conceptual knowledge: Heterogeneity of its comp" || recherche == "Reconsidering conceptual knowledge: Heterogeneity of its compo" || 
    recherche == "Reconsidering conceptual knowledge: Heterogeneity of its compon" || recherche == "Reconsidering conceptual knowledge: Heterogeneity of its componen"|| 
    recherche == "Reconsidering conceptual knowledge: Heterogeneity of its component"|| recherche == "Reconsidering conceptual knowledge: Heterogeneity of its components"){
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "none";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "none";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "none";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "flex";
    }


    else if(recherche == "S" || recherche == "Se" || recherche == "Sem" || recherche == "Sema" || recherche == "Seman" || recherche == "Semant" || recherche == "Semanti" || recherche == "Semantic" || recherche == "Semantic Images Segmentation for autonomous driving using Self-Attention Knowledge Distillation"){
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "flex";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "none";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "none";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "none";
    }
    else if(recherche == "No-reference Point Clouds Quality Assessment using Transformer and Visual Saliency"){
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "none";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "flex";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "none";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "none";
    }
    else if(recherche == "CONCEPTION ET DEVELOPPEMENT D'UNE VOITURE AUTONOME"){
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "none";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "none";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "flex";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "none";
    }
    else if(recherche == "Mutualisation des Ressources IOT par Conteneurisation de Passerelle"){
        document.getElementById("Lefebvre_Jridi").style.display = "flex";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "none";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "none";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "none";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "none";
    }
    else{
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "none";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "none";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "none";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "none";
    }

}

function FiltreName(){

    let recherche = document.getElementById("commentary").value.toLowerCase()
    if(recherche == ""){
        document.getElementById("Lefebvre_Jridi").style.display = "flex";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "flex";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "flex";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "flex";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "flex";
    }

    else if(recherche == "a"){
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "flex";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "flex";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "flex";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "flex";
    }
    else if(recherche == "a" || recherche =="ay" || recherche =="ayo" || recherche =="ayou" || recherche =="ayoub" || recherche =="ayoub " || recherche =="ayoub k" || recherche =="ayoub ka" || recherche =="ayoub kar" || recherche =="ayoub kari" || recherche =="ayoub karin" || recherche =="ayoub karine"){
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "none";
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "flex";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "flex";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "flex";
    }
    else if(recherche =="s"){
        document.getElementById("Lefebvre_Jridi").style.display = "flex";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "none";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "flex";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "flex";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "flex";
    }
    else if(recherche == "s" || recherche == "sé" || recherche == "séb" || recherche == "séba" || recherche == "sébas" || recherche == "sébast" || recherche == "sébasti" || 
    recherche == "sébastie" || recherche == "sébastien" || recherche == "sébastien " || recherche == "se" || recherche == "seb" || recherche == "seba" || recherche == "sebas" || recherche == "sebast" || recherche == "sebasti" || 
    recherche == "sebastie" || recherche == "sebastien" || recherche == "sebastien "){
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "none";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "none";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "flex";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "flex";
    }
    else if(recherche == "m"){
        document.getElementById("Lefebvre_Jridi").style.display = "flex";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "flex";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "flex";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "none";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "flex";
    }
    else if(recherche == "ma" || recherche == "mah" || recherche == "mahe" || recherche == "maher" || recherche == "maher " || recherche == "maher j" || recherche == "maher jr" || 
    recherche == "maher jri" || recherche == "maher jrid" || recherche == "maher jridi"){
        document.getElementById("Lefebvre_Jridi").style.display = "flex";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "flex";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "flex";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "flex";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "none";
    }
    else if(recherche == "sébastien p" || recherche == "sébastien pu" || recherche == "sébastien pum" || 
    recherche == "sébastien puma" || recherche == "sebastien p" || recherche == "sebastien pu" || recherche == "sebastien pum" || 
    recherche == "sebastien puma" || recherche == "e" || recherche == "em" || recherche == "emm" || recherche == "emma" || recherche == "emman" || recherche == "emmanu" || 
    recherche == "emmanue" || recherche == "emmanuel" || recherche == "emmanuel " || recherche == "emmanuel s" || recherche == "emmanuel sa" || recherche == "emmanuel san" || 
    recherche == "emmanuel sand" || recherche == "emmanuel sande" || recherche == "emmanuel sander" || recherche == "m" || recherche == "ma" || recherche == "mat" || 
    recherche == "matt" || recherche == "matth" || recherche == "matthi" || recherche == "matthie" || recherche == "matthieu" || recherche == "matthieu " || 
    recherche == "matthieu s" || recherche == "matthieu sa" || recherche == "matthieu sau" || recherche == "matthieu saum" || recherche == "matthieu sauma" || 
    recherche == "matthieu saumar" || recherche == "matthieu saumard" || recherche == "i" || recherche == "is" || recherche == "isa" || recherche == "isab" || 
    recherche == "isabe" || recherche == "isabel" || recherche == "isabell" || recherche == "isabelle" || recherche == "isabelle " || recherche == "isabelle b" || 
    recherche == "isabelle ba" || recherche == "isabelle bar" || recherche == "isabelle barb" || recherche == "isabelle barbe" || recherche == "isabelle barbet" || 
    recherche == "au" || recherche == "aur" || recherche == "auré" || recherche == "aurél" || recherche == "auréli" || recherche == "aurélie" || 
    recherche == "aurélien" || recherche == "aurélien " || recherche == "aurélien l" || recherche == "aurélien la" || recherche == "aurélien lat" || 
    recherche == "aurélien lato" || recherche == "aurélien latou" || recherche == "aurélien latouc" || recherche == "aurélien latouch" || recherche == "aurélien latouch" || 
    recherche == "aurélien latouche" || recherche == "aure" || 
    recherche =="aurel" || recherche =="aureli" || recherche == "aurelie" || recherche == "aurelien" || recherche == "aurelien " || recherche == "aurelien l" || 
    recherche == "aurelien la" || recherche == "aurelien lat" || recherche == "aurelien lato" || recherche == "aurelien latou" || recherche == "aurelien latouc" || 
    recherche == "aurelien latouch" || recherche == "aurelien latouche"){
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "flex";
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "none";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "none";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "none";
    }
    else if(recherche == "t" || recherche == "th" || recherche == "thi" || recherche == "thib" || recherche == "thiba" || recherche == "thibau" || recherche == "thibaul" || 
    recherche == "thibault" || recherche == "thibault " || recherche == "thibault n" || recherche == "thibault na" || recherche == "thibault nap" || recherche == "thibault napo" || 
    recherche == "thibault napol" || recherche == "thibault napolé" || recherche == "thibault napoléo" || recherche == "thibault napoléon" || recherche == "thibault napole" || 
    recherche == "thibault napoleo" || recherche == "thibault napoleon"){
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "none";
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "flex";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "none";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "none";
    }
    else if(recherche == "sa" || recherche == "sal" || recherche == "sali" || recherche == "salim" || recherche == "salima" || recherche == "salima " || recherche == "salima b" || 
    recherche == "salima bo" || recherche == "salima bo" || recherche == "salima bou" || recherche == "salima bour" || recherche == "salima bourb" || recherche == "salima bourbi" || 
    recherche == "salima bourbia" || recherche == "al" || recherche == "ala" || recherche == "alad" || recherche == "aladi" || recherche == "aladin" || recherche == "aladine" || 
    recherche == "aladine " || recherche == "aladine c" || recherche == "aladine ch" || recherche == "aladine che" || recherche == "aladine chet" || recherche == "aladine cheto" || 
    recherche == "aladine chetou" || recherche == "aladine chetoua" || recherche == "aladine chetouan" || recherche == "aladine chetouani" || recherche == "mo" || 
    recherche == "moh" || recherche == "moha" || recherche == "moham" || recherche == "mohamm" || recherche == "mohamme" || recherche == "mohammed" || recherche == "mohammed " || 
    recherche == "mohammed e" || recherche == "mohammed el" || recherche == "mohammed el " || recherche == "mohammed el h" || recherche == "mohammed el ha" || 
    recherche == "mohammed el has" || recherche == "mohammed el hass" || recherche == "mohammed el hasso" || recherche == "mohammed el hassou" || 
    recherche == "mohammed el hassoun" || recherche == "mohammed el hassouni"){
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "none";
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "none";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "flex";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "none";
    }
    else if(recherche == "r" || recherche == "re" || recherche == "rem" || recherche == "remi" || recherche == "remi " || recherche == "remi a" || recherche == "remi ad" || 
    recherche == "remi add" || recherche == "remi adde" || recherche == "ré" || recherche == "rém" || recherche == "rémi" || recherche == "rémi " || recherche == "rémi a" || 
    recherche == "rémi ad" || recherche == "rémi add" || recherche == "rémi adde" || recherche == "sébastien d" || recherche == "sébastien de" || recherche == "sébastien dem" || 
    recherche == "sébastien demo" || recherche == "sébastien demou" || recherche == "sébastien demous" || recherche == "sébastien demouss" || recherche == "sébastien demousse" || 
    recherche == "sébastien demoussel" || recherche == "sébastien demoussell" || recherche == "sébastien demousselle" || recherche == "sebastien d" || recherche == "sebastien de" || 
    recherche == "sebastien dem" || recherche == "sebastien demo" || recherche == "sebastien demou" || recherche == "sebastien demous" || recherche == "sebastien demouss" || 
    recherche == "sebastien demousse" || recherche == "sebastien demoussel" || recherche == "sebastien demoussell" || recherche == "sebastien demousselle"){
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "none";
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "none";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "none";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "flex";
    }
    else if(recherche == "sy" || recherche == "syl" || recherche == "sylv" || recherche == "sylva" || recherche == "sylvai" || recherche == "sylvain" || recherche == "sylvain " || 
    recherche == "sylvain le" || recherche == "sylvain lef" || recherche == "sylvain lefe" || recherche == "sylvain lefeb" || recherche == "sylvain lefebv" || recherche == "sylvain lefebvr" || recherche == "sylvain lefebvre"){
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "none";
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "none";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "none";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "flex";
    }
    else{
        document.getElementById("Lefebvre_Jridi").style.display = "none";
        document.getElementById("Karine_Napoléon_Jridi").style.display = "none";
        document.getElementById("Bourbia_Karina_Chetouani_Hassouni_Jridi").style.display = "none";
        document.getElementById("Karine_Jridi_Adde_Demousselle").style.display = "none";
        document.getElementById("Puma_Sander_Saumard_Barbet_Latouche").style.display = "none";
    }

}


window.onload = () => {
    main();
}