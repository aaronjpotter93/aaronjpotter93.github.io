"use strict";

//accordion function
$( function() {
    $("#accordion").accordion();
} );

const displayErrorMsgs = msgs => {
    // create a new ul element
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    // create a new li element for each error message, add to ul
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    // if ul node isn't in document yet, add it
    const node = $("ul");
    if (node == null) {
        // get the form element 
        const form = $("form");

        // add ul to parent of form, before the form
        form.parentNode.insertBefore(ul, form);
    } else {
        // replace existing ul node
        node.parentNode.replaceChild(ul, node);
    }  
}

const processEntries = () => {
    // get form controls to check for validity
    const email = $("#email_address");
    const phone = $("#phone");
    const terms = $("#terms");
    const comments = $("#comments");

    let hasErrors = false;

    // check user entries for validity
    if (email.val() == "" || email.val() == undefined) {
        $("#email_error").html("<em>Please enter an email address.</em>");
        hasErrors = true;
    } 
    if (phone.val() == "" || phone.val() == undefined) {
        $("#mobile_error").html("<em>Please enter a mobile phone number.</em>"); 
        hasErrors = true;
    } 
    if (terms.checked == false) {
        $("#accept_error").innerHTML = "<em>You must agree to the terms of service.</em>"; 
    }
    if (comments.val() == "" || comments.val() == undefined) {
        $("#comment_error").html("<em>Please enter a comment.</em>");
        hasErrors = true;
    }

    // submit the form or notify user of errors
    if (!hasErrors) {  // no error messages
        alert("Thank You! Go ahead and select your weapon of choice")
    }
};

const resetForm = () => {
    $("form").reset();
    
    $("#email_error").html("");
    
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