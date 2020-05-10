function loginButton() {
	var loginForm = document.loginForm;
	var loginId = loginForm.idInput;
	var loginPw = loginForm.pwInput;
	
	if(loginForm){
		console.log(loginId);
		console.log(loginPw);
	}
	else{
		console.log("Hello");
	}
		
}

function backgroundColor(){
	
	var colorRand_1 = Math.floor(Math.random()*16);
	var colorRand_2 = Math.floor(Math.random()*16);
	var colorRand_3 = Math.floor(Math.random()*16);
	var colorRand = "#"+colorRand_1.toString(16)+
		colorRand_2.toString(16)+colorRand_3.toString(16);
	
	var bodyTag=document.getElementById("theBody");
	bodyTag.style.backgroundColor = colorRand;
}
function resetColor(){
	var bodyTag=document.getElementById("theBody");
	bodyTag.style.backgroundColor = "#fff";
}