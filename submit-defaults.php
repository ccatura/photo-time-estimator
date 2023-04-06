<?php
include_once 'db.php';
if(isset($_POST['submit']))
{    
    $username = 'ccatura';
    $sku_time = $_POST['sku_time'];
    $video_time = $_POST['video_time'];
    $ts_time = $_POST['ts_time'];

    $sql = "
    INSERT INTO `time_defaults` (`sku_time`, `video_time`, `ts_time`)
    VALUES ('$sku_time', '$video_time', '$ts_time')";

    if (mysqli_query($conn, $sql)) {
       echo "New record has been added successfully !";
    } else {
       echo "Error: " . $sql . ":-" . mysqli_error($conn);
    }
    mysqli_close($conn);
}

?>