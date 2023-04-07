<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

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
    <form action="submit-defaults.php" method="post">
        <div>
            <div class="section"><p>Single SKU, 3 Image Set</p>
                <input name="sku_time" type="number" placeholder="Enter time in minutes" required>
            </div>
            <div class="section"><p>Video 360</p>
                <input name="video_time" type="number" placeholder="Enter time in minutes" required>
            </div>
            <div class="section"><p>Regualr 360</p>
                <input name="ts_time" type="number" placeholder="Enter time in minutes" required>
            </div>
            <button name="submit">Submit</button>
        </div>
    </form>

    <a href='./index.php'>Go back to Photo Times Estimator app.</a></div>


</body>
</html>