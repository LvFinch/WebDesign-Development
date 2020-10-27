/*
 * @Author: Akko
 * @Date: 2020-10-17 16:09:13
 * @LastEditTime: 2020-10-27 15:07:28
 * @LastEditors: Akko
 * @Description: 
 * @FilePath: /WebDesign-Development/Lab5/E5/myscript.js
 * @ Copyright ©️ 2020 Akko All rights reserved.
 */
function Compute(compute) {
    //计算符号判断
    console.log(compute.id);
    var signid = compute.id;
    // alert(signid);
    //获取两个数的值
    value1 = Number(document.getElementById("value1").value);
    value2 = Number(document.getElementById("value2").value);
    //获取计算结果的值
    // result = document.getElementById("result").value;
    //四则运算
    switch (signid) {
        case "+":
            result = value1 + value2;
            break;
        case "-":
            result = value1 - value2;
            break;
        case "*":
            result = value1 * value2;
            break;
        case "/":
            if (value2 == 0) {
                alert("除数不能为0!");
                result = "error";
            } else {
                result = value1 / value2;
                result = result.toFixed(5);
            }
            break;
    }
    document.getElementById("result").value = result;
    
}