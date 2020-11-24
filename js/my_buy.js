var data = {
    uname: "米粉",
    phone: "18820904212",
    item0: {
        num: 3,
        show_name: "小米10 青春版",
        img_src: "pms_00003.jpg",
        o_price: "1999",
        checked: 1
    },
    item1: {
        num: 1,
        show_name: "小米电饭煲",
        img_src: "pms_00000.jpg",
        o_price: "449",
        checked: 0
    },
    item2: {
        num: 5,
        show_name: "手机usb 数据线",
        img_src: "pms_00001.jpg",
        o_price: "9.9",
        checked: 0
    },
    item3: {
        num: 1,
        show_name: "Red Mi K30",
        img_src: "pms_00002.jpg",
        o_price: "5999",
        checked: 1
    }
}
var user_data = ReadLocal("user_info");
$(function() {
    // WriteLocal(data, "user_info");
    // check_user_login();

    var arr_data = load_tohtml(user_data);
    // 现在开始事件绑定
    // 1.删除操作
    del_table(user_data);
    // 2.全选操作
    all_check();
    // 3.单选操作
    sig_check();
    //4.加减操作
    add_jian();
});

function add_jian() {
    var data_arr = Object.keys(user_data)
    $(".jian").bind("click", function() {
        // console.log($(this).next());
        var change_num = $(this).next().text() - 1;
        if (change_num < 0) {
            return
        }
        $(this).next().text(change_num)
        var key = $(this).attr("my_item");
        user_data[key].num = change_num;
        $(".item_price").eq(data_arr.indexOf(key) - 2).text((change_num * user_data[key].o_price).toFixed(2))
        WriteLocal(user_data, "user_info");
        anli_user_data();
    })

    $(".add").bind("click", function() {
        // console.log($(this).next());
        var change_num = parseInt($(this).prev().text()) + 1;
        if (change_num > 20) {
            return
        }
        $(this).prev().text(change_num)
        var key = $(this).attr("my_item");
        $(".item_price").eq(data_arr.indexOf(key) - 2).text((change_num * user_data[key].o_price).toFixed(2))
        user_data[key].num = change_num;
        WriteLocal(user_data, "user_info");
        anli_user_data();
    })
}

function sig_check() {
    $(".check_item").bind("click", function() {
        if ($(this).is(":checked")) {
            $(this).attr("my_check", "1");
            var key = $(this).attr("my_item");
            user_data[key].checked = 1;
            for (var i = 0; i < $(".check_item").length; i++) {
                if ($(".check_item").eq(i).attr("my_check") != "1") {
                    break
                }
                if (i == ($(".check_item").length - 1)) {
                    console.log("全都选中");
                    $("#qx").prop("checked", true)
                }
            }
        } else {
            $(this).attr("my_check", "0");
            var key = $(this).attr("my_item");
            user_data[key].checked = 0;
        }
        WriteLocal(user_data, "user_info");
        anli_user_data();
    })

}

function all_check() {
    $("#qx").bind("click", function() {
        console.log($(this).is(":checked"))
        var data_arr = Object.keys(user_data)
        var data_len = data_arr.length;
        if ($(this).is(":checked")) {
            for (var i = 0; i < data_len; i++) {
                var key = data_arr[i];
                if (typeof user_data[key] === "object") {
                    user_data[key].checked = 1
                }
            }
            for (var i = 0; i < $(".check_item").length; i++) {
                console.log("i is " + i);
                $(".check_item").eq(i).prop("checked", true);
                $(".check_item").eq(i).attr("my_check", "1");
            }
        } else {
            for (var i = 0; i < data_len; i++) {
                var key = data_arr[i];
                if (typeof user_data[key] === "object") {
                    user_data[key].checked = 0
                }
            }
            for (var i = 0; i < $(".check_item").length; i++) {
                $(".check_item").eq(i).prop("checked", false);
                $(".check_item").eq(i).attr("my_check", "0");
            }
        }
        WriteLocal(user_data, "user_info");
        anli_user_data();
    })
}

function del_table() {
    $(".del_bu").bind("click", function() {
        // console.log($(this))
        console.log($(this).parent().parent().parent());
        var my_item = $(this).attr("my_item");
        $(this).parent().parent().parent().remove();
        delete user_data[my_item]
        WriteLocal(user_data, "user_info");
        anli_user_data();
    })
}

function anli_user_data() {
    // all_num, checked_num, total_price
    var data_arr = Object.keys(user_data)
    var data_len = data_arr.length;
    var all_num = 0,
        checked_num = 0,
        total_price = 0;
    for (var i = 0; i < data_len; i++) {
        var key = data_arr[i];
        if (typeof user_data[key] === "object") {
            var item_price = (parseInt(user_data[key].num) * parseFloat(user_data[key].o_price)).toFixed(2);
            all_num = user_data[key].num + all_num;
            if (user_data[key].checked == 1) {
                checked_num = user_data[key].num + checked_num;
                total_price = total_price + parseFloat(item_price);
            }
        }
    }
    update_html([all_num, checked_num, total_price])
}

function load_checkbox() {
    console.log($(".check_item").length);
    for (var i = 0; i < $(".check_item").length; i++) {
        console.log($(".check_item").eq(i).attr("my_check"));
        if ($(".check_item").eq(i).attr("my_check") == "1") {
            $(".check_item").eq(i).attr("checked", true)
        }
    }
}

function load_tohtml() {
    $("#uname").text(user_data.uname);
    var data_arr = Object.keys(user_data)
    var data_len = data_arr.length;
    var all_num = 0,
        checked_num = 0,
        total_price = 0;
    console.log(data_len, data_arr[0]);
    for (var i = 0; i < data_len; i++) {
        var key = data_arr[i];
        if (typeof user_data[key] === "object") {
            console.log(user_data[key].num, user_data[key].show_name, user_data[key].img_src, user_data[key].o_price);
            var item_price = (parseInt(user_data[key].num) * parseFloat(user_data[key].o_price)).toFixed(2);
            all_num = user_data[key].num + all_num;
            if (user_data[key].checked == 1) {
                checked_num = user_data[key].num + checked_num;
                console.log(item_price);
                total_price = total_price + parseFloat(item_price);
            }
            var htm_create = `<div class="detail_buy clearfix">
                   <div class="item">
                 <div class="item_check" style="width: 75px;">
                 <input type="checkbox" name="" my_check="${user_data[key].checked}" class="check_item" my_item="${key}">
                 </div>
                  <a href="" style="width: 120px;"><img src="../img/${user_data[key].img_src}" alt=""></a>
                <div class="pin_name" style="width: 440px;">${user_data[key].show_name}</div>
                <span style="width: 100px;"><i class="price">${user_data[key].o_price}</i>元</span>
                <div class="num_choice" style="width: 230px;">
                <div>
                <span class="jian" my_item="${key}">-</span>
                <span class="num">${user_data[key].num}</span>
                <span class="add" my_item="${key}">+</span>
              </div>
             </div>
             <span style="width: 100px;"><i class="item_price" >${item_price}元</i></span>
             <div class="del">
             <a class="del_bu" my_item="${key}">X</a>
           </div>
           </div>
           </div>`
            $(".res").before(htm_create);

        }
    }
    // console.log(total_price);
    load_checkbox();
    update_html([all_num, checked_num, total_price]);
    return [all_num, checked_num, total_price];
}

function update_html(arr_data) {
    // [all_num, checked_num, total_price]
    if (!(arr_data instanceof Array)) {
        return false
    }
    $("#all_num").text(arr_data[0]);
    $("#check_num").text(arr_data[1]);
    $("#all_price").text(arr_data[2]);

}

function check_user_login() {
    console.log("正在确定用户是否登录");
    console.log(ReadLocal("user_info"));
    if (!ReadLocal("user_info")) {
        alert("用户没有登录，请购买")
        WriteLocal(data, "user_info");
    } else {
        return true
    }
}

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

function WriteLocal(data, local_id) {
    if (!(data instanceof Object)) {
        return false
    } else {
        var j_data = JSON.stringify(data);
    }
    localStorage[local_id] = j_data;
    return true
}