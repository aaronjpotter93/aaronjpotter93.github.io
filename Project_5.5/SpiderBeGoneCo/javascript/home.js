"use strict";

//accordion function
$( function() {
    $("#accordion").accordion();
} );

const processEntries = () => {
    // get form controls to check for validity
    const email = $("#email_address");
    const phone = $("#phone");
    const terms = $("#terms");
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
    if (!(terms).is(":checked")) {
        $("#accept_error").html("<em>You must agree to the terms of service.</em>"); 
    }

    // submit the form or notify user of errors
    if (!hasErrors) {  // no error messages
        alert("Thank You! Feel free to browse our website while you wait for your next spider encounter!")
        $("form").trigger("reset");
    
        $("#email_error").html("");

        $("#mobile_error").html("");

        $(terms).prop( "checked", false);

        $("#accept_error").html("");
    
        $("#email_address").focus();
    }
};

const resetForm = () => {
    $("form").trigger("reset");
    
    $("#email_error").html("");

    $("#mobile_error").html("");

    $(terms).prop( "checked", false);

    $("#accept_error").html("");
    
    $("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#register").on("click", processEntries);
    $("#reset_form").on("click", resetForm);  
    $("#email_address").focus();   
});

//Carousel Javascript
$(document).ready( () => {

    const slider = $("#image_list");      // slider = ul element

    // the click event handler for the right button
    $("#right_button").click( () => { 

        // get value of current left property
        const leftProperty = parseInt(slider.css("left"));
        
        // determine new value of left property
        let newLeftProperty = 0;
        if (leftProperty - 100 > -900) {
            newLeftProperty = leftProperty - 100;
        }
        
        // use the animate function to change the left property
        slider.animate({left: newLeftProperty}, 1000);    
    }); 
    
    // the click event handler for the left button
    $("#left_button").click( () => {
    
        // get value of current left property
        const leftProperty = parseInt(slider.css("left"));
        
        // determine new value of left property
        let newLeftProperty = 0;
        if (leftProperty < 0) {
            newLeftProperty = leftProperty + 100;
        }
        else {
            newLeftProperty = -800;
        }
        
        // use the animate function to change the left property
        slider.animate({left: newLeftProperty}, 1000);
    });
});

//jQuiry for media query
$(window).on('resize', function() {
    var win = $(this);
    if (win.width() < 1000) {
        $('#formContainer').removeClass('col-6');
        $('#formContainer').addClass('col-12');

        //fav cons positioning with window resize
        $('#favcons').removeClass('offset-5');
        $('#favcons').addClass('offset-4');
    } else {
        $('#formContainer').removeClass('col-12');
        $('#formContainer').addClass('col-6');

        //fav cons positioning with window resize
        $('#favcons').removeClass('offset-4');
        $('#favcons').addClass('offset-5');
    }
  });