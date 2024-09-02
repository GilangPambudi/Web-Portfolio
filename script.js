document.getElementById('home-link').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  setActiveLink('home-link');
});

document.getElementById('about-link').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  setActiveLink('about-link');
});

document.getElementById('portfolio-link').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
  setActiveLink('portfolio-link');
});

document.querySelector('.navbar-brand').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  setActiveLink('home-link');
});

function setActiveLink(activeLinkId) {
  document.querySelectorAll('.nav-link').forEach(function(link) {
      link.classList.remove('active');
  });
  document.getElementById(activeLinkId).classList.add('active');
}