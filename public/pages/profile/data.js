
export const user = (nome, url) => {
  let user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: nome,
    photoURL: url,
  }).then(function(nome) {
    const atualização = document.createElement('div');
    atualização.innerHTML = `
    <p id='error-message' class='error.message'></p>`
   
    const spaceError = atualização.querySelector('#error-message');
    spaceError.innerHTML = `funcionou`;

    // console.log('Update successful');
  }).catch(function(error) {
    console.log(error);
  });
};

export const perfilImage = (photo, callback) => {
  let file = photo.files[0];
  let storageRef = firebase.storage().ref('imagens/' + file.name);

   storageRef.put(file).then(() => {
    storageRef.getDownloadURL().then((url) => {
      console.log(url);
      callback(url);    
    });
    
  });
};

export const back = () => {
    window.location.hash = '#home';
};