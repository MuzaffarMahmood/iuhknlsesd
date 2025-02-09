const menuToggle = document.getElementById("menu-toggle");
const navOverlay = document.getElementById("nav-overlay");
const closeBtn = document.getElementById("close-btn");

// Open Menu
menuToggle.addEventListener("click", () => {
    navOverlay.classList.add("active");
	closeBtn.classList.add("active");
	menuToggle.classList.remove("active");
});

// Close Menu when clicking 'X'
closeBtn.addEventListener("click", () => {
    navOverlay.classList.remove("active");
	closeBtn.classList.remove("active");
	menuToggle.classList.add("active");
});

// Close Menu when clicking outside menu content
navOverlay.addEventListener("click", (event) => {
    if (event.target === navOverlay) {
        navOverlay.classList.remove("active");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const termsCheckbox = document.getElementById("terms");
    const submitButton = document.querySelector("button[type='submit']");

    // Initially disable the button
    submitButton.disabled = true;

    // Add event listener to enable/disable button based on checkbox state
    termsCheckbox.addEventListener("change", function () {
        submitButton.disabled = !this.checked;
    });
});
