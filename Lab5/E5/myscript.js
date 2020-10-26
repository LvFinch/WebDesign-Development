/*
 * @Author: Akko
 * @Date: 2020-10-17 16:09:13
 * @LastEditTime: 2020-10-25 00:28:36
 * @LastEditors: Akko
 * @Description: 
 * @FilePath: /WebDesign-Development/Lab5/E5/myscript.js
 * @ Copyright ©️ 2020 Akko All rights reserved.
 */
function Compute(comp) {
    //计算符号判断
    consele.log(comp.id);
    var signid = comp.id;
    alert(signid);
    //获取两个数的值
    value1 = Number(document.getElementById("value1").value);
    value2 = Number(doucument.getElementById("value2").value);
    //获取计算结果的值
    result = document.getElementById("result").value;
    //四则运算
    switch (signid) {
        case "Addition":
            result = value1 + value2;
            break;
        case "Subtraction":
            result = value1 - value2;
            break;
        case "Multiplication":
            result = value1 * value2;
            break;
        case "Division":
            if (value2 == 0) {
                alert("除数不能为0!");
                result = "error";
            } else {
                result = value1 / value2;
            }
            break;
    }
    document.getElementById("result").value = result;
}