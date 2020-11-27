var data = {
    0: {
        item0: {
            src: "mi10.jpg",
            title: "小米10 至尊版",
            price: "5299元"
        },
        item1: {
            src: "mi10.jpg",
            title: "小米10 至尊版",
            price: "5299元"
        },
        item2: {
            src: "mi10.jpg",
            title: "小米10 至尊版",
            price: "5299元"
        }
    },
    1: {
        item0: {
            src: "mi11.png",
            title: "Redmi K30S 至尊纪念版",
            price: "2599元"
        },
        item1: {
            src: "mi11.png",
            title: "Redmi K30S 至尊纪念版",
            price: "2599元"
        },
        item2: {
            src: "mi11.png",
            title: "Redmi K30S 至尊纪念版",
            price: "1599元"
        },
        item3: {
            src: "mi11.png",
            title: "Redmi K30S 至尊纪念版",
            price: "1599元"
        },
        item4: {
            src: "mi11.png",
            title: "Redmi K30S 至尊纪念版",
            price: "1599元"
        }
    }
}

$(function() {
    load_html();
    all_sale();
    item_hover();
    time_cu();
    lef_right();
    detail_ht();
})

function detail_ht() {
    $.ajax({
        type: "POST",
        url: "../php/check_user.php",
        data: { key: "手机" },
        success: function(res) {
            console.log(res);
        }
    })
}

function lef_right() {
    $(".right").css({
        "color": "red"
    });
    $(".left").bind("click", function() {
        //  width=978px
        if ($("#oul").css("left") != "0px") {
            $(".right").css({
                "color": "#b0b0b0"
            });
        } else {
            $(".right").css({
                "color": "red"
            });
        }

        // console.log($("#oul").css("left"));
        if ($("#oul").css("left") == "-3968px") {
            $(this).css({
                "color": "red"
            });
            return
        } else {
            $(this).css({
                "color": "#b0b0b0"
            })
            $("#oul").stop().animate({ left: "-=992px" }, 3000);
        }
    })
    $(".right").bind("click", function() {
        if ($("#oul").css("left") != "-3968px") {
            $(".left").css({
                "color": "#b0b0b0"
            });
        }
        if ($("#oul").css("left") == "0px") {
            $(this).css({
                "color": "red"
            });
            return
        } else {
            $(this).css({
                "color": "#b0b0b0"
            })
            $("#oul").stop().animate({ left: "+=992px" }, 3000);
        }


    })
    var count = 1
    setInterval(function() {
        if (count < 5) {
            $("#oul").stop().animate({ left: "-=992px" }, 1000);
            count++;
        } else if (5 <= count && count <= 8) {
            // console.log("gg")
            $("#oul").stop().animate({ left: "+=992px" }, 1000);
            count++;
        } else {
            count = 1
        }
        // console.log(count);

    }, 2000)
}


function time_cu() {
    var cu_time = [26, 24, 0, 0] //天 时 分 秒
    var st = setInterval(function() {
        var res = calc_time(cu_time);
        // $(".td").text(res[0] + "天");
        $(".th").text(res[1]);
        $(".tm").text(res[2]);
        $(".ts").text(res[3]);
    }, 1000)

}

function calc_time(end_time) {
    // var cu_time = [28, 22, 0, 0] //天 时 分 秒
    var date = new Date();
    var td = 0,
        th = 0,
        tm = 0,
        ts = 0
    ts = parseInt(end_time[3] - date.getSeconds());
    tm = parseInt(end_time[2] - date.getMinutes());
    th = parseInt(end_time[1] - date.getHours());
    td = parseInt(end_time[0] - date.getDate());
    if (ts < 0) {
        ts = 60 + ts;
        tm = tm - 1;
    }
    if (tm < 0) {
        tm = 60 + tm;
        th = th - 1;
    }
    if (th < 0) {
        th = 24 + th;
        td = td - 1;
    }
    th = formatZero(th, 2);
    tm = formatZero(tm, 2);
    ts = formatZero(ts, 2);
    return [td, th, tm, ts]
}

function formatZero(num, len) {
    if (String(num).length > len) return num;
    return (Array(len).join(0) + num).slice(-len);
}

function all_sale() {
    $(".all_sale_show").stop().show()
    $(".cat").hover(function() {
        $(this).next().stop().show()
    }, function() {
        $(this).next().stop().hide()
    })
    $(".home_menu_children").hover(function() {
        $(this).stop().show()
    }, function() {
        $(this).stop().hide()
    })
}


function item_hover() {
    $(".ah").hover(function() {
        $(this).next().stop().slideDown(600);

    }, function() {
        $(this).next().stop().slideUp(600);
    })
    $(".item_children").hover(function() {
        $(this).stop().show()
    }, function() {
        $(this).stop().slideUp(600);
    })
}

function load_html() {
    // console.log($(".children_list").length);
    // $(".children_list").append(item_li)
    for (var i = 0; i < $(".children_list").length; i++) {
        var ob = data[i % 2];
        var li_it = Object.keys(ob)
            // console.log(li_it, ob);
        for (var j = 0; j < li_it.length; j++) {
            // console.log(ob[li_it[parseInt(j)]]);
            var item_li = `<li>
            <a href="">
                <div class="figure"><img src="../img/${ob[li_it[parseInt(j)]].src}" alt="小米10"></div>
                <h2 class="title">${ob[li_it[parseInt(j)]].title}</h2>
                <p class="price">${ob[li_it[parseInt(j)]].price}</p>
            </a>
            </li>`
                // console.log(i)
            $(".children_list").eq(i).append(item_li);
            // console.log(j)
        }
    }
    // $(".children_list").eq(6).parent().show();
}