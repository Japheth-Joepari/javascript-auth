
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

var val1 = document.getElementById("validate1")
var val2 = document.getElementById("validate2")
var val3 = document.getElementById("validate3")
var val4 = document.getElementById("validate4")
var val5 = document.getElementById("validate5")
var val6 = document.getElementById("validate6")
var validateArr = [val1, val2, val3, val4, val5, val6]
// validateArr.forEach(element => {
//   element.style.display = "flex";
//   element.textContent ="Hello"
// });

const getInput = {
    firstname : document.querySelector('#username'),  
    lastname : document.querySelector('#lastname'),
    username : document.querySelector('#username'),
    password : document.querySelector('#password'), 
    rpassword : document.querySelector('#rpassword'),
    // validate : document.getElementById('validate1'),
    button: document.getElementById("signup-button").addEventListener("click", function() {
    //firstname && lastname
      if (firstname.value.length < 3) {
        val1.style.display = "flex"
        val1.textContent = "firstname is less than 3"
      } else if( lastname.value.length < 3){
        val2.style.display = "flex"
        val2.textContent = "lastname is less than 3"
      } else if(firstname.value.length >= 50) {
        val1.style.display = "flex"
        val1.textContent = "firstname is greater than 50"
      } else if(lastname.value.length >= 50) {
        val2.textContent = "firstname is greater than 50"
        val2.style.display = "flex"
      }

      //Username 
      else if(username.value.length < 4) {
        val4.textContent = "username is less than 4"
        val4.style.display = "flex"
      }else if(username.value.length >= 10) {
        val4.textContent = "username is less than 10"
        val4.style.display = "flex"
      }


    //Password
      else if (password.value.length < 4) {
        val5.style.display = "flex"
        val5.textContent = "Password should be greater than 4"
      } else if(password.value.length > 20) {
        val5.style.display = "flex"
        val5.textContent = "Password should be less than 20"
      }

      //confirm passwords
      else if (password.value !== rpassword.value) {
        val6.style.display = "flex"
        val6.textContent = "Password do not match"
      } else {
        validateArr.forEach(element => {
          element.style.display = "none";
        });
        console.log('redirecting')
      }
    })
  }