const navItemLogin = document.querySelectorAll('.li-a');
const user = localStorage.getItem("user");

if (!user){
    navItemLogin[3].innerHTML = "Login";
}else{
    navItemLogin[3].innerHTML = user;
};