// Get elements
const popup = document.getElementById("termsPopup");
const openPopupButton = document.getElementById("openPopupButton");
const acceptCheckbox = document.getElementById("acceptCheckbox");
const proceedButton = document.getElementById("proceedButton");

// Open popup on button click
openPopupButton.addEventListener("click", () => {
  popup.style.display = "flex";
});

// Enable "Proceed" button when checkbox is checked
acceptCheckbox.addEventListener("change", (e) => {
  proceedButton.disabled = !e.target.checked;
});

// Close popup on clicking "Proceed"
proceedButton.addEventListener("click", () => {
  alert("You have accepted the terms and conditions.");
  popup.style.display = "none";
  acceptCheckbox.checked = false; // Reset checkbox
  proceedButton.disabled = true; // Disable button again
});
