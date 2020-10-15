/*
 * @Author: Akko
 * @Date: 2020-10-14 21:19:21
 * @LastEditTime: 2020-10-14 21:22:44
 * @LastEditors: Akko
 * @Description: alert重写部分
 * @FilePath: /WebDesign-Development/Lab5/E1/winAlert.js
 * @ Copyright ©️ 2020 Akko All rights reserved.
 */
function setAleartStyle() {
    var shield = document.createElement("DIV");
    shield.id = "shield";
    shield.style.position = "absolute";
    shield.style.left = "50%";
    shield.style.top = "50%";
    shield.style.width = "280px";
    shield.style.height = "150px";
    shield.style.marginLeft = "-140px";
    shield.style.marginTop = "-110px";
    shield.style.zIndex = "25";
    var alertFram = document.createElement("DIV");
    alertFram.id = "alertFram";
    alertFram.style.position = "absolute";
    alertFram.style.width = "280px";
    alertFram.style.height = "150px";
    alertFram.style.left = "50%";
    alertFram.style.top = "50%";
    alertFram.style.marginLeft = "-140px";
    alertFram.style.marginTop = "-110px";
    alertFram.style.textAlign = "left";
    alertFram.style.lineHeight = "150px";
    alertFram.style.zIndex = "300";
    alertFram.style.borderRadius = "4px";
    return {shield: shield, alertFram: alertFram};
}