<<<<<<< HEAD
export const welcome = email => `Bem-vindo ${email}! Que bom ver você aqui!`;
export const errorMessage = message => `Falha: ${message}`;
export const authEmailAndPassword = (email, password) => {
=======
export const authEmailAndPassword = (email, password, callback) => {
>>>>>>> versão-final
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then(() => {
<<<<<<< HEAD
      window.location='#home';
      })
    .catch((error) => {
      alert(`${errorMessage(error.message)}`);
    });
};
export const signIn = (provider) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
      const token = result.credential.accessToken;
      alert(`${welcome(inputEmail.value)}`);
    })
    .catch((error) => {
      console.log(error);
      alert(`${errorMessage(error.message)}`);
    });
  };
=======
      window.location = '#home';
    })
    .catch((error) => {
      callback(error.message);
    });
};

export const signIn = (provider, callback) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(() => {
      window.location = '#home';
    })
    .catch((error) => {
      callback(error.message);
    });
}
>>>>>>> versão-final
