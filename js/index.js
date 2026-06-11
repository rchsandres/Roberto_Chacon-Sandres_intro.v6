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

const messageForm = document.querySelector(`[name = "leave_message"]`);
messageForm.addEventListener("submit", function(event){
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);



    const messageSection = document.querySelector(`#messages`);
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");

    newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span>
  `;

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


fetch("https://api.github.com/users/rchsandres/repos")
.then(response => response.json())
.then(data => {
    const repositories = data;
    console.log(repositories);

    const projectSection = document.querySelector(`#Projects`);
    const projectList = projectSection.querySelector("ul");

for(let i = 0; i < repositories.length; i++){
    const project = document.createElement("li");
    project.innerText = repositories[i].name;
    projectList.appendChild(project);
}if (repositories.length === 0){
    const project = document.createElement("li");
    project.innerText = "No projects found";
    projectList.appendChild(project);
}
})

.catch(error => {

    console.error("Error:", error);
    const projectSection = document.querySelector(`#Projects`);
    const projectList = projectSection.querySelector("ul");
    const errorMessage = document.createElement("li");
    errorMessage.innerText = "Error fetching projects: " + error.message;
    projectList.appendChild(errorMessage);
});