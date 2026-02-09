// Code JavaScript simple

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Bouton "Voir plus sur moi"
    const moreBtn = document.getElementById('moreBtn');
    const moreContent = document.getElementById('moreContent');
    
    moreBtn.addEventListener('click', function() {
        if (moreContent.classList.contains('hidden')) {
            moreContent.classList.remove('hidden');
            moreBtn.textContent = 'Voir moins';
        } else {
            moreContent.classList.add('hidden');
            moreBtn.textContent = 'Voir plus sur moi';
        }
    });
    
    // 2. Bouton "Changer le thème"
    const themeBtn = document.getElementById('themeBtn');
    
    themeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        
        if (document.body.classList.contains('dark')) {
            themeBtn.textContent = 'Thème clair';
        } else {
            themeBtn.textContent = 'Changer le thème de la page';
        }
    });
    
    // 3. Compteur de visites
    const counter = document.getElementById('counter');
    let visits = localStorage.getItem('visits');
    
    if (visits) {
        visits = parseInt(visits) + 1;
    } else {
        visits = 1;
    }
    
    localStorage.setItem('visits', visits);
    counter.textContent = visits;
    
    // 4. Message de bienvenue dans la console
    console.log("Bienvenue sur ma page personnelle !");
    console.log("Cette page a été visitée " + visits + " fois");
    
    // 5. Afficher la date actuelle dans le footer (optionnel)
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString('fr-FR', options);
    
    // Ajouter la date au footer si on veut
    const footerContent = document.querySelector('.footer-content');
    const dateElement = document.createElement('p');
    dateElement.textContent = "Date de visite : " + dateString;
    dateElement.style.marginTop = "10px";
    dateElement.style.fontSize = "0.9rem";
    dateElement.style.color = "#7f8c8d";
    
    // Insérer avant le compteur de visites
    const visitsDiv = document.querySelector('.visits');
    footerContent.insertBefore(dateElement, visitsDiv);
});