// 1. The Navbar Component HTML
const navbarHTML = `
  <div class="navbar">
    <div class="liquid"></div>
    <nav>
      <!-- Removed the transition style so it doesn't slide in on page load -->
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

// 3. Automatically set the "active" class AND move the indicator instantly
function setActiveLink() {
    let currentPage = window.location.pathname.split("/").pop();
    
    // Default to index.html if the path is empty
    if (currentPage === '') {
        currentPage = 'index.html';
    }

    const navLinks = document.querySelectorAll('.nav-link');
    const indicator = document.querySelector('.indicator');
    let activeElement = null;
    let foundMatch = false;

    navLinks.forEach(link => {
        // Clear all active classes
        link.classList.remove('active');
        
        // If this link matches the current page, make it active
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            activeElement = link;
            foundMatch = true;
        }
    });

    // Fallback: If no match was found, highlight Home by default
    if (!foundMatch && navLinks.length > 0) {
        navLinks[0].classList.add('active');
        activeElement = navLinks[0];
    }

    // Instantly snap the glowing background blob to the active link
    if (activeElement && indicator) {
        // A micro-timeout ensures the browser has finished rendering the font sizes 
        // before we measure the width, keeping the sizing perfectly accurate.
        setTimeout(() => {
            indicator.style.width = activeElement.offsetWidth + 'px';
            indicator.style.left = activeElement.offsetLeft + 'px';
        }, 10);
    }
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

/* =========================================================
   5. INJECT FOOTER (For subpages only)
========================================================= */
const footerHTML = `
  <footer class="global-footer">
    <p>&copy; 2026 <span class="highlight">DULAX</span> | Unofficial fan site not affiliated with <a href="https://www.blood-strike.com/" target="_blank" style="color: rgba(255, 215, 0, 0.7); text-decoration: underline;">NetEase Games</a></p>
  </footer>
`;

const footerContainer = document.getElementById('footer-container');
if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
}