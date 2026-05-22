// 1. Notre base de données de biens immobiliers (Mock Data)
const properties = [
    {
        id: 1,
        image: "./images/images-fiches/maison-1.jpg", 
        alt: "main-image-maison-1",
        specs: "3 Ch | 2 Sdb | 98 m2",
        location: "saint-raphael",
        cityTag: "saint-raphael",
        type: "house",
        price: "345 000 €",
        tags: ["garden", "terrace", "ac"]
    },
    {
        id: 2,
        image: "./images/images-fiches/maison-2.jpg",
        alt: "main-image-maison-2",
        specs: "6 Ch | 6 Sdb | 338 m2",
        location: "saint-raphael",
        cityTag: "saint-raphael",
        type: "house",
        price: "1 280 000 €",
        tags: ["terrace", "pool", "fitness", "garden", "ac"]
    },
    {
        id: 3,
        image: "./images/images-fiches/appartement-1.jpg",
        alt: "main-image-appartement-1",
        specs: "2 Ch | 1 Sdb | 65 m2",
        location: "frejus",
        cityTag: "frejus",
        type: "apartment",
        price: "297 000 €",
        tags: ["ac", "terrace"]
    }
];

const propertyContainer = document.querySelector(".property-container");
const citySelect = document.getElementById("city");
const typeSelect = document.getElementById("type");
const checkboxesTags = document.querySelectorAll("input[name='highlights']");
// console.log("Mon conteneur HTML ciblé :", checkboxesTags);

function displayProperties(items) {

    // Ré-initialise le container
    propertyContainer.innerHTML = "";
  
// Boucle pour chaque bien
    items.forEach(bien => {
        const propertyCard = `
    <div class="property-card">
        <div class="card-image">
            <img src="${bien.image}" alt="${bien.alt}" />
        </div>
        <div class="card-content">
            <p class="infos-property">
                <span>${bien.specs}</span>
            </p>
            <p class="card-location">
                <strong>Location: </strong>
                <span class="property-sector">${bien.location}</span>
            </p>
            <div class="card-highlights">
                <strong>The very best: </strong>
                <span class="property-tags">${bien.tags.join(', ')}</span>
            </div>
            <div class="card-price">${bien.price}</div>
        </div>
    </div>
`;
    // injecter dans la page
    propertyContainer.innerHTML += propertyCard;
});
}

displayProperties(properties);

function filterAllTogether() {
    const selectedCity = citySelect.value; // On regarde la ville sélectionnée à cet instant
    const selectedType = typeSelect.value; // On regarde le type sélectionné à cet instant

    const checkedTags = Array.from(checkboxesTags)
                             .filter(cb => cb.checked)
                             .map(cb => cb.value);

    // On applique le filtre sur les DEUX critères en même temps !
    const filteredList = properties.filter(bien => {
        // Condition pour la ville (celle que tu as écrite)
        const matchCity = selectedCity === "all" || bien.cityTag === selectedCity;
        
        // Condition pour le type (sur le même modèle)
        const matchType = selectedType === "all" || bien.type === selectedType;

        // Si l'utilisateur n'a rien coché, matchTags sera automatiquement "true" (on garde tout)
        const matchTags = checkedTags.every(tag => bien.tags.includes(tag));
        
        // On ne garde le bien que si les DEUX conditions sont vraies (avec l'opérateur ET : &&)
        return matchCity && matchType && matchTags;
    });

    // Enfin, on affiche le résultat final
    displayProperties(filteredList);
}

citySelect.addEventListener('change', () => {
    filterAllTogether();
});

typeSelect.addEventListener('change', () => {
filterAllTogether();
});

checkboxesTags.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        filterAllTogether(); 
    });
});