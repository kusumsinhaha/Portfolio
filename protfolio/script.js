/// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Lightbox for certificates
const certificates = document.querySelectorAll('.certificate-card img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');

certificates.forEach(cert => {
  cert.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = cert.src;
    lightboxCaption.textContent = cert.nextElementSibling.textContent;
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close lightbox when clicking outside image
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
