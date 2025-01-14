<?php
/*
 *
 *       Date              User               Description
 * ------------------------------------------------------------------------------
 *      2/16/22           Aaron Potter          Adding an error page
 * 
 *  
 */
//try {
//    require_once ('../../util/secure_conn.php');
//    require_once ('../../util/valid_admin.php');
//    require_once ('../../model/database.php');
//} catch (Exception $ex) {
//    $error_message = $e->getMessage();
//    echo 'DB Error: ' . $error_message;
//}
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
    <h1 id="thankYouScreen">Error. Go back and try again.</h1>
</body>
</html>

