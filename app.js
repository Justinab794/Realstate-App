// Your existing properties array
const properties = [
    {
        name: "Luxury Villa",
        location: "New York",
        price: "$1,000,000"
    },
    {
        name: "Beachfront Condo",
        location: "Miami",
        price: "$750,000"
    },
    {
        name: "Suburban House",
        location: "Austin",
        price: "$300,000"
    }
];

// Function to display properties based on selected location
function displayProperties() {
    const propertyContainer = document.getElementById("properties");
    const selectedLocation = document.getElementById("locationFilter").value;

    propertyContainer.innerHTML = '';  // Clear existing listings

    properties.forEach(property => {
        // Only show properties that match the selected location or if 'all' is selected
        if (selectedLocation === 'all' || property.location === selectedLocation) {
            const propertyDiv = document.createElement("div");
            propertyDiv.classList.add("property");

            propertyDiv.innerHTML = `
                <h3>${property.name}</h3>
                <p>Location: ${property.location}</p>
                <p>Price: ${property.price}</p>
            `;

            propertyContainer.appendChild(propertyDiv);
        }
    });
}

// Function to handle form submission
document.getElementById('addPropertyForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent page reload

    // Get the values from the form inputs
    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const price = document.getElementById('price').value;

    // Create a new property object
    const newProperty = { name, location, price };

    // Add the new property to the array
    properties.push(newProperty);

    // Clear the form after submission
    document.getElementById('addPropertyForm').reset();

    // Display updated property list, considering the current location filter
    displayProperties();
});

// Function to handle location filter changes
function filterByLocation() {
    displayProperties();  // Re-display the properties based on the new location filter
}

// Call displayProperties when the page loads
window.onload = displayProperties;
