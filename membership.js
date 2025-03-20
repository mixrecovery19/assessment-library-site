function submitForm() {
    var form = document.querySelector("form");

    var details = {
        firstName: form.fname.value,
        lastName: form.lname.value,
        email: form.email.value,
        phone: form.phone.value,
        street: form.street.value,
        suburb: form.suburb.value,
        postcode: form.postcode.value,
        type: form.type.value,
        duration: form.duration.value,
        contact1: (form.querySelector('input[name="contact1"]:checked') || {}).value || "No Selection",
        genre: form.genre.value
    };

    var message = `Your Full Name Is: ${details.firstName} ${details.lastName}
Your eMail: ${details.email}
Your Phone Number: ${details.phone}
Your Address: ${details.street} ${details.suburb} ${details.postcode}
Membership Type: ${details.type}
Duration: ${details.duration}
Contact Method: ${details.contact1}
Genre: ${details.genre}`;

    alert(message);
}
