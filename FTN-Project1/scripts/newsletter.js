// Newsletter

const mailInput = document.getElementById("mailInput");

function subscribe() {
  if (mailInput.value == "") {
    alert("Please enter your email address");
  } else {
    alert("Thank you for subscribing" + " " + mailInput.value);
  }
}

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const address = document.getElementById("address");
const email = document.getElementById("email");
const country = document.getElementById("country");
const subject = document.getElementById("subject");

function contact() {
  alert(
    "Thank you for your message " +
      fname.value +
      " " +
      lname.value +
      "\n" +
      "Your address is: " +
      address.value +
      "\n" +
      "Your country is: " +
      country.value +
      "\n" +
      "Your email is: " +
      email.value +
      "\n" +
      " We will get back to you shortly" +
      "\n" +
      "Your message is:" +
      "\n " +
      subject.value
  );
}
