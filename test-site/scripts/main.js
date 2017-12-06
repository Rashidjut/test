/* main.js*/
var myImg=document.querySelector("img");
   myImg.onclick=function(){
   var myImgSrc=myImg.getAttribute('src');
   if(myImgSrc==="images/firefox-256.png"){
   	myImg.setAttribute ('src',"images/beautiful-homes.jpg");
  
   }
   else{
   	myImg.setAttribute('src','images/firefox-256.png');
       }
    }
var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName(){
	var name= prompt('Enter The Name:');
	localStorage.setItem('name',name);
    myHeading.textContent="Mozilla is cool, "+name;
}
if(!localStorage.getItem("name")){
	setUserName();
}
else{
	var storeName=localStorage.getItem("name");
	myHeading.textContent="Mozilla is cool. "+storeName;
}
myButton.onclick=function(){
	setUserName();
}