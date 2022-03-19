// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDjfr8r2ib3ebEbuajSwH_EZY9Te4BEyYs",
      authDomain: "classtest-5e060.firebaseapp.com",
      projectId: "classtest-5e060",
      storageBucket: "classtest-5e060.appspot.com",
      messagingSenderId: "470764278250",
      appId: "1:470764278250:web:926e4d6182efee9d152293"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
