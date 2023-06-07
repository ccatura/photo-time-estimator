<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Defaults</title>

<style>
    * {
        margin: 0;
        padding: 0;
        font-size: 24px;
        font-family: Arial, Helvetica, sans-serif;
    }

    body {
        margin: 2em;
    }

    .section {
        margin-bottom: 1em;
    }
</style>


</head>
<body>

<?php
    include_once('db.php');
	$result = mysqli_query($conn,"SELECT * FROM `time_defaults`;");
    $row = mysqli_fetch_assoc($result);
    $sku_time       = $row['sku_time'];
    $video_time     = $row['video_time'];
    $ts_time        = $row['ts_time'];
    $difficult_time = $row['difficult_time'];
?>


    <form action="submit-defaults.php" method="post">
        <div>
            <h2>Enter Time in Minutes</h2><br>
            <div class="section"><p>Single SKU, 3 Image Set <em style="font-size:small;">(Original Default: 40)</em></p>
                <input name="sku_time" type="number" min="0" value="<?php echo $sku_time ?>" required>
            </div>
            <div class="section"><p>Video 360 <em style="font-size:small;">(Original Default: 25)</em></p>
                <input name="video_time" type="number" min="0" value="<?php echo $video_time ?>" required>
            </div>
            <div class="section"><p>Regular 360 <em style="font-size:small;">(Original Default: 30)</em></p>
                <input name="ts_time" type="number" min="0" value="<?php echo $ts_time ?>" required>
            </div>
            <div class="section"><p>Difficulty Offset <em style="font-size:small;">(Original Default: 8)</em></p>
                <input name="difficult_time" type="number" min="0" value="<?php echo $difficult_time ?>" required>
            </div>
            <button name="submit">Submit</button>
        </div>
    </form>

    <a href='./index.php' style="margin-top:1em;font-size:14px;">Go back to Photo Time Estimator</a></div>


</body>
</html>