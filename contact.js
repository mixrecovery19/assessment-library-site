// ***IF NEEDED, ADD CODE HERE***
function signUpForm() {
    var form = document.querySelector("form");

    var contactDetails = {
        name: form.name.value,
        email: form.email.value,
        age: form.age.value,
        contact1: (form.querySelector('input[name="contact1"]:checked') || {}).value || "No Selection",
       
    };

    var contactRequestMessage = `Your Contact Name Is: ${contactDetails.name} 
                Your email: ${contactDetails.email}
                Your Age: ${contactDetails.age}
                Contact Method: ${contactDetails.contact1}`;

    alert(contactRequestMessage);
}
