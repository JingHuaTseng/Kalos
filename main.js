/*
document.querySelector("html").onclick = function () {
  alert("Ouch! Stop poking me!");
};
*/
//建立圖片點擊事件
var myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/meme.png") {
    myImage.setAttribute("src", "images/meme2.png");
  } else {
    myImage.setAttribute("src", "images/meme.png");
  }
};
//建立button
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

//輸入User 名稱並隨User調整標題名稱
function setUserName() {
  let myName = prompt('Please enter your name.');
if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Meme is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Meme is cool, " + storedName;
}

//讓每次跳出視窗或是重新整理都要求重新登入
setUserName();
myButton.onclick = function () {
  setUserName();
};
