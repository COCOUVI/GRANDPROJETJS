let myInput=document.getElementById("psw")
let letter=document.getElementById("letter")
let capital=document.getElementById("capital")
let number=document.getElementById("number")
let length=document.getElementById("length")
//lorque l'utilisateur clique sur le champ de mot de passe afficher la boite message
myInput.onfocus= function(){
    document.getElementById("message").style.display="flex"
}
//lorsque l'utilisateur clique en dehors du champ de mot de passe masquer la boite a message
myInput.onblur= function(){
    document.getElementById("message").style.display="none"
}
// lorsque   l'utilisateur commence a taper quelque chose dans le champ de mot de passe
myInput.onkeyup=function(){
    //valider les letter minuscules
    let letterintest= new RegExp("[a-z]","g")
    let test1=letterintest.test(myInput.value)
    if(test1===true){
        letter.classList.remove("Invalid")
        letter.classList.add("valid")
    } else{
        letter.classList.remove("valid")
        letter.classList.add("invalid")
    }
    //pour les lettres majuscules
    let maj= new RegExp("[A-Z]","g")
    let test2=maj.test(myInput.value)
    if(test2===true){
        capital.classList.remove("Invalid")
        capital.classList.add("valid")
    } else{
        capital.classList.remove("valid")
        capital.classList.add("invalid")
    }
    //pour verifier l'existence des nombres
    let numberintest= new RegExp("[0-9]","g")
    let test3=numberintest.test(myInput.value)
    if(test3===true){
        number.classList.remove("Invalid")
        number.classList.add("valid")
    } else{
        number.classList.remove("valid")
        number.classList.add("invalid")
    }
    if(myInput.value.length>=8){
        length.classList.remove("Invalid")
        length.classList.add("valid")
    } else{
        length.classList.remove("valid")
        length.classList.add("invalid")
    }

}