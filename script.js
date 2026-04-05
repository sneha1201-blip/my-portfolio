function validateForm() {
let phone = document.getElementById("phone").value;

if (phone.length != 10 || isNaN(phone)) {
alert("Mobile number must be 10 digits");
return false;
}

alert("Form submitted successfully!");
return true;
}