<?php
/**
 * Created by PhpStorm.
 * User: mac
 * Date: 12.08.21
 * Time: 2:39 PM
 */ ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>main</title>
    <link rel="stylesheet" type="text/css" href="../css/semantic.min.css">
    <script src="../js/semantic.min.js"></script>
    <link rel="stylesheet" type="text/css" href="../css/menu.css">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
            crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../css/main.css">
    <script src="automat.js"></script>
    <script src="automatN3.js"></script>
    <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body onload="automatN3.start(3,0)">
<nav class="navbar navbar-expand-lg navbar-dark" id="menu">
    <a class="navbar-brand" href="#">HLLOWR</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="../automats/automat.php">automat</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="automatN3.php">automatN3</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="krestiki.php">krestiki</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <!--            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
        </form>
    </div>
</nav>
<div class="canvas_div">
</div>
<canvas id="canvas2" width="1400px" height="670px">

</canvas>
</body>
</html>