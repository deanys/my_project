// var ob = {
//     'item00': { 'name': '小米10', 'big_src': 'pms_big0000.jpg', 'sma_src': 'pms_sm00010.jpg' },
//     'item01': { 'name': '小米10', 'big_src': 'pms_big0001.jpg', 'sma_src': 'pms_sm00011.jpg' },
//     'item02': { 'name': '小米10', 'big_src': 'pms_big0002.jpg', 'sma_src': 'pms_sm00012.jpg' },
//     'item03': { 'name': '小米10', 'big_src': 'pms_big0003.jpg', 'sma_src': 'pms_sm00013.jpg' },
//     'item04': { 'name': '小米10', 'big_src': 'pms_big0004.jpg', 'sma_src': 'pms_sm00014.jpg' },
//     'item05': { 'name': '小米10', 'big_src': 'pms_big0005.jpg', 'sma_src': 'pms_sm00015.jpg' },
//     'item06': { 'name': '小米10', 'big_src': 'pms_big0006.jpg', 'sma_src': 'pms_sm00016.jpg' },
//     'item07': { 'name': '小米10', 'big_src': 'pms_big0007.jpg', 'sma_src': 'pms_sm00017.jpg' },
//     'item08': { 'name': '小米10', 'big_src': 'pms_big0008.jpg', 'sma_src': 'pms_sm00018.jpg' },
//     'item09': { 'name': '小米10', 'big_src': 'pms_big0009.jpg', 'sma_src': 'pms_sm00019.jpg' },
//     'item10': { 'name': '小米10', 'big_src': 'pms_big00010.jpg', 'sma_src': 'pms_sm00020.jpg' },
//     'item11': { 'name': '小米10', 'big_src': 'pms_big00011.jpg', 'sma_src': 'pms_sm00021.jpg' },
//     'item12': { 'name': '小米10', 'big_src': 'pms_big00012.jpg', 'sma_src': 'pms_sm00022.jpg' },
//     'item13': { 'name': '小米10', 'big_src': 'pms_big00013.jpg', 'sma_src': 'pms_sm00023.jpg' },
//     'item14': { 'name': '小米10', 'big_src': 'pms_big00014.jpg', 'sma_src': 'pms_sm00024.jpg' },
//     'item15': { 'name': '小米10', 'big_src': 'pms_big00015.jpg', 'sma_src': 'pms_sm00025.jpg' },
//     'item16': { 'name': '小米10', 'big_src': 'pms_big00016.jpg', 'sma_src': 'pms_sm00026.jpg' },
//     'item17': { 'name': '小米10', 'big_src': 'pms_big00017.jpg', 'sma_src': 'pms_sm00027.jpg' },
//     'item18': { 'name': '小米10', 'big_src': 'pms_big00018.jpg', 'sma_src': 'pms_sm00028.jpg' },
//     'item19': { 'name': '小米10', 'big_src': 'pms_big00019.jpg', 'sma_src': 'pms_sm00029.jpg' }
// }

$(function() {
    for (var i = 0; i < 20; i++) {
        var good_item = `<div class="good_item">
        <div class="figure">
            <a href="">
                <img src="../img/pms_big000${i}.jpg" alt="">
            </a>
            <h2><a href="">Redmi K30S 至尊纪念版 8GB+256GB</a></h2>
            <p><span>2799元</span></p>
            <div class="thub">
                <ul>
                    <li>
                        <a href=""><img src="../img/pms_sm0000.jpg" alt=""></a>
                    </li>
                    <li>
                        <a href=""><img src="../img/pms_sm0001.jpg" alt=""></a>
                    </li>
                </ul>
            </div>
            <div class="flag">
                <span class="new_lab">新品</span>
                <span class="sale_label">
                    <img src="../img/fenqi.png" alt="" style="width: 42px;height: 18px;">
                    <img src="../img/addprice.png" alt="" style="width: 56px;height: 18px;">
                </span>
            </div>
            </div>
           </div>`
        $(".good_list").append(good_item)

    }
})