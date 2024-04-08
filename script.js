document.addEventListener("DOMContentLoaded", function() {
    // Add a click event listener to each navigation link to toggle active class
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Remove active class from all links
            navLinks.forEach(link => {
                link.classList.remove("active");
            });
            // Add active class to the clicked link
            this.classList.add("active");
        });
    });

    // Add a scroll event listener to change header background color on scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#555";
        } else {
            header.style.backgroundColor = "#333";
        }
    });
});
