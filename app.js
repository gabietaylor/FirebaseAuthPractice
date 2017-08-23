console.log("Namaste");
// Init Firebase
// Initialize Firebase
var config = {
	apiKey: "AIzaSyC1GTHMmvJ97d31KS2KYOmfu_rrK068Axo",
	authDomain: "fir-chatpractice-78d23.firebaseapp.com",
	databaseURL: "https://fir-chatpractice-78d23.firebaseio.com",
	projectId: "fir-chatpractice-78d23",
	storageBucket: "fir-chatpractice-78d23.appspot.com",
	messagingSenderId: "1075006880834"
};
firebase.initializeApp(config);
var auth = firebase.auth();
var db = firebase.database();

// ================================================
// User signup
// ================================================
$(".signup").on("click", function (event) {
    event.preventDefault();
    var email = $("#email").val().trim();
    var password = $("#password").val().trim();
    var user = auth.createUserWithEmailAndPassword(email, password);
    user
        .then(function (userCreated) {
            console.log(userCreated)
            console.log("new user created")
            var ref = db.ref("users");
            var data = {
                email: userCreated.email,
                id: userCreated.uid
            };
            ref.push(data)
        })
        .catch(function (err) {
            alert(err.message)
            console.log("There was an error, try again")
        });
    console.log(email, password)
});