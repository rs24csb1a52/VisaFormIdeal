<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $passport = $_POST['passport'];
    $country = $_POST['country'];
    $password = $_POST['password'];
    
    echo "<h2>Visa Application Details</h2>";
    echo "<p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>";
    echo "<p><strong>Passport Number:</strong> " . htmlspecialchars($passport) . "</p>";
    
    switch ($country) {
        case 'U':
            echo "<p><strong>Visa required for most applicants.</strong> </p>";
            break;
        case 'C':
            echo "<p><strong>Visa required unless you have an eTA</strong> </p>";
            break;
        case 'I':
            echo "<p><strong>Visa required before travel</strong> </p>";
            break;
        case 'UK':
            echo "<p><strong>Visa depends on the duration of stay</strong> </p>";
            break;
        case 'AUS':
            echo "<p><strong>eVisa available for eligible travelers.</strong> </p>";
            break;
        default:
            echo "<p><strong>Invalid country selection.</strong> </p>";
            break;
    }
    
    echo "<a style='text-decoration: none; color: blue; display: block; margin-top: 15px;' href='javascript:void(0);' onclick='document.getElementById(\"result\").style.display=\"none\"; document.getElementById(\"visaForm\").reset();'>Submit Another Application</a>";
}
?>
