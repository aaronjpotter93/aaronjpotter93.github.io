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

        if (zip.val() == "" || zip.val() == undefined) {
            $("#zip_error").html("Please enter zip code before continuing");
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