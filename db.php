<?php
$servername = "sql647.main-hosting.eu";
$username = "u682819236_ccatura4";
include("./private/pword.php");
$dbname = "u682819236_photo_time";
$conn=mysqli_connect($servername,$username,$password,"$dbname");
if(!$conn){
    die('Could not Connect MySql Server:' .mysql_error());
}
?>