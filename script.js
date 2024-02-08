// Tableau de noms de personnages
let geek = [
    'Mario',
    'Luigi',
    'Peach',
    'Yoshi',
    'Kirby',
    'Link',
    'Pikachu',
    'Kratos',
    'Sonic',
    'Crash',
    'CJ',
    'Naruto',
    'Ezio',
    'Spyro',
    'Sackboy',
    'Onyxia',
    'Cenarius',
    'Khadgar',
    'Tyrande',
    'Sylvanas',
    'Allay',
    'Golem',
    'Enderman',
    'Barbie',
    'Homer',
    'Mickey',
    'Minnie',
    'Winnie',
    'Asterix',
    'Obelix',
    'Volt',
    'Marge',
    'Totoro',
    'Tchoupi',
    'Dora'
]
// Tableau des villes (insolites) de France 
let city = [
   'deMassalia',
   'deNice',
   'deAnus',
   'deTrécon',
   'deMontcuq',
   'deSallespisse',
   'deArnarcLaPoste',
   'deLaTrique',
   'deSainteVerge',
   'deLeFion',
   'deBourré',
   'deeSalau',
   'deSaligos',
   'deOust',
   'deGland',
   'deBèze',
   'deLaTombe',
   'deCorpsNuds',
   'deMonteton',
   'deMouais',
   'dePoil',
   'deBezons',
   'deBranlette',
   'deLaPrune',
   'deLaMouche',
   'deCondom',
   'deBoucEtourdi',
   'deBidon',
   'deFolles',
   'deGlaire',
   'deLaQueueEnBrie',
   'deEcouteSilPleut',
   'deGrateloup',
   'deLaTronche', 
   'deLouze',
   'deVillePerdue',
   'deVatan'
]

// Genérer le pseudo aléatoirement
function generator(){
    const geekAleatoire = geek[Math.floor(Math.random() * geek.length)]
    const cityAleatoire = city[Math.floor(Math.random() * city.length)]

// Afficher le pseudo
const pseudo = geekAleatoire + cityAleatoire;
document.getElementById("pseudo").textContent = pseudo;

}