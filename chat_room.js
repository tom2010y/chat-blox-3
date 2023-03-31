var firebaseConfig = {
    apiKey: "AIzaSyAyvIzvebATy6-MYxmodJ6h3s1NiNKYWPs",
    authDomain: "chat-blox-bee66.firebaseapp.com",
    databaseURL: "https://chat-blox-bee66-default-rtdb.firebaseio.com",
    projectId: "chat-blox-bee66",
    storageBucket: "chat-blox-bee66.appspot.com",
    messagingSenderId: "958139618962",
    appId: "1:958139618962:web:c19f72d234ad25af83b84b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document
    .getElementById("user_name")
    .innerHTML = "Welcome " + user_name;
function addRoom() {
    room_name = document.getElementById("room_name");

    firebase
        .database()
        .ref("/")
        .child(room_name)
        .update({purpose: "adding room name"});
    localStorage.setItem("room_name", room_name);

    window.location = "chating_page.html";

}
function getData() {
    firebase
        .database()
        .ref("/")
        .on('value', function (snapshot) {
            document
                .getElementById("output")
                .innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                console.log("room name-" + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";

                //End code
            });
        });
}
getData();
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}