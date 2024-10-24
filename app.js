const properties = [
    {
        name: "Hotel Taj",
        location: "Karnataka",
        price: "$1,000,000"
    },
    {
        name: "Earth Hotel",
        location: "Chennai",
        price: "$750,000"
    },
    {
        name: "Campston",
        location: "Kerala",
        price: "$300,000"
    }
];

function displayProperties() {
    const propertyContainer = document.getElementById("properties");
    properties.forEach(property => {
        const propertyDiv = document.createElement("div");
        propertyDiv.classList.add("property");

        propertyDiv.innerHTML = `
            <h3>${property.name}</h3>
            <p>Location: ${property.location}</p>
            <p>Price: ${property.price}</p>
        `;

        propertyContainer.appendChild(propertyDiv);
    });
}
function filterByLocation() {
    const location = document.getElementById("locationFilter").value;
    const filteredProperties = location === "all" ? properties : properties.filter(property => property.location === location);
    
    const propertyContainer = document.getElementById("properties");
    propertyContainer.innerHTML = ""; // Clear previous listings

    filteredProperties.forEach(property => {
        const propertyDiv = document.createElement("div");
        propertyDiv.classList.add("property");

        propertyDiv.innerHTML = `
            <h3>${property.name}</h3>
            <p>Location: ${property.location}</p>
            <p>Price: ${property.price}</p>
        `;

        propertyContainer.appendChild(propertyDiv);
    });
}


window.onload = displayProperties;
