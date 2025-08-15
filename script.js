// Toggle menu for mobile view
  function toggleMenu() {
    const nav = document.querySelector('.header nav');
    nav.classList.toggle('active');
  }

  // Fade-in elements on scroll
  window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight * 0.9; // Trigger slightly earlier
      if (elementPosition < screenPosition) {
        element.classList.add('active');
      }
    });

    // Scroll progress bar
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
  });

  // "Go to Top" Button
  const goToTopBtn = document.getElementById('goToTopBtn');
  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      goToTopBtn.style.display = "block";
    } else {
      goToTopBtn.style.display = "none";
    }
  };
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Typing Effect
  const text = "Welcome to My Portfolio!";
  let index = 0;
  const typingEffect = document.getElementById('typingEffect');

  function typeWriter() {
    if (index < text.length) {
      typingEffect.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    } else {
      // Optional: Restart typing effect
      setTimeout(() => {
        typingEffect.textContent = '';
        index = 0;
        typeWriter();
      }, 3000); // Restart after 3 seconds
    }
  }
  window.onload = typeWriter;

  // Vanilla Tilt
VanillaTilt.init(document.querySelector(".profile-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.4
});

// Flip on Click
document.querySelector(".profile-card").addEventListener("click", function () {
    this.classList.toggle("flipped");
});

  // Skills Slider - Pause/Resume on touch
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