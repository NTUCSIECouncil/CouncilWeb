<?php
$con = mysqli_connect("localhost","root","0000");
if(!$con)
{
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"CouncilWeb");
mysqli_set_charset($con, "utf8");

?>