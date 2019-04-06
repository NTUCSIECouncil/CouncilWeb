<?php

include_once('connect.php');

$page = intval(@$_GET['pageNum']);

$result = mysql_query("SELECT EventID FROM Events");
$totalData = mysql_num_rows($result);

$pageSize = 10;


$startPage = $page*$pageSize;
$query = mysql_query("SELECT EventName Category CreateDate FROM Events LIMIT $startPage,$pageSize");

$arr=array();

while($row = mysql_fetch_array($query)){
    $arr[] = array(
        'EventName' => $row['EventName'],
        'Category' => $row['Category'],
        'CreateDate' => $row['CreateDate'],
    );
}

json_encode($arr);

?>