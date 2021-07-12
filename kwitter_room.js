var firebaseConfig = {
      apiKey: "AIzaSyDfvL6OE7JS3oP5ScsbCEh-z9UOHSO2Kwg",
      authDomain: "kwitter3-a3572.firebaseapp.com",
      databaseURL: "https://kwitter3-a3572-default-rtdb.firebaseio.com",
      projectId: "kwitter3-a3572",
      storageBucket: "kwitter3-a3572.appspot.com",
      messagingSenderId: "1067669234452",
      appId: "1:1067669234452:web:ca813089901710fd6f9801",
      measurementId: "G-V7CQGY2TCN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData()
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}