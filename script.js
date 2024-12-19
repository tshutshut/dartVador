function navigateTo(page) {
    alert(`Navigating to ${page}`); // Placeholder function for navigation
}

// Function to toggle the visibility of the dropdown
function toggleDropdown() {
    const dropdown = document.getElementById("playerDropdown");
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
}

// Function to handle player selection
function selectPlayer(playerName) {
    // Check if the player is already added
    const selectedPlayers = document.getElementById("selectedPlayers");
    if (Array.from(selectedPlayers.children).some(player => player.textContent.includes(playerName))) {
        alert(`${playerName} is already added.`);
        return;
    }

    // Create a new player entry
    const playerEntry = document.createElement("div");
    playerEntry.style.display = "flex";
    playerEntry.style.alignItems = "center";
    playerEntry.style.marginBottom = "5px";

    const playerNameSpan = document.createElement("span");
    playerNameSpan.textContent = playerName;
    playerNameSpan.style.marginRight = "10px";

    const removeButton = document.createElement("button");
    removeButton.textContent = "x";
    removeButton.style.border = "none";
    removeButton.style.borderRadius = "50%";
    removeButton.style.width = "20px";
    removeButton.style.height = "20px";
    removeButton.style.display = "flex";
    removeButton.style.alignItems = "center";
    removeButton.style.justifyContent = "center";
    removeButton.style.backgroundColor = "#f44336";
    removeButton.style.color = "white";
    removeButton.style.cursor = "pointer";
    removeButton.style.fontSize = "12px";
    removeButton.onclick = () => {
        selectedPlayers.removeChild(playerEntry);
    };

    playerEntry.appendChild(playerNameSpan);
    playerEntry.appendChild(removeButton);
    selectedPlayers.appendChild(playerEntry);

    // Hide the dropdown after selection
    document.getElementById("playerDropdown").style.display = "none";
}
