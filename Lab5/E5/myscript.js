/*
 * @Author: Akko
 * @Date: 2020-10-17 16:09:13
 * @LastEditTime: 2020-10-18 17:51:23
 * @LastEditors: Akko
 * @Description: 
 * @FilePath: /WebDesign-Development/Lab5/E5/myscript.js
 * @ Copyright ©️ 2020 Akko All rights reserved.
 */
function Sum() {
    var SumValue1 = document.getElementById("value1");
    var SumValue2 = document.getElementById("value2");
    var SumResult = document.getElementById("result");
    
    SumResult.value = parseInt(SumValue1) + parseInt(SumValue2);
}