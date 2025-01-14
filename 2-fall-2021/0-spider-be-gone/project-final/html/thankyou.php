<?php
/*
 *
 *       Date              User               Description
 * ------------------------------------------------------------------------------
 *      2/11/22           Aaron Potter        Refactoring initial functionality
 * 
 *  
 */



$email_address = filter_input(INPUT_POST, 'email_address');
$phone = filter_input(INPUT_POST, 'phone');
$contact = filter_input(INPUT_POST, 'contact');
$comments = filter_input(INPUT_POST, 'comments');

if ($contact == 'text') {
    $contact_by_mobile = 1;
} else {
    $contact_by_mobile = 0;
}
if ($contact == 'email') {
    $contact_by_email = 1;
} else {
    $contact_by_email = 0;
}

if ($email_address == null || $phone == null || $comments == null) {
    $error = "Invalid input data. Check all fields and try again.";
    echo "Form Data Error: ", $error;
    exit();
} else {
    //data is valid. define pdo & insert data.
    try {
        require_once ('../../model/database.php');
        require_once ('../../model/visit.php');
        addVisit($email_address, $phone, $contact_by_mobile,
                $contact_by_email, $comments);
    } catch (PDOException $ex) {
        $error_message = $ex->getMessage();
        echo 'DB Error: ' . $error_message;
    }
}
?>

<!doctype html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../css/contact.css" rel="stylesheet" type="text/css"/>
</head>
<body>
    <nav class="navbar navbar-expand-lg">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0" id="navUl">
            <li class="nav-item"><a class="homePageLink nav-link" href="home.html">S|B|G|C</a></li>
            <li class="nav-item"><a class="nav-link" href="home.html#faqsHeading">FAQs</a></li>
            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
            <li class="nav-item"><a class="nav-link" href="admin.php">Admin</a></li>
            <li class="nav-item"><a class="nav-link" href="listrespondents.php">Respondents</a></li>
        </ul>
    </nav>
    <h1 id="thankYouScreen">Thank You!</h1>
</body>
</html>

