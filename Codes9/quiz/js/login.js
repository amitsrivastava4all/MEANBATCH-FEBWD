window.addEventListener("load",init);
function init(){
	document.getElementById("loginBt").addEventListener("click",doLogin);
}
function doLogin(){
	var isSuccess = true;
	var email = document.getElementById("userid").value;
	var password = document.getElementById("pwd").value;
firebase.auth().signInWithEmailAndPassword(email, password)
   .then(function(firebaseUser) {
   // alert("Success");
	localStorage.user=email;
	location.href="test.html";
	// Success 
   })
  .catch(function(error) {
       alert("Error");
  });

}

