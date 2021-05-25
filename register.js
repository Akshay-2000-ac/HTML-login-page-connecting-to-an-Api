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
	
	
		Var fname,lname,age,dob, phone,address1,address2;
		function Ready(){
			 fname=document.getElementById('fname').value;
			 lname=document.getElementById('lname').value;
			 age=document.getElementById('age').value;
			 phone=document.getElementById('phone').value;
			 dob=document.getElementById('dob').value;
			 address1=document.getElementById('address1').value;
			 address2=document.getElementById('address2').value;
		}
		document.getElementById("register").onclick=function(){
			Ready();
			firebase.database().ref('user/'+email).set({
			Firstname: fname;
			Lastname: lname,
    			Age: age,
			Date_of_Birth: dob,
			Phone: phone,
    			Address1: address1,
			Address2: address2
		});
 }
				
	


		
		
		
