// DECLARING VARIABLES 
// Declare variables that will
// store references for 

// <input type="text" id="fullname">,
let fn = document.getElementById('fname');

// <input type="text" id="email">
let em = document.getElementById('email');
        
// <textarea id="message"></textarea>
let msg = document.getElementById('msg');
        
// <input type="button" id="submit-button">,
let btn = document.getElementById('submit');

// Declare variable that will 
// store regular expression for email
let emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 

// START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors
function handleClick() {
    let data = {};
    let errors = [];


//FULL NAME
    // Check if fullname is not empty.
    // If so:
    // Pass the collected value
    // to your object "data".
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors".
    // End your conditional here.
if (fn.value) {
    data.fname = fn.value;
} else {
    errors.push('Full name is missing!');
}

//EMAIL 
    // Check if email is not empty.
    // Check if email is valid.
    // If so:
    // Pass the collected value
    // to your object "data".
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors".
    // End your nested conditional here.
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors"
    // End your outer conditional here.
if (em.value) {
    if (em.value.match(emailPattern)) {
    data.email = em.value;
    } else {
        errors.push("Invalid Email!");
    }
} else {
    errors.push('Email is missing!');
}

//MESSAGE
    // Check if message is not empty.
    // If so:
    // Pass the collected value
    // to your object "data".
    // Otherwise:
    // Create a corresponding error-message
    // and add it to your array "errors"
    // End your conditional here.
if (msg.value) {
    data.msg = msg.value;
} else {
    errors.push('Message is missing');
}

if (errors.length === 0) {
    console.log(data);
   } else {
    console.log(errors);
   }

}

// Register your form to "click" event.
btn.addEventListener('click', function() {
    handleClick();
}
);