	let flag=localStorage.getItem("flag")
	let existing=document.getElementById("existing");
let savedUser=localStorage.getItem("username");

	existing.addEventListener("click",()=>{
		alert(`Logged in as ${savedUser}`)
	})
window.onload = function () {

    if (localStorage.getItem("username")) {
        console.log("User data exists");
		existing.style.display="block"
    } else {
        console.log("No user data found");
		existing.style.display="none"
    }

};
function login(e) {
	e.preventDefault()
	let username=document.getElementById("username").value;
	let password=document.getElementById("password").value;
	let check=document.getElementById("checkbox")



	
	if(check.checked){
		
		localStorage.setItem("username",username);
		localStorage.setItem("password",password);
		// updateButton()
		if (localStorage.getItem("username")) {
        console.log("User data exists");
		existing.style.display="block"
    } else {
        console.log("No user data found");
		existing.style.display="none"
    }
	}else if(check.checked==false){
		alert(`logged in as ${username}`)
		localStorage.clear()
		// localStorage.removeItem("username")
		// localStorage.removeItem("password")
		// localStorage.setItem("flag",false);
		// updateButton()
		if (localStorage.getItem("username")) {
        console.log("User data exists");
		existing.style.display="block"
    } else {
        console.log("No user data found");
		existing.style.display="none"
    }
		
	}
	
}

