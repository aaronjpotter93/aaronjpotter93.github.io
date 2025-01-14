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

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    $("#zip_button").addEventListenter("click", () => {
        const zip =$("#zip");

        let isValid = true;

        if (zip.value == "") {
            zip.nextElementSibling.textContent = "Please enter zip code before continuing"
            isValid = false;
        } else {
            zip.nextElementSibling.textContent = "";
        }

        if (isValid) {
            $("#zip_form").submit();
        }
    });
});