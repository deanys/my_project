user_name = {
    uname: "大梦三生",
    phone: "18820904212"
}
data = {
    id: "18820904212",
    item0: {
        num: 1,
        book_name: "史记",
        o_price: "73.45"
    },
    item1: {
        num: 2,
        book_name: "资治通鉴",
        o_price: "102.35"
    },
    item2: {
        num: 1,
        book_name: "明朝那些事",
        o_price: "69"
    },
    item3: {
        num: 2,
        book_name: "千山万水",
        o_price: "21.58"
    },
    item4: {
        num: 1,
        book_name: "搜神记",
        o_price: "19.99"
    },
    item5: {
        num: 5,
        book_name: "聊斋",
        o_price: "39.99"
    },
}

// console.log(JSON.stringify(data))
// var o_d = ReadLocal("my_data");
// for (let key in o_d) {
//     console.log(key + "    " + o_d[key]);
//     console.log(typeof o_d[key])
//     if (typeof o_d[key] === "object") {
//         for (let ok in o_d[key]) {
//             console.log(ok + "   " + o_d[key][ok])
//         }
//     }
// }

function ReadLocal(user_name) {
    var uname = localStorage[user_name];
    if (!uname) {
        return false;
    } else {
        o_uname = JSON.parse(uname);
        console.log(o_uname);
        return o_uname;
    }
}

function WriteLocal(data, local_id) {
    // console.log(typeof data)
    if (typeof data !== "object") {
        return false
    } else {
        j_data = JSON.stringify(data);
    }
    localStorage[local_id] = j_data;
    return true
}