document.querySelector("form").addEventListener("submit", submitData);
function submitData(e) {
  e.preventDefault();
  var userEmail1 = document.getElementById("emailUserL").value;
  var userPassword1 = document.getElementById("passUserL").value;
  localStorage.setItem("emailUserCheck", userEmail1);
  var userDataA = JSON.parse(localStorage.getItem("userData")) || [];
  if (userDataA.length < 1) {
    alert("Please signup first the user ");
    window.open("./signup.html  ", "_self");
  } else {
    var flag = userDataA.filter(function (el) {
      return el.emailID == userEmail1 && el.pass == userPassword1;
    });
    if (flag.length >= 1) {
      localStorage.setItem("status", 1);
      window.open("./index.html", "_self");
    } else {
      alert("wrong credentials");
    }
    emailUserL.value = "";
    passUserL.value = "";
  }
}
