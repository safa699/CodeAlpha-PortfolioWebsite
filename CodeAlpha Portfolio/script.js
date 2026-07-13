// =========================
// DARK / LIGHT MODE
// =========================

const themeBtn = document.querySelector(".theme-btn");

themeBtn.onclick = () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    else{

        themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

};

// =========================
// ACTIVE NAVBAR
// =========================

let sections=document.querySelectorAll("section");
let navLinks=document.querySelectorAll("header nav a");

window.onscroll=()=>{

sections.forEach(sec=>{

let top=window.scrollY;

let offset=sec.offsetTop-150;

let height=sec.offsetHeight;

let id=sec.getAttribute("id");

if(top>=offset && top<offset+height){

navLinks.forEach(links=>{

links.classList.remove("active");

document.querySelector("header nav a[href*="+id+"]").classList.add("active");

});

}

});

};

// =========================
// TYPING EFFECT
// =========================

const words=[
"Frontend Developer",
"Web Designer",
"BS Computer Science Student",
"CodeAlpha Intern"
];

let wordIndex=0;
let charIndex=0;

const heading=document.querySelector(".hero h2");

function typeEffect(){

if(charIndex<words[wordIndex].length){

heading.textContent+=words[wordIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,120);

}

else{

setTimeout(eraseEffect,1800);

}

}

function eraseEffect(){

if(charIndex>0){

heading.textContent=words[wordIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseEffect,60);

}

else{

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

setTimeout(typeEffect,300);

}

}

window.onload=()=>{

heading.textContent="";

typeEffect();

};

// =========================
// SCROLL REVEAL
// =========================

const revealElements=document.querySelectorAll(
".hero,.about-container,.skill-card,.project-card,form"
);

window.addEventListener("scroll",()=>{

revealElements.forEach(element=>{

const windowHeight=window.innerHeight;

const revealTop=element.getBoundingClientRect().top;

const revealPoint=120;

if(revealTop<windowHeight-revealPoint){

element.classList.add("show");

}

});

});

// =========================
// BACK TO TOP BUTTON
// =========================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};