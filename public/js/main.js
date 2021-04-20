//Exo 1
// let x = prompt("Numéro 1: ");
// let y = prompt("Numéro 2: ");

// if (x == y) {
//     alert("Le nombre x et le nombre y sont ils égaux? OUI");
// } else {
//     alert("Le nombre x et le nombre y sont ils égaux? NON");
// }

//Exo 2
// let x = prompt("Numéro 1: ");
// let y = prompt("Numéro 2: ");

// if (x < y) {
//     alert("Le nombre x et-il plus petit que le nombre y ? :" + (x < y));
// } else {
//     alert("Le nombre x et-il plus petit que le nombre y ? :" + (x < y));
// }

//Exo 3
// let x = prompt("Numéro 1: ");
// let y = prompt("Numéro 2: ");
// let z = prompt("Numéro 3: ");

// if (x + y > z) {
//     alert("La somme du nombre x + le nombre y est-elle plus grande que le nombre z ? : " + (x + y > z));
// } else {
//     alert("La somme du nombre x + le nombre y est-elle plus grande que le nombre z ? : " + (x + y > z));
// }

//Exo 4
// let x = prompt("Entrez une phrase");
// let y = prompt("Estimez la longueur de votre phrase");

// if (x.length == y) {
//     alert("Vous avez bien estimer la longueur de votre phrase!");
// } else {
//     alert(`Incorrect tu étais à ${(Math.abs(x.length - y))} unités de la bonne réponse !`);
// }

//Exo 5
// let prénom = prompt("Entrez votre prénom : ");

// if (prénom == "" || prénom == " ") {
//     prompt("Attention vous devez remplir le champs ci-dessous, Quel est votre prénom ?");
// } else {
//     alert(`Bonjour ${prénom}!`)
// }

//Exo 6
// let x = confirm("Voulez-vous vous abonner?");
// let y = prompt("Voulez-vous la formule Luxe ou Normal? ");

// if (x = true) {
//     if (y == "Luxe" || y == "luxe") {
//         alert(`Félicitation, vous avez choisi la formule Luxe`);
//     } else if (y == "Normal" || y == "normal") {
//         alert("Merci pour votre abonnement.");
//     } else if (y == "" || y ==" ") {

//         let z = confirm("Etes vous certain de ne pas vouloir vous abonner?");

//         if (z == true) {
//             alert("Nous sommes triste de ne pas pouvoir vous compter parmis nous. Merci et bonne journée!");
//         } else if (z == false) {
//             prompt("Voulez-vous la formule Luxe ou Normal? ");
//         }
// }};

//Exo 7
// let question1 = prompt("Quel est le prénom de batman?");
// let question2 = prompt("Quel est le nom de batman?");

// let réponse1 = "Bruce";
// let réponse2 = "Wayne";

// if (question1 == réponse1 && question2 == réponse2) {
//     alert("Bien joué!");
// }
// else if (question1 == réponse1) {
//     alert("Vous vous êtes trompé sur le nom de batman. Vous y êtes presque!");
// }
// else if (question2 == réponse2) {
//     alert("Vous vous êtes trompé sur le prénom de batman. Vous y êtes presque!");
// }
// else {
//     alert("Vous avez échoué...");
// }

//Exo 8
// let age = prompt("Entrez votre age: ");
// let naissance = prompt("Entrez votre année de naissance: ");
// let date = new Date();
// let year = date.getFullYear();
// let age = year - naissance;

// if (age > 18 && age <= 100) {
//     alert("vous êtes majeur, vous pouvez réserver");
// } 
// else if (age > 0 && age < 18) {
//     alert("vous êtes mineur, l’accès est réservé aux grands");
// } 
// else if (age > 100) {
//     alert("vous êtes encore vivant ? Évitez de voir ce film pour le rester.");
// } 
// else if (age <= 0) {
//     alert("vous n’êtes même pas nés, n’essayez pas de tricher");
// }
// else {
//     alert("pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant.")
// }

//Exo 9
alert("Repondez aux questions suivantes par true ou false (sans majuscule)");
let x = prompt("est-ce que vous êtes riche ?");
let y = prompt("voulez-vous partir en vacance ?");
let z = prompt("est-ce que vous avez un chat ?");

if (y != true) {
    alert("pas de problème, ne partez pas en vacance");
}
else if (x != true || z != false) {
    alert("Même si vous le voulez, vous ne pouvez pas partir.");
}
else if (x != false && z != true) {
    alert("Vous pourriez partir en vacance si vous le voulez");
}
else if (x != false && z != true && y != false) {
    alert("Tout est parfait, partez en vacance !");
}
else if (x != false || z != true || y != false) {
    alert("Tout est parfait, partez en vacance !");
}
