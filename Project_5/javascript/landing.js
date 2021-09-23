/*********************************************************************
 
    *** MODIFICATION LOG ***

*Original Author: Aaron Potter                                     
*Date Created: 8/26/2021                                      
*Version: 0.0                                             
*Date Last Modified: 8/26/2021                             
*Modified by: Aaron Potter                                         
*Modification log:   

        Version 0.0 - 8/26/2021 - Added some error handling for the form and a clear for function

******************************************************************** */

"using strict";

// const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    $("#zip_button").on("click", () => {
        const zip =$("#zip");

        let isValid = false;
        const zipPattern = /^\d{5}(-\d{4})?$/;

        if (zip.val() == "" || zip.val() == undefined || !zipPattern.test(zip.val())) {
            $("#zip_error").html("Please enter a valid zip code before continuing");
            $("#zip").focus();
        } else {
            $("#zip_error").html("");
            isValid = true;
        }

        if (isValid) {
            $("#zip_form").submit();
        }
    });
});

//jQuiry for media query
$(window).on('resize', function() {
    var win = $(this);
    if (win.width() < 1000) {
        $('#formContainer').removeClass('col-6 offset-1');
        $('#formContainer').addClass('col-12');

//         //fav cons positioning with window resize
//         $('#favcons').removeClass('offset-2');
//         $('#favcons').addClass('offset-4');
    } else {
        $('#formContainer').removeClass('col-12');
        $('#formContainer').addClass('col-6 offset-1');

//         //fav cons positioning with window resize
//         $('#favcons').removeClass('offset-4');
//         $('#favcons').addClass('offset-2');
    }
  });