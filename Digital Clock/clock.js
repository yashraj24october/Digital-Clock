let darkModeOn =false;

let hourValue=document.getElementById("hourValue")
let minuteValue=document.getElementById("minuteValue")
let secondValue=document.getElementById("secondValue")

let clockBox=document.getElementById("clockBox")
let heading=document.getElementById("heading")
let body=document.body;
let time=document.getElementById("time");
let timeBox=document.getElementsByClassName("timeBox")
let text=document.getElementsByClassName("text");
let button=document.getElementById("themeSwitcher");
let footer=document.getElementsByTagName("footer")
let profileLink=document.getElementById("profileLink")
button.addEventListener("click",()=>{
if(darkModeOn==false){
darkModeOn=true;
dark();
}
else{
darkModeOn=false;
Light();
}
})

function dark(){
body.style.background="url(black.jpg)"
body.style.backgroundSize="cover";
body.style.backgroundRepeat="no-repeat";
button.innerText="Switch to Light Theme";
clockBox.style.background="url(night.jpg)";
clockBox.style.backgroundSize="cover";
clockBox.style.backgroundRepeat="no-repeat";
clockBox.style.border="7px solid skyblue";
clockBox.style.boxShadow="6px 6px 2px black, -6px -6px 2px black";
heading.style.background="linear-gradient(to bottom,white,yellow)"
heading.style.webkitBackgroundClip="text";
heading.style.webkitTextFillColor="transparent";
for(let i=0;i<3;i++){
text[i].style.textShadow="2px 2px 6px white,-2px -2px 6px white";
}
time.style.textShadow="2px 2px 5px white"
for(let i=0;i<3;i++)
{
timeBox[i].style.textShadow="2px 2px 5px black"
}

if(window.innerWidth<=480){
footer[0].style.color="black";
profileLink.style.color="blue";
}
else{
footer[0].style.color="white";
profileLink.style.color="yellow";
}
}

function Light(){
body.style.background="url(webimage.jpg)"
body.style.backgroundSize="cover";
body.style.backgroundRepeat="no-repeat";
button.innerText="Switch to Dark Theme";
clockBox.style.background="url(day.jpg)";
clockBox.style.backgroundSize="cover";
clockBox.style.backgroundRepeat="no-repeat";
clockBox.style.border="7px solid white";
clockBox.style.outline="2px solid skyblue";
clockBox.style.boxShadow="6px 6px 2px pink, -6px -6px 2px pink";
heading.style.background="linear-gradient(to bottom,blue,black)"
heading.style.webkitBackgroundClip="text";
heading.style.webkitTextFillColor="transparent";
for(let i=0;i<3;i++){
text[i].style.textShadow="2px 2px 6px yellow,-2px -2px 6px yellow";
}
time.style.textShadow="2px 2px 5px black";
for(let i=0;i<3;i++)
{
timeBox[i].style.textShadow="2px 2px 5px black"
}
footer[0].style.color="black";
profileLink.style.color="blue";
}

function displayTime(){
setInterval(()=>{
let date=new Date();
let currentHr=date.getHours();
if(currentHr>12){
let x=currentHr-12;
hourValue.innerHTML=x;
time.innerHTML="PM";
}
else{
hourValue.innerHTML=currentHr;
time.innerHTML="AM";
}
minuteValue.innerHTML=date.getMinutes();
secondValue.innerHTML=date.getSeconds();
},1000);

}

window.addEventListener("load",()=>{
displayTime();
})

