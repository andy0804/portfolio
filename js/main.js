/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  // add active class
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');

  //remove menu mobile
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

document.getElementById('sendemail').addEventListener('click', function (evt) {
  alert('got');
  const name = document.getElementById('inputName').textContent.trim('');
  const email = document.getElementById('inputEmail').textContent.trim('');
  const message = document.getElementById('inputMessage').textContent.trim('');
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'ananthfsd@gmail.com',
    Password: 'NabeedanaleH3flgh!',
    To: 'ananth.bhagyavahana@gmail.com',
    From: 'ananthfsd@gmail.com',
    Subject: `${name} sent you a mail`,
    Body: `${message}`,
  }).then(function (status) {
    alert('mail sent successfully');

    document.getElementById('contact').innerHTML =
      'Your message was sent successfully';
  });
});
/**Scroll Reveal */
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 600 });

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 });
