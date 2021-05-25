 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB0A2apZ8d_DQPfWG_Zmlt_1PtoMohAuXA",
    authDomain: "akshay4grootan.firebaseapp.com",
    projectId: "akshay4grootan",
    storageBucket: "akshay4grootan.appspot.com",
    messagingSenderId: "303682639662",
    appId: "1:303682639662:web:441513bcfc9f6358ba8cbf"
  };
   // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
	const auth = firebase.auth();
	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	
	
	function LogIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		
		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	});
