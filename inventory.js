// Initialize inventory
let heroInventory = ["Rusty Sword", "Health Potion", "Magic Ring", "The Light Bringer Ring"];

// Get DOM elements
let itemInput;
let addItemButton;
let removeItemButton;
let heroInventoryDisplay;

// Initialize elements once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    itemInput = document.getElementById('item-input');
    addItemButton = document.getElementById('add-item');
    removeItemButton = document.getElementById('remove-item');
    heroInventoryDisplay = document.getElementById('hero-inventory');

    // Add event listeners
    if (addItemButton && removeItemButton) {
        addItemButton.addEventListener('click', addNewItem);
        removeItemButton.addEventListener('click', removeItem);
        
        // Initial inventory display
        displayUpdatedInventory();
    }
});

function displayUpdatedInventory() {
    if (heroInventoryDisplay) {
        heroInventoryDisplay.innerHTML = `
            <h3>Hero's Inventory:</h3>
            <ul>${heroInventory.map(item => `<li>${item}</li>`).join('')}</ul>
        `;
    }
}

function addNewItem() {
    const newItem = itemInput.value.trim();
    if (newItem && !heroInventory.includes(newItem)) {
        heroInventory.push(newItem);
        displayUpdatedInventory();
        itemInput.value = '';
    }
}

function removeItem() {
    const itemToRemove = itemInput.value.trim();
    const index = heroInventory.indexOf(itemToRemove);
    if (index > -1) {
        heroInventory.splice(index, 1);
        displayUpdatedInventory();
        itemInput.value = '';
    }
}