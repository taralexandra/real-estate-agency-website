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
        tags: ["garden ", "terrace ", "AC "]
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
        tags: ["terrace ", "swimming pool ", "fitness ", "garden ", "AC "]
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
        tags: ["AC ", "terrace "]
    }
];

const propertyContainer = document.querySelector(".property-container");

// console.log("Le script est branché ! Voici nos biens :", properties);
// console.log("Mon conteneur HTML ciblé :", propertyContainer);

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