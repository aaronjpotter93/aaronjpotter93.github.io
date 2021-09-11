"use strict"

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
    if (comments.val() == "" || comments.val() == undefined) {
        $("#comment_error").html("<em>Please enter a comment.</em>");
        hasErrors = true;
    }

    // submit the form or notify user of errors
    if (!hasErrors) {  // no error messages
        alert("Thank You! We will reply within 5-7 business days")
        alert("Sending you back to the home page")
        window.location.href = '../html/home.html';
    }
};

const resetForm = () => {
    $("form").trigger("reset");;
    
    $("#email_error").html("");
    
    $("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#register").on("click", processEntries);
    $("#reset_form").on("click", resetForm);  
    $("#email_address").focus();   
});