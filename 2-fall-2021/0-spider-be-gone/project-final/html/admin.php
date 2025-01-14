<?php
##########################################################################################
# 
#Name			Date			Description
#Aaron			2/4/2022		Admin Manager Page
#Aaron                  2/12/2022               Refactoring Initial Functionality
#Aaron                  2/18/2022               Tried fixing the delete button. 
#                                               Still not working
#
##########################################################################################




try {
    require_once ('../../util/secure_conn.php');
    require_once ('../../util/valid_admin.php');
    require_once ('../../model/database.php');
    require_once ('../../model/respondent.php');
    require_once ('../../model/visit.php');
} catch (Exception $ex) {
    $error_message = $e->getMessage();
    echo 'DB Error: ' . $error_message;
}
//check action
$action = filter_input(INPUT_POST, 'action');
echo "<script>console.log('SOMTHING:" . //troubleshooting the delete button
        isset($_POST["action"]) . "');</script>"; //delet button trouble shooting
if ($action == NULL) {
    $action = filter_input(INPUT_POST, 'action');
    if ($action == NULL) {
        $action = 'list_visits';
    }
}
echo "<script>console.log('" . $action . "');</script>";

if ($action == 'list_visits') {
    $respondent_id = filter_input(INPUT_GET, 'respondent_id', FILTER_VALIDATE_INT);
    echo "<script>console.log('" . $respondent_id. "');</script>";
    if ($respondent_id == NULL || $respondent_id == FALSE) {
        $respondent_id = filter_input(INPUT_POST, 'respondent_id', FILTER_VALIDATE_INT);
        if ($respondent_id == NULL || $respondent_id == FALSE) {
                echo "<script>console.log('wubulubu dub dub');</script>"; //delete button still doesn't work
            $respondent_id = 1;
        }
    }
    try {
        $respondents = RespondentDB::getResp();
        $visits = getVisitbyResp($respondent_id);
    } catch (PDOException $ex) {
        $error_message = $e->getMessage();
        echo 'DB Error: ' . $error_message;
    }
} else if ($action == 'delete_visit') {
    echo "<script>console.log('wubulubu dub dub');</script>";
    $visit_id = filter_input(INPUT_POST, 'visit_id', FILTER_VALIDATE_INT);
    $respondent_id = filter_input(INPUT_POST, 'respondent_id', FILTER_VALIDATE_INT);
    delVisit($visit_id);
    header("Location: admin.php?respondent_id=$respondent_id");
}
?>


<html>
    <head>
        <title>Admin Page</title>
        <link href="../css/contact.css" rel="stylesheet">
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
        <div id="formContainer" style="color:White">
            <h1>Administrator Manager</h1>
            <h3>Select a respondent to view the assigned visit information.</h3>
            <aside>
                <ul style="list-style-type: none;">
                    <?php foreach ($respondents as $respondent) : ?>
                        <li>
                            <a href="?respondent_id=<?php echo $respondent['respondent_id']; ?>">
                                <?php echo $respondent['first_name'] . ' ' . $respondent['last_name']; ?>
                            </a>
                        </li>

                    <?php endforeach; ?>
                </ul>
            </aside>

            <table style="color:White">
                <tr>
                    <th>Email Address</th>
                    <th>Mobile Phone</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Contact By Mobile</th>
                    <th>Contact By Email</th>
                    <th></th>

                </tr>
                <?php foreach ($visits as $visit) : ?>
                    <tr>
                        <td><?php echo $visit['email_address'] ?></td>
                        <td><?php echo $visit['mobile_phone'] ?></td>
                        <td><?php echo $visit['visit_msg'] ?></td>
                        <td><?php echo $visit['visit_date'] ?></td>
                        <td><?php echo $visit['contact_by_mobile'] ?></td>
                        <td><?php echo $visit['contact_by_email'] ?></td>
                        <td>
                            <form action="admin.php" method="POST">
                                <input type="hidden" name="respondent_id"
                                       value="<?php echo $visit['respondent_id'] ?>">
                                <input type="hidden" name="action" value="delete_visit">
                                <input type="hidden" name="visit_id"
                                       value="<?php echo $visit['visit_id']; ?>">
                                <input type="submit" value="Delete">
                            </form>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </table>
        </div>

    </body>
</html>


