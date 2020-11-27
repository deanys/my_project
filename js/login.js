// import * as fn from "./my_buy"
// import { ReadLocal } from "./my_buy"
$(function() {
    // console.log(ReadLocal("user_info"));
    $("#button").bind("click", function() {
        console.log("正在进行ajax");
        $.ajax({
            type: "POST",
            url: "http://localhost/mi/my_project/dist/php/check_user.php",
            dataType: "json",
            data: localStorage.user_info,
            succes: function(res) {
                console.log(res)
            }
        })
    })
})


function ReadLocal(user_name) {
    var uname = localStorage[user_name];
    if (!uname) {
        return false;
    } else {
        var o_uname = JSON.parse(uname);
        console.log(o_uname);
        return o_uname;
    }
}