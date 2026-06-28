document.addEventListener("DOMContentLoaded", () => {
    console.log("MainCrafts Landing Page Loaded Successfully");

    // Elements
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown");

    // Mobile Navigation Drawer Toggle
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            
            // Toggle hamburger icon animation or state
            const icon = menuToggle.querySelector("i");
            if (icon) {
                if (navMenu.classList.contains("active")) {
                    icon.className = "fas fa-times";
                } else {
                    icon.className = "fas fa-bars";
                }
            }
        });
    }

    // Services Dropdown Menu Toggle (Mobile click handling)
    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener("click", (e) => {
            // Only toggle via click when on mobile screen width (less than 768px)
            if (window.innerWidth < 768) {
                e.preventDefault();
                dropdownToggle.classList.toggle("active");
                dropdownMenu.classList.toggle("active");
            }
        });
    }

    // Close mobile menu when clicking outside of header
    document.addEventListener("click", (e) => {
        const header = document.querySelector("header");
        if (header && !header.contains(e.target) && navMenu && navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            const icon = menuToggle.querySelector("i");
            if (icon) {
                icon.className = "fas fa-bars";
            }
        }
    });

    // Close mobile menu on resize to desktop view
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            if (navMenu && navMenu.classList.contains("active")) {
                navMenu.classList.remove("active");
                const icon = menuToggle.querySelector("i");
                if (icon) {
                    icon.className = "fas fa-bars";
                }
            }
            if (dropdownToggle && dropdownToggle.classList.contains("active")) {
                dropdownToggle.classList.remove("active");
            }
            if (dropdownMenu && dropdownMenu.classList.contains("active")) {
                dropdownMenu.classList.remove("active");
            }
        }
    });

    // Intersection Observer for scroll animations
    const revealSections = document.querySelectorAll(".reveal");
    
    if (revealSections.length > 0) {
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target); // Animates once
                }
            });
        }, revealOptions);

        revealSections.forEach(section => {
            revealObserver.observe(section);
        });
    }
});