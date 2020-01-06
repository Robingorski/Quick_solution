/* Modal function STARTS */
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
  body.style.overflow = "hidden";
  html.style.overflow = "hidden";
}

span.onclick = function () {
  modal.style.display = "none";
  body.style.overflow = "auto";
  html.style.overflow = "auto";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"; 
    body.style.overflow = "auto";
    html.style.overflow = "auto";
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
    text = "Please enter valid Email";
    error_message.innerHTML = text;
    return false;
  }

  if (subject.length < 6) {
    text = "Please enter correct subject";
    error_message.innerHTML = text;
    return false;
  }


  if (message.length <= 10) {
    text = "Please enter more than 10 characters";
    error_message.innerHTML = text;
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}


/* Form validation ENDS */