<?php
header("Access-Control-Allow-Origin:*");
header('content-type:text/html;charset=utf-8;');
$server_host="localhost";
$host_name="root";
$host_pw="zxcvbnm";
$db="dangdang_db";
// 所有函数的返回值为1代表成功，0代表失败，2代表数据库错误
function check_user_exist($phone_name){
    global $server_host,$host_pw,$host_name,$db;
    $db_name="select * from user_pass where phone=\"$phone_name\"";
    $dbc=mysqli_connect($server_host,$host_name,$host_pw,$db) or die("2");
    $res=mysqli_query($dbc,$db_name) or die("2");
    
    if($row = $res->fetch_assoc()){
        mysqli_close($dbc);
        return "0";
    }else{
        mysqli_close($dbc);
        return "1";
    };
    
}
//当check_user_exist()存在时返回0，不存在返回1，服务器和数据库错误返回2；
// echo check_user_exist("18820904212");

function insert_new_user($user,$phone,$pw){
    global $server_host,$host_pw,$host_name,$db;
    $db_name="insert into user_pass (user,phone,password) values (\"$user\",\"$phone\",\"$pw\")";
    $dbc=mysqli_connect($server_host,$host_name,$host_pw,$db) or die("2");
    $res=mysqli_query($dbc,$db_name) or die("4");
    if(!$res){
        mysqli_close($dbc);
        return "0";
    }else{
        mysqli_close($dbc);
        return "1";
    };
}
// echo insert_new_user("杨硕","18820904213","cheakddf");


// CREATE TABLE IF NOT EXISTS `杨硕_info`(
//     `id` INT UNSIGNED AUTO_INCREMENT,
//     `bookname` VARCHAR(20) NOT NULL,
//     `price` VARCHAR(10) NOT NULL,
//     `num` int(3) not NULL,
//     PRIMARY KEY ( `id` )
//  )ENGINE=InnoDB DEFAULT CHARSET=utf8;

?>