const uname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();

uname.addEventListener('blur', () => {
    // validate name here
    // console.log("name blured");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = uname.value;
    // console.log(regex.test(str))

    if (regex.test(str)) {
        uname.classList.remove("is-invalid");
        validUser = true;
    } else {
        uname.classList.add("is-invalid");
        validUser = false;
    }
})

email.addEventListener('blur', () => {
    // validate email here
    console.log("email blured");
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    // console.log(regex.test(str))

    if (regex.test(str)) {
        email.classList.remove("is-invalid");
        validEmail = true;
    } else {
        email.classList.add("is-invalid");
        validEmail = false;
    }
})

phone.addEventListener('blur', () => {
    // validate phone number here
    console.log("phone blured");
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    // console.log(regex.test(str))

    if (regex.test(str)) {
        phone.classList.remove("is-invalid");
        validPhone = true;
    } else {
        phone.classList.add("is-invalid");
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(validEmail, validUser, validPhone);

    if (validEmail && validUser && validPhone) {
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');

        $('#failure').hide();
        $('#success').show();

    } else {
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');

        $('#success').hide();
        $('#failure').show();
    }



})