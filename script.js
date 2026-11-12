

//Commentaire
//alert("Hello, World!");
/* Commentaire sur plusieurs lignes 
   ho yes
*/
console.log("Début du code JavaScript");

//Variable local
let maVariable1 = "je suis 1";
//Variable globale
var maVariable2 = "je suis 2";

console.log(maVariable1);
console.log(maVariable2);

let maVariable3 = maVariable1 + maVariable2;
console.log(maVariable3);

let maVariable4 = 3.14;
let maVariable5 =true;
let monTableau = [maVariable1, maVariable2, maVariable3, maVariable4, maVariable5];
console.log(monTableau);    
let maVariable6 = maVariable4 + maVariable5;
console.log(maVariable6);
let monobjet = {"Nom":"Dupont", "Prenom":"Jean", "Age":33, "Adresse":{"Rue":"1 rue de la Paix", "Ville":"Paris", "CodePostal":75000}};
if(maVariable6 > 3){
    console.log("maVariable6 est supérieur à 3");
}else{
    console.log("maVariable6 est inférieur ou égal à 3");
}

for(let i=0; i<monTableau.length; i++){
    console.log(monTableau[i]);
}
console.log(monobjet);