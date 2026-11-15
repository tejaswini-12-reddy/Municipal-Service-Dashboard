function validateForm() {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let area = document.getElementById("area").value;
    let description = document.getElementById("description").value;

    if (name == "") {
        alert("Please enter your full name.");
        return false;
    }
    if (mobile == "") {
    alert("Please enter your mobile number.");
    return false;
}
if(mobile == ""){
    alert("Mobile number must contain exactly 10 digits.");
    return false;
}
if(isNaN(mobile)){
    alert("Mobile number should contain only digits");
    return false;
}
if (area == "") {
    alert("Please enter your area.");
    return false;
}
if (description == "") {
    alert("Please enter the complaint description.");
    return false;
}
alert("Complaint Submitted Successfully!");

document.getElementById("name").value = "";
document.getElementById("mobile").value = "";
document.getElementById("area").value = "";
document.getElementById("complaint").selectedIndex = 0;
document.getElementById("description").value = "";

return false;
  
}