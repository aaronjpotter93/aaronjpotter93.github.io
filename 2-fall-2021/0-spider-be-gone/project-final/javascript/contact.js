"use strict"

const processEntries = () => {
    // get form controls to check for validity
    const email = $("#email_address");
    const phone = $("#phone");
    const comments = $("#comments");

    const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    let hasErrors = false;

    // check user entries for validity
    if (email.val() == "" || email.val() == undefined || !emailPattern.test(email.val())) {
        $("#email_error").html("<em>Please enter a valid email address.</em>");
        hasErrors = true;
    } 
    if (phone.val() == "" || phone.val() == undefined || !phonePattern.test(phone.val())) {
        $("#mobile_error").html("<em>Please enter a phone number in NNN-NNN-NNNN format.</em>"); 
        hasErrors = true;
    } 
    if (comments.val() == "" || comments.val() == undefined) {
        $("#comments_error").html("<em>Please enter a comment.</em>");
        hasErrors = true;
    }

    // submit the form or notify user of errors
//    if (!hasErrors) {  // no error messages
////        alert("Thank You! We will reply within 5-7 business days")
////        alert("Sending you back to the home page")
////        window.location.href = '../html/home.html';
//    }
};

const resetForm = () => {
    $("form").trigger("reset");
    
    $("#email_error").html("");

    $("#mobile_error").html("");

    $("#comments_error").html("");
    
    $("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#register").on("click", processEntries);
    $("#reset_form").on("click", resetForm);  
    $("#email_address").focus();   
});

//jQuiry for media query
$(window).on('resize', function() {
    var win = $(this);
    if (win.width() < 1000) {
        $('#formContainer').removeClass('col-6');
        $('#formContainer').addClass('col-12');

//         //fav cons positioning with window resize
        $('#favcons').removeClass('ol-6');
        $('#favcons').addClass('col-12');
    } else {
        $('#formContainer').removeClass('col-12');
        $('#formContainer').addClass('col-6');

//         //fav cons positioning with window resize
        $('#favcons').removeClass('col-12');
        $('#favcons').addClass('col-6');
    }
  });