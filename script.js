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
