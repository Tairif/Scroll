//Créer un événément au scroll

// Variable pour stocker la position de défilement
let scrollPosition = 0;

// Ajouter un écouteur d'événement "scroll" à la fenêtre
window.addEventListener("scroll", () => {

  // Comparer la position actuelle avec la position de défilement
  if (scrollPosition < window.scrollY) {
    // Si la position actuelle est inférieure à la position de défilement,
    // cela signifie que l'utilisateur fait défiler vers le bas

    // Cacher la barre de navigation en déplaçant sa position vers le haut (-60px)
    navbar.style.top = "-60px";
  } else {
    // Si la position actuelle est supérieure à la position de défilement,
    // cela signifie que l'utilisateur fait défiler vers le haut

    // Afficher à nouveau la barre de navigation en plaçant sa position à 0
    navbar.style.top = 0;
  }

  // Mettre à jour la position de défilement avec la position actuelle
  scrollPosition = window.scrollY;
});