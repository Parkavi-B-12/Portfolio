document.addEventListener("DOMContentLoaded", function () {

  // ==============================
  // MENU TOGGLE + CLOSE
  // ==============================
  const menuIcon = document.querySelector('.menu-icon');
  const nav = document.querySelector('.header nav');

  function toggleMenu() {
    if (nav) {
      nav.classList.toggle('active');
    }
  }

  // Make accessible for HTML onclick
  window.toggleMenu = toggleMenu;

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (nav && !nav.contains(e.target) && !menuIcon.contains(e.target)) {
      nav.classList.remove('active');
    }
  });

  // Close menu on link click
  document.querySelectorAll('.header nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav) nav.classList.remove('active');
    });
  });


  // ==============================
  // SCROLL EVENTS (MERGED)
  // ==============================
  const goToTopBtn = document.getElementById('goToTopBtn');
  const scrollProgress = document.querySelector('.scroll-progress');

  window.addEventListener('scroll', function () {

    // Fade-in
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
      const pos = element.getBoundingClientRect().top;
      const screen = window.innerHeight * 0.9;
      if (pos < screen) {
        element.classList.add('active');
      }
    });

    // Scroll progress
    if (scrollProgress) {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = percent + '%';
    }

    // Go to top button
    if (goToTopBtn) {
      if (document.documentElement.scrollTop > 100) {
        goToTopBtn.style.display = "block";
      } else {
        goToTopBtn.style.display = "none";
      }
    }

  });

  // Smooth scroll to top
  window.scrollToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  // ==============================
  // TYPING EFFECT
  // ==============================
  const typingEffect = document.getElementById('typingEffect');
  const text = "Welcome to My Portfolio!";
  let index = 0;

  function typeWriter() {
    if (!typingEffect) return;

    if (index < text.length) {
      typingEffect.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    } else {
      setTimeout(() => {
        typingEffect.textContent = '';
        index = 0;
        typeWriter();
      }, 3000);
    }
  }

  typeWriter();


  // ==============================
  // PROFILE CARD FLIP (SAFE)
  // ==============================
const card = document.querySelector(".profile-card");
let flipTimeout;

if (card) {
  card.addEventListener("click", function (e) {
    e.stopPropagation();

    // If already flipped → go back immediately
    if (this.classList.contains("flipped")) {
      this.classList.remove("flipped");
      clearTimeout(flipTimeout);
      return;
    }

    // Flip to back
    this.classList.add("flipped");

    // Auto flip back after 4 seconds
    flipTimeout = setTimeout(() => {
      this.classList.remove("flipped");
    }, 4000);
  });

  // Click outside → close immediately
  document.addEventListener("click", () => {
    card.classList.remove("flipped");
    clearTimeout(flipTimeout);
  });
}


  // ==============================
  // VANILLA TILT (SAFE)
  // ==============================
  if (typeof VanillaTilt !== "undefined") {
    if (card) {
      VanillaTilt.init(card, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.4
      });
    }
  }


  // ==============================
  // SKILLS SLIDER TOUCH FIX
  // ==============================
  const slider = document.getElementById('skillsSlider');

  if (slider) {
    slider.addEventListener('touchstart', () => {
      slider.style.animationPlayState = 'paused';
    });

    slider.addEventListener('touchend', () => {
      slider.style.animationPlayState = 'running';
    });

    slider.addEventListener('touchmove', () => {
      slider.style.animationPlayState = 'running';
    });
  }

});