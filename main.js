/* Open a new window to display the following document links when clicked on the DOCUMENT tab in the Navigation bar*/

let mydoc = document.getElementById("myDoc");
mydoc.onclick = () =>{
window.location.replace("https://desmond-zeh.github.io/document.github.io","_blank");
};
 let myhom = document.getElementById("home");
myhom.onclick = () =>{
window.location.replace("https://desmond-zeh.github.io/Zeh-home.github.io/", "_blank");
};

let mydown = document.getElementById("down");
mydown.onclick = () =>{
window.location.replace("");
};
 let myabout = document.getElementById("about");
myabout.onclick = () =>{
window.location.replace("");
};

let myproject = document.getElementById("project");
myproject.onclick = () =>{
window.location.replace("");
};
