const firebaseConfig = {
  apiKey: "AIzaSyBy5_hrpShaZBEmQHZxZ4nXPj6i9D3YOaU",
  authDomain: "lets-chat-95c5b.firebaseapp.com",
  databaseURL: "https://lets-chat-95c5b-default-rtdb.firebaseio.com",
  projectId: "lets-chat-95c5b",
  storageBucket: "lets-chat-95c5b.appspot.com",
  messagingSenderId: "714832207734",
  appId: "1:714832207734:web:a10026d068d6567f73e457"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("username");
  document.getElementById("user_name").innerHTML = "Welcome" + " " + user_name;

  function addRoom(){
    var room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "i really don't know it might be something"
    });

    document.getElementById("room_name").innerHTML = " ";

    localStorage.setItem("room_name", room_name);

    window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;

   Box = "<div class = 'room_name' id = "+ Room_names +" onclick = 'GoToRoomname(this.id)'>#"+ Room_names +" </div> <hr>"
   document.getElementById("output").innerHTML += Box;

  });});}
getData();


function GoToRoomname(room){
  localStorage.setItem("room_name",room);
  window.location = "chat_page.html";
}

function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location = "index.html"
}