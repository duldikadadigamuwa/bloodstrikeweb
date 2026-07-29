// 1. The Navbar Component HTML
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

// 2. Inject it into the page
const navContainer = document.getElementById('navbar-container');
if (navContainer) {
    navContainer.innerHTML = navbarHTML;
}

// 3. Automatically set the "active" class based on the current URL
function setActiveLink() {
    let currentPage = window.location.pathname.split("/").pop();
    
    if (currentPage === '') {
        currentPage = 'index.html';
    }

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Run the navbar function immediately 
setActiveLink();


// 4. SCROLL OBSERVER FOR ANIMATIONS
document.addEventListener('DOMContentLoaded', () => {

    const scrollAnimationOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    // Create the observer
    const scrollAnimObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-show');
            } else {
                entry.target.classList.remove('scroll-show');
            }
        });
    }, scrollAnimationOptions);

    // Watch elements with the '.scroll-hidden' class
    const hiddenElements = document.querySelectorAll('.scroll-hidden');
    hiddenElements.forEach((el) => scrollAnimObserver.observe(el));
});