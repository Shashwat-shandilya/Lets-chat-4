function addUser(){
    username = document.getElementById("user_name").value;
    localStorage.setItem("username", username);

    if(username == ""){
        window.alert("Please enter your username");
    }else{
        window.location = "chat_room.html";
    }
}