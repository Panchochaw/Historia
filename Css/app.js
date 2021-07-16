function registrar(){
  var email = document.getElementById('email').value;
  var contrasena = document.getElementById('contrasena').value;

  firebase.auth().createUserWithEmailAndPassword(email, contrasena)
.then((userCredential) => {
  // Signed in
  var user = userCredential.user;
  // ...
  verificar()
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  // ..
});
}



function ingreso(){
  var email2 = document.getElementById('email2').value;
  var contrasena2 = document.getElementById('contrasena2').value;


  firebase.auth().signInWithEmailAndPassword(email2, contrasena2)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
}

function observador(){
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("existe el usuario activo")
      aparece();
      // User is signed in, see docs for a list of available properties
      var displayName = user.displayName;
      var email = user.email;
      
      console.log('****************');
      console.log(user.emailVerified);
      console.log('******************');

      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;

      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out
      console.log("no existe el usuario activo")
      // ...
    }
  });
}
observador();

function aparece(){
  var contenido = document.getElementById('contenido');
  contenido.innerHTML = `
  <p>Bienvenido</p>
  <button onclick="cerrar()">Cerrar sesion</button>
  `;
}

function cerrar(){
  firebase.auth().signOut()
  .then(function(){
    console.log('Saliendo...')
  })
  .catch(function (error){
    console.log(error)
  })
    
}

function verificar(){
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function(){
    console.log('enviando correo ...');

  }).catch(function(error){
    console.log(error);
  });
}