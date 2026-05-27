const body = document.getElementsByTagName("body")[0];
const footer = document.createElement("footer");

body.appendChild(footer);

const today = new Date();
let thisYear = today.getFullYear();

const copyright = document.createElement("p");

copyright.innerHTML = `&copy; Roberto Chacon-Sandres ${thisYear}`;

footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "Github"];

const skillSection = document.querySelector(`#skills`);
const skillsList = skillSection.querySelector("ul");

for(let i =0; i<skills.length; i++){
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.querySelector(`["leave_message"]`);
messageForm.addEventListener("submit", function(event){
    event.preventDefault();

    const userName = event.target.userName.value;
    const userEmail = event.target.userEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(userName, userEmail, usersMessage);

    newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span>
  `;

    const messageSection = document.querySelector(`#messages`);
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function(){
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});


