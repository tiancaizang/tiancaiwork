var content_str = ""
// 第一个界面   遍历数据 做界面
for(var i = 0; i<shuju.length;i++){
    var one_data = shuju[i]
    content_str +=`

                <div class="list_one">
                    <div class="kuang">
                        <img  src="`+one_data.img+`" alt=""> 
                        <span class="xiaozi">`+ one_data.xiaozi+`</span> </br>
                        <span class="dazi">`+one_data.dazi+`</span>
                    </div>
                    <div class="kuang">
                        <img  src="`+one_data.img_T+`" alt="">
                        <span  class="xiaozi">`+one_data.xiaozi_T+`</span> </br>
                        <span class="dazi">`+one_data.dazi_T+`</span>
                    </div>
                </div>`
}
$(".list").append($(content_str))

var content_str_er = ""
// 第二个界面  遍历数据 做界面
for(var i = 0; i<shujuer.length;i++){
    var two_data = shujuer[i]
    content_str_er +=`
                <div class="list_one">
                    <div class="kuang">
                        <img  src="`+two_data.img+`" alt=""> 
                        <span  class="xiaozi">`+two_data.dazi+`</span>
                    </div>
                    <div class="kuang">
                        <img  src="`+two_data.img_T+`" alt="">
                        <span class="xiaozi">`+two_data.dazi_T+`</span>
                    </div>
                </div>`
}
$(".list_er").append($(content_str_er))

// 第三个界面
var content_str_san = ""
for(var i = 0; i<shujusan.length;i++){
    var san_data = shujusan[i]
    content_str_san +=`
                <div class= 'Sansan'> 
                <div class="San" >
                        <div class="reirongkuang">
                            <img  src="`+san_data.img+`" alt=""> </br>
                            <span class="xiaozi">`+ san_data.xiaozi+`</span> </br>
                            <span class="dazi">`+san_data.dazi+`</span>
                        </div>    
                </div>
                </div>
                    `
}
$(".list_san").append($(content_str_san))

// -------------------
// 短视频
var kong =""
for(var i = 0 ; i <ER_shuju.length;i++){
    var ER_one =ER_shuju[i]
    kong+=`
        <div class="TV_Screen">
            <div class="TV_Screen_top">
                <span>`+ER_one.text+`</span>
                <img src="`+ER_one.img+`" alt="">
            </div>
            <div class="TV_Screen_dibu">
                <img class="xiaoyuan" src="`+ER_one.xiao_img+`" alt="">
                <span>`+ER_one.xiao_text_one+`</span>
                <span color="red" class="dibu_wang">王者荣耀</span>
                <img class="tubiao" src="./images/TV_xiaoxi.png" alt="">
                <img class="tubiao" src="./images/图标 17 (2).svg" alt="">
                <img class="tubiao" src="./images/TV_shanchu.png" alt="">
            </div>
        </div>
    `
}
$(".duanshipin").append($(kong))


var lishi = ""
for(var i = 0; i<lishi_jilu.length;i++){
    var lishijilu = lishi_jilu[i]
    lishi +=`
                <div class= 'Sansan'> 
                <div class="si" >
                        <div class="neirongkuang">
                            <img  src="`+lishijilu.img+`" alt=""> </br>
                            <span class="xiaozi">`+ lishijilu.xiaozi+`</span> </br>
                        </div>    
                </div>
                </div>
                    `
}
$(".lishijilu").append($(lishi))



var san_one = ""
// 第一个界面   遍历数据 做界面
for(var i = 0; i<shuju_2.length;i++){
    var sanone = shuju_2[i]
    san_one +=`

                <div class="list_one">
                    <div class="kuang">
                        <img  src="`+sanone.img+`" alt=""> 
                        <span class="xiaozi">`+ sanone.xiaozi+`</span> </br>
                        <span class="dazi">`+sanone.dazi+`</span>
                    </div>
                    <div class="kuang">
                        <img  src="`+sanone.img_T+`" alt="">
                        <span  class="xiaozi">`+sanone.xiaozi_T+`</span> </br>
                        <span class="dazi">`+sanone.dazi_T+`</span>
                    </div>
                </div>`
}
$(".list_2").append($(san_one))


var san_two = ""
// 第一个界面   遍历数据 做界面
for(var i = 0; i<shuju_3.length;i++){
    var santwo = shuju_3[i]
    san_two +=`

                <div class="list_one_1">
                    <div class="kuang">
                        <img  src="`+santwo.img+`" alt=""> 
                        <span class="xiaozi">`+ santwo.xiaozi+`</span> </br>
                        <span class="dazi">`+santwo.dazi+`</span>
                    </div>
                    <div class="kuang">
                        <img  src="`+santwo.img_T+`" alt="">
                        <span  class="xiaozi">`+santwo.xiaozi_T+`</span> </br>
                        <span class="dazi">`+santwo.dazi_T+`</span>
                    </div>
                </div>`
}
$(".list_3").append($(san_two))


var kandan = ""
for(var i = 0; i<lishi_jilu_1.length;i++){
    var kandan_my = lishi_jilu_1[i]
    kandan +=`
                <div class= 'kandanda'> 
                        <div class="neirongtu">
                            <img  src="`+kandan_my.img+`" alt=""> 
                            </div>
                            <div class='neirongzi'>
                            <span class="xiaozi">`+ kandan_my.xiaozi+`</span> <br>
                            <span class="dazi">`+ kandan_my.dazi+`</span>
                            </div> 
                </div>
                    `
}
$(".wodekandan").append($(kandan))


var sousuo_tutu = ""
for(var i = 0; i<sousuotutu.length;i++){
    var sousuo_neirong = sousuotutu[i]
    sousuo_tutu +=`
    <div>
    <div class='jiangediv'>
    <p class='shu_zi'>`+ sousuo_neirong.shu_zi+`</p>
    <span class='wen_zi'>`+ sousuo_neirong.wen_zi+`</span>
    <div class="hengxianxian"></div>
    <div class='zuihoudegang'></div>
    </div>
    <div>
    `
}
$(".shujutu").append($(sousuo_tutu))



var kan_dian = ""
for(var i = 0; i<kandian_arr.length;i++){
    var kan_dan = kandian_arr[i]
    kan_dian +=`
    <div class="si" >
            <div class="neirongkuang_1">
                <span class="xiaozi_1">`+ kan_dan.xiaozi +`</span>
            </div> 
    </div>
`
}
$(".tuilakandian").append($(kan_dian))


var jingcai_hua = ""
for(var i = 0; i<lishi_jilu_3.length;i++){
    var jingcai_my = lishi_jilu_3[i]
    jingcai_hua +=`
                <div class= 'kandanda'> 
                        <div class="neirongtu">
                            <img  src="`+jingcai_my.img+`" alt=""> 
                            </div>
                            <div class='neirongzi'>
                            <span class="xiaozi_zi">`+ jingcai_my.xiaozi+`</span>
                            </div> 
                </div>
                    `
}
$(".jingcaipian_hua").append($(jingcai_hua))


var jingcai_hua_2 = ""
for(var i = 0; i<lishi_jilu_4.length;i++){
    var jingcai_my_2 = lishi_jilu_4[i]
    jingcai_hua_2 +=`
                <div class= 'kandanda'> 
                        <div class="neirongtu">
                            <img  src="`+jingcai_my_2.img+`" alt=""> 
                            </div>
                            <div class='neirongzi'>
                            <span class="xiaozi_zi">`+ jingcai_my_2.xiaozi+`</span> <br>
                            <span class="dazi_zi">`+ jingcai_my_2.dazi+`</span>
                            </div> 
                </div>
                    `
}
$(".jingcaipian_hua_2").append($(jingcai_hua_2))