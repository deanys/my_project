<?php
header("Access-Control-Allow-Origin:*");
require_once("data_config.php");
echo check_user_exist($_POST["phone"]);
?>