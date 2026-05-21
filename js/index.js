const body = document.getElementsByTagName("body")[0];
const footer = document.createElement("footer");

body.appendChild(footer);

const today = new Date();
let thisYear = today.getFullYear();

const foot = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = `Roberto Chacon-Sandre ${thisYear}`;

footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "Github"];

const skillSection = document.querySelector(`#skills`);
const skillsList = skillSection.querySelector("ul");

for(let i =0; i<skills.length; i++){
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}