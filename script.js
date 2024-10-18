window.onload = function () {
  window.scrollTo(0, 0);
};

const heroSection = document.querySelector(".hero-section");

const images = ["images/image1.jpg", "images/image2.jpg"];
let currentImageIndex = 0;

setInterval(() => {
  heroSection.classList.add("fade-out");

  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;

    heroSection.classList.remove("fade-out");
  }, 200);
}, 6000);

window.onscroll = function() { toggleBackToTopButton() };

function toggleBackToTopButton() {
  const backToTopButton = document.getElementById("backToTop");

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", function () {
  const categoryBlocks = document.querySelectorAll(".category-block");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  categoryBlocks.forEach((block) => {
    observer.observe(block);
  });
});
function adjustHeader() {
  const header = document.querySelector(".header");
  const scrollPosition = window.scrollY;
  const screenHeight = window.innerHeight;

  if (scrollPosition > 0.4 * screenHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

document.addEventListener("scroll", adjustHeader);
document.addEventListener("DOMContentLoaded", adjustHeader);

    const carousel = document.getElementById('galleryCarousel');
    let currentIndex = 0;
    const items = carousel.querySelectorAll('.carousel-item');

    function slideImages() {
        currentIndex = (currentIndex + 1) % items.length;
        const currentItem = items[currentIndex];
        const activeItem = items[(currentIndex + items.length - 1) % items.length];

        activeItem.classList.remove('active');
        currentItem.classList.add('active');
    }

    setInterval(slideImages, 5000); 
