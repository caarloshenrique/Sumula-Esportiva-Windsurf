// Referências
var message = document.getElementById('message');
var dbRef = firebase.database().ref().child('msg');

// Ouve o evento
dbRef.on('value', function(snap) {
  message.innerHTML = snap.val();
});
