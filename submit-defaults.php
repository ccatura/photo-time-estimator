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
      echo "<div style='font-size:24px;'>";
      echo "SKU time:   " . $sku_time . " minute(s)<br>";
      echo "Video time: " . $video_time . " minute(s)<br>";
      echo "360 time:   " . $ts_time . " minute(s)<br><br>";
      echo "Times have been added successfully!<br><br>";
      echo "<a href='./defaults.php'>Go back to defaults.</a></div>";
      echo "<a href='./'>Go back to Photo Times Estimator app.</a></div>";
    } else {
       echo "Error: " . $sql . ":-" . mysqli_error($conn);
    }
    mysqli_close($conn);
}

?>