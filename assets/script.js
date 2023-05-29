const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

for (var i = 0; i < slides.length; i++) {
  console.log(slides[i]);
}

var img_left = document.querySelector('.arrow_left');
var img_right = document.querySelector('.arrow_right');

img_left.onclick = function() {
	 console.log("Cliquz flèche gauche");
}

img_right.onclick = function() {
	console.log("Cliquz flèche droite");
}







let position = 0;

function verifieposition() {
    if (position >= slides.length) {
        position = 0;
    } else if (position < 0) {
        position = slides.length - 1;
    }
}

// Création des points
const bullet = document.querySelector('.dots');
for (let i = 0; i < slides.length; i++) {
	const point = document.createElement("div");
	bullet.appendChild(point);
	point.classList.add("dot");
}

// Sélection du point en fonction de la position du slider
let bulletselect = positionbullet();
bulletselect.classList.add("dot_selected");

function positionbullet() {
	return document.querySelector(`.dots .dot:nth-child(${position + 1})`);
}

// Changement de point lors du changement de slide
function changebullet() {
	bulletselect.classList.remove("dot_selected");
	bulletselect = positionbullet();
	bulletselect.classList.add("dot_selected");
}

// Affichage de l'image et de la tagline
function imageTagline() {
	document.querySelector('.banner-img').src = "./assets/images/slideshow/" + slides[position].image;
	document.querySelector("#banner p").innerHTML = slides[position].tagLine;
}


// Changement de slide
function changementslides(direction) {
	position += direction;
	verifieposition();
	imageTagline();
	changebullet();
}

// Événements sur les boutons gauche et droit
const bgauche = document.querySelector('.arrow_left');
bgauche.addEventListener('click', function () {
	changementslides(-1);
	console.log(position);
});

const bdroit = document.querySelector('.arrow_right');
bdroit.addEventListener('click', function () {
	changementslides(+1);
	console.log(position);
});
