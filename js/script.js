// ========================================
// NAVBAR COMPONENT
// ========================================

const navbarHTML = `
<div class="navbar">
    <div class="liquid"></div>

    <nav>
        <div class="indicator"></div>

        <a class="nav-link" href="index.html">Home</a>
        <a class="nav-link" href="wepons.html">Weapons</a>
        <a class="nav-link" href="characters.html">Strikers</a>
        <a class="nav-link" href="collabs.html">Collabs</a>
        <a class="nav-link" href="creators.html">Creators</a>
    </nav>
</div>
`;

const navContainer = document.getElementById("navbar-container");

if (navContainer) {
    navContainer.innerHTML = navbarHTML;
}

function setActiveLink() {

    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }

    document.querySelectorAll(".nav-link").forEach(link => {

        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }

    });

}

setActiveLink();


// ========================================
// SHOWCASE SCROLL EFFECT
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll(".showcase-wrapper");

    function updateSections() {

        const center = window.innerHeight / 2;

        sections.forEach(section => {

            const rect = section.getBoundingClientRect();

            // Distance from screen centre
            const distance = Math.abs((rect.top + rect.height / 2) - center);

            if (distance < rect.height * 0.45) {

                section.classList.add("active-section");
                section.classList.remove("inactive-section");

            } else {

                section.classList.remove("active-section");
                section.classList.add("inactive-section");

            }

        });

    }

    updateSections();

    window.addEventListener("scroll", updateSections);
    window.addEventListener("resize", updateSections);

});