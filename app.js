/* Modal function STARTS */
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* Modal function ENDS */
/* Form validation STARTS */

function validate() {
  var name = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;
  if (name.length < 3) {
    text = "Please enter valid First name";
    error_message.innerHTML = text;
    return false;
  }

  if (lastName.length < 3) {
    text = "Please enter valid Last name";
    error_message.innerHTML = text;
    return false;
  }

  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }

  if (subject.length < 10) {
    text = "Please anter correct subject";
    error_message.innerHTML = text;
    return false;
  }


  if (message.length <= 10) {
    text = "Please Enter more than 10 characters";
    error_message.innerHTML = text;
    return false;
  }

  alert("Form Submitted Successfully!");
  return true;
}


/* Form validation ENDS */