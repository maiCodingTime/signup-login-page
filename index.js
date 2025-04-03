// Mai Vue Xiong
// Login / SignUp Page

const slideLeft = document.getElementById("slideLeft");
const slideRight = document.getElementById("slideRight");
const overlay = document.getElementById("overlay");
const slideBtn = document.getElementById("slideBtn");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");


slideBtn.addEventListener("click", () => {

    if(slideBtn.textContent === "Login"){
        overlay.classList.toggle('right');                  // Adds class 'right' to animate div to slide right
        const timeOut = setTimeout(changeToSignUp, 1800);
        overlay.classList.remove('left');                   // this removes the class so when btn triggers program to move left again, it can restart without a bug
    }
    else{
        overlay.classList.toggle('left');
        const timeOut = setTimeout(changeToLogin, 1800);
        overlay.classList.remove('right');
    }
     
});

function changeToSignUp(){
    line1.textContent = "Don't Have An Account?";
    line2.textContent = "Create your free acount to interact with our website as well as other users. Come join us!";
    slideBtn.textContent = "Sign Up";
}
function changeToLogin(){
    line1.textContent = "Welcome Back!";
    line2.textContent = "Already have an account? Click the login button to sign back into your account today!";
    slideBtn.textContent = "Login";
}