document.querySelector("form").addEventListener("submit", storeData);

var userData = JSON.parse(localStorage.getItem("userData")) || [];
function storeData(event) {
  event.preventDefault();
  var nameuser = document.getElementById("nameUser");
  var contactNo = document.getElementById("noUser").value;
  var emailID = document.getElementById("emailUser").value;
  var pass = document.getElementById("passUser").value;

  var ud = JSON.parse(localStorage.getItem("userData")) || [];

  var flag = ud.filter(function (el) {
    return el.contactNo == contactNo || el.emailID == emailID;
  });
  if (flag.length >= 1) {
    alert("User Already Sign Up");
  } else {
    var userobj = {
      nameu: nameuser.value,
      contactNo: contactNo,
      emailID: emailID,
      pass: pass,
    };
    userData.push(userobj);
    localStorage.setItem("userData", JSON.stringify(userData));
    nameuser.value = "";
    noUser.value = "";
    emailUser.value = "";
    passUser.value = "";
    window.open("./login.html", "_self");
  }
}
