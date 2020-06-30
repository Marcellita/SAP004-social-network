import routes from './routes.js';

const main = document.querySelector('#root');

<<<<<<< HEAD
const validateHash = (hash) => (hash === '' ? 'login' : hash.replace('#', ''));
=======
const validateHash = hash => (hash === '' ? 'login' : hash.replace('#', ''));


const validateLogin = (hash) => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      renderPage();
    } else {
      if (hash === '#record') {
        window.location.hash = 'record';
      } else {
        window.location.hash = 'login';
      }
    }
  });
}
>>>>>>> versão-final

const renderPage = () => {
  main.innerHTML = '';
  const page = validateHash(window.location.hash);
<<<<<<< HEAD
  main.appendChild(routes[page]);
};

const init = () => window.addEventListener('hashchange', renderPage);

=======
  main.appendChild(routes[page]());
};

const init = () => window.addEventListener('hashchange', () => {
  renderPage();
  const hash = window.location.hash;
  validateLogin(hash);
}
);
>>>>>>> versão-final

window.addEventListener('load', (event) => {
  event.preventDefault();
  renderPage();
  init();
<<<<<<< HEAD
});
=======
});
>>>>>>> versão-final
