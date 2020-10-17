/*
 * @Author: Akko
 * @Date: 2020-10-17 14:34:48
 * @LastEditTime: 2020-10-17 14:35:18
 * @LastEditors: Akko
 * @Description: 
 * @FilePath: /WebDesign-Development/Lab5/E2/MyScript.js
 * @ Copyright ©️ 2020 Akko All rights reserved.
 */
function ChangeContent(data) {
    //获取被点击p标签id
    console.log(data.id);
    var tempid = data.id;
    //生成随机数用于随机显示结果
    var random = Math.floor(Math.random() * 9) + 1;
    if (random >= 1 && random <= 3) {
        document.getElementById(tempid).innerHTML = "No";
    } else if (random >= 4 && random <= 6) {
        document.getElementById(tempid).innerHTML = "Maybe";
    } else {
        document.getElementById(tempid).innerHTML = "Yes";
    }
}