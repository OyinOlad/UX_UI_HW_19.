
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
    }
  });

  header.classList.toggle('sticky', window.scrollY > 100);
});

