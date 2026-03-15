
// Typing Animation

const text = ["AI Developer","Machine Learning Engineer","Web Developer"];
let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=text[i];

if(isDeleting){
document.getElementById("typing").textContent=current.substring(0,j--);
}else{
document.getElementById("typing").textContent=current.substring(0,j++);
}

if(!isDeleting && j===current.length){
isDeleting=true;
setTimeout(type,1000);
return;
}

if(isDeleting && j===0){
isDeleting=false;
i=(i+1)%text.length;
}

setTimeout(type,100);
}

type();


// Theme Toggle

document.getElementById("theme-toggle").onclick=()=>{
document.body.classList.toggle("dark");
}


// GitHub API Projects

fetch("https://api.github.com/users/YOUR_GITHUB/repos")

.then(res=>res.json())

.then(data=>{

let container=document.getElementById("github-projects");

data.slice(0,6).forEach(repo=>{

let div=document.createElement("div");
div.className="project";

div.innerHTML=`

<h3>${repo.name}</h3>
<p>${repo.description || "No description"}</p>
<a href="${repo.html_url}" target="_blank">View</a>

`;

container.appendChild(div);

});

});


// Contact Form

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();
alert("Message sent successfully!");

});
