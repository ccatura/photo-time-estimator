<?php
include_once 'db.php';
if(isset($_POST['submit']))
{    
    $username = 'ccatura';
    $sku_time = $_POST['sku_time'];
    $video_time = $_POST['video_time'];
    $ts_time = $_POST['ts_time'];

    $sql = "UPDATE `time_defaults` SET `sku_time`='$sku_time',`video_time`='$video_time',`ts_time`='$ts_time' WHERE 1";

    if (mysqli_query($conn, $sql)) {
       echo "New record has been added successfully !";
       echo "<a href='./'>Go to app</a>";
    } else {
       echo "Error: " . $sql . ":-" . mysqli_error($conn);
    }
    mysqli_close($conn);
}

?>