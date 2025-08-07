document.querySelector("form").addEventListener("submit", function(event) {
    const nameInput = document.getElementById("name").value.trim();
    if (nameInput === "") {
        alert("Please enter your name before submitting.");
        event.preventDefault(); // Prevent form from submitting
    }
});
