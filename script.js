let carsData = [
    {
        name: "BMW",
        model: "X5",
        color: "Red",
        price: 50000,
        description: "A luxury car with high performance and comfort.",
        image: "./BMW.jpg",
        isImported: true,
    },
    {
        name: "Mercedes",
        model: "Benz",
        color: "White",
        price: 60000,
        description: "An elegant car with advanced technology and premium features.",
        image: "./Mercedes.jpg",
        isImported: false,
    },
    {
        name: "Audi",
        model: "A6",
        color: "Silver",
        price: 55000,
        description: "A stylish car with cutting-edge design and performance.",
        image: "./Audi.jpg",
        isImported: true,
    },
    {
        name: "Toyota",
        model: "Corolla",
        color: "Blue",
        price: 30000,
        description: "A reliable car with good fuel efficiency.",
        image: "./Toyota.jpg",
        isImported: false,
    },
];

let carListContainer = document.querySelector(".car-List-container");
let searchInpEl = document.querySelector(".search-input");

// Function to create car cards
function createCarCard(cars) {
    for (let i = 0; i < cars.length; i++) {
        let carsCard = cardElement(cars[i]);
        carListContainer.innerHTML += carsCard; 
    }
}

createCarCard(carsData);

// Function to create a car card element
function cardElement(carCard) {
    return `
        <div class="car-card">
            <img src="${carCard.image}" alt="${carCard.name} ${carCard.model}" class="cars-image">
            <div class="car-card-content">
                <h2>${carCard.name} ${carCard.model}</h2>
                <p class="card-color">Color: ${carCard.color}</p>
                <p class= "card-price">Price: ${carCard.price}$</p>
                <p>Description: ${carCard.description}</p>
            </div>    
        </div>
    `;
}

// Function to filter cars
function filterCars() {
    let elementValue = searchInpEl.value.toLowerCase();
    if(!elementValue){
        return;
    } else if (
                elementValue !== "imported" &&
                elementValue !== "pakistani" &&
                elementValue !== "all" &&
                elementValue !== "toyota" &&
                elementValue !== "audi" &&
                elementValue !== "mercedes" &&
                elementValue !== "bmw"
            ) {
        searchInpEl.value = "";
        let errroMessage = `<h2 class="error-message">Not Found</h2>`;
        carListContainer.innerHTML = errroMessage;
        return;
    }
    
    let filteredCars = [];
    for (let i = 0; i < carsData.length; i++) {
        let carData = carsData[i];
        if(elementValue === "toyota" && carData.name.toLowerCase() === "toyota"){
            filteredCars.push(carData);
        }
        else if (elementValue === "audi" && carData.name.toLowerCase() === "audi"){
            filteredCars.push(carData);
        }
        else if (elementValue === "mercedes" && carData.name.toLowerCase() === "mercedes"){
            filteredCars.push(carData);
        }
        else if (elementValue === "bmw" && carData.name.toLowerCase() === "bmw"){
            filteredCars.push(carData);
        }
        else if(elementValue === "imported" && carData.isImported){
            filteredCars.push(carData);
        }
        else if(elementValue === "pakistani" && !carData.isImported){
            filteredCars.push(carData);
        }
        else if(elementValue === "all"){
            filteredCars = carsData.slice(0);
        }
    }

    carListContainer.innerHTML = "";
    createCarCard(filteredCars);
    searchInpEl.value = ""; // Clear the input field after filtering
}

// function filterCars(element){
//     let filteredCars = carsData.filter((car) => {
//         if (element.value === "Imported") {
//             return car.isImported;
//         } else if (element.value === "Pakistani") {
//             return !car.isImported;
//         } else {
//             return true; // For "All" option
//         }
//     })

//     carListContainer.innerHTML = "";
//     createCarCard(filteredCars);
// }