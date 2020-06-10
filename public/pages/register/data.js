export const newUser = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
       .then(() => {
        window.location='#home';
        })
      .catch((error) => {
        console.error(error.code);
        alert(`Falha ao cadastrar ${error.message}`);
      });
  };