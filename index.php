<?php
include_once 'db.php';
	$result = mysqli_query($conn,"SELECT * FROM `time_defaults`;");
    $row = mysqli_fetch_assoc($result);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./styles.css">
    <link rel="manifest" href="/manifest.json">
    <script src="./scripts.js" defer></script>

    <title>Imaging Time Estimator</title>
</head>
<body>

    <div class="wrapper">
        <div class="calc-window">
            <div class="calc-title-bar">
                Imaging Time Estimator
            </div>
            <div class="calc-body">
                <div class="calc-body-parent-section">
                    <div class="calc-body-child-section">
                        <div class="element-group">
                            <input type="checkbox" checked id="defaults">
                            <label style="margin-left: .2em; font-size: 13px;" for="defaults">Defaults</label>
                        </div>
                        <div class="element-group">
                            <input type="checkbox" unchecked id="difficult" value="<?php echo $row['difficult_time'] ?>">
                            <label style="margin-left: .2em; font-size: 13px;" for="difficult">Difficult (+<?php echo $row['difficult_time'] ?> min./image)</label>
                            <input type="hidden" id="difficult-hidden" value="<?php echo $row['difficult_time'] ?>">
                        </div>
                        <button style="width: 60px;" id="reset" class="action-button">Reset</button>
                    </div>
                </div>
                <div class="calc-body-parent-section">
                    <div class="calc-body-child-section">
                        <p>SKUs needed</p>
                        <input type="number" min="0" id="skus-needed" value="0" onclick="this.select();">
                    </div>
                    <div class="calc-body-child-section">
                        <p class="not-link">Minutes per SKU &#91;?&#93;</p><div id="shots-info">3 image Set</div>
                        <input type="number" min="0" id="skus-time" disabled class="times" value="<?php echo $row['sku_time'] ?>" defaulttime="<?php echo $row['sku_time'] ?>">
                    </div>
                </div>
                <div class="calc-body-parent-section">
                    <div class="calc-body-child-section">
                        <p>Videos needed</p>
                        <input type="number" min="0" id="videos-needed" value="0" onclick="this.select();">
                    </div>
                    <div class="calc-body-child-section">
                        <p>Minutes per video</p>
                        <input type="number" min="0" id="videos-time" disabled class="times" value="<?php echo $row['video_time'] ?>" defaulttime="<?php echo $row['video_time'] ?>">
                    </div>
                </div>
                <div class="calc-body-parent-section">
                    <div class="calc-body-child-section">
                        <p>360s needed</p>
                        <input type="number" min="0" id="three-sixties-needed" value="0" onclick="this.select();">
                    </div>
                    <div class="calc-body-child-section">
                        <p>Minutes per 360</p>
                        <input type="number" min="0" id="three-sixties-time" disabled class="times" value="<?php echo $row['ts_time'] ?>" defaulttime="<?php echo $row['ts_time'] ?>">
                    </div>
                </div>
                <div class="calc-body-parent-section">
                    <div class="hr"></div>
                </div>
                <div class="results-parent-section">
                    <div class="results-child-section" id="skus-results">&nbsp;</div>
                    <div class="results-child-section" id="videos-results">&nbsp;</div>
                    <div class="results-child-section" id="three-sixties-results">&nbsp;</div>
                    <div class="results-child-section" id="total-results">&nbsp;</div>
                </div>
            </div>
        </div>

        <div class="keypad">
            <div class="keypad-words">
                SKUs Needed
            </div>
            <div class="row">
                <div class="button">7</div>
                <div class="button">8</div>
                <div class="button">9</div>
            </div>
            <div class="row">
                <div class="button">4</div>
                <div class="button">5</div>
                <div class="button">6</div>
            </div>
            <div class="row">
                <div class="button">1</div>
                <div class="button">2</div>
                <div class="button">3</div>
            </div>
            <div class="row">
                <div class="button">&#9003;</div>
                <div class="button">0</div>
                <div class="button" style="font-size:14px;font-weight:bold;">ENTER</div>
            </div>
            <div class="keypad-words">
                30
            </div>
        </div>
        <a href="./defaults.php" style="font-size:10px;text-decoration:none;color:black;">[EDIT DEFAULT TIMES]</a>

    </div>
    
</body>
</html>





