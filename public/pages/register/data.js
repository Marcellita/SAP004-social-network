import {record} from './pages/register/main.js';


// const createBtnUser = document.getElementById("register");
// const emailInput = document.getElementById("email");
// const passwordInput = document.getElementById("pass");

// createBtnUser.addEventListener("click", function() {
//     firebase
//         .auth();
//     .createEmailEPassword(emailInput.value, passwordInput.value);
//     .then(function() {
//             alert('Bem vindo' + emailInput.value);
//         })
//         .catch(function(erro) {
//             console.error(error.code);
//             console.error(error.message);
//             alert("Falha ao cadastrar,verifique o erro no consol")
//         })
// })

document.getElementById("recor").addEventListerner("submit", function(event) {
    event.preventDefault();
    const newName = document.getElementById("name").value;
    const newSurname = document.getElementById("surname").value;
    const newuser = {
        'name': newName,
        'surname': newSurname,
    }
    const createUser = firebase.firestore().collection("newusers");
    createUser.add(newuser);
})



// // document.getElementById("contactForm").addEventListener("submit", submitForm);

// // function submitForm(event) {
// //     event.preventDefault();
// //     const newName = document.getElementById("name").value;
// //     const newSurname = document.getElementById("surname").value;
// //     const newuser = {
// //         'name': newName,
// //         'surname': newSurname,
// //     }
// //     const createUser = firebase.database().collection("newusers");
// //     createUser.add(newuser);

// // };



// function getInputVal(id) {
//     return document.getElementById(id).value;

// }


// if (newCreate) {
//     newCreate.addEventListener('submit', record);
// }

// function newUser() {
//     const newName = document.querySelector("#name");
//     const newSurname = document.querySelector("#surname");
//     const newDate = document.querySelector("#date");
//     const newEmail = document.querySelector("#email");
//     const newPass = document.querySelector("#pass");
//     const newPassword = document.querySelector("#password");
//     const data = {
//         'name': newName.value,
//         'surname': newSurname.value,
//         'Date': newDate.value,
//         'email': newEmail.value,
//         'Pass': newPass.value,
//     }

// };
//   if(newName === " " || newSurname === " " || newEmail === " ") {
//       alert("Preencha os campos");
//   }

//   if ( newPass === " "|| newPass < 8 )
//     alert("digite a senha com minimo 8 caracteres");
// }
//  if (newPass !== newPassword){
//    alert("senhas diferentes");
//  }

// newCreate.addEventListener("click" , newUser());