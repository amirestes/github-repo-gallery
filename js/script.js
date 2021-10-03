//global variable to select the div with a class of overview. this div is where your profile information will appear.
const profileElement = document.querySelector(".overview");
const username = "amirestes";
const repoList = document.querySelector(".repo-list");

const githubProfile = async function () {
    const response = await fetch(
        `https://api.github.com/users/${username}`
    );
    const data = await response.json();
    userInfo(data);
    
};

githubProfile();

//function to display fetched user information

const userInfo = function (data) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = 
    `<figure>
        <img alt="user avatar" src=${data.avatar_url}/>
    </figure>
    <div>
        <p><strong>Name:</strong> ${data.name} </p>
        <p><strong>Bio:</strong> ${data.bio} </p>
        <p><strong>Number of public repos:</strong> ${data.public_repos} </p>
    </div>`;

    profileElement.append(div);
    getRepos();
};



const getRepos = async function () {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    const repoData = await res.json();
    repoInfo(repoData);
};

//display info about your repos

const repoInfo = function (repos) {
    for (const repo of repos) {
        const li = document.createElement("li");
        li.classList.add("repo");
        li.innerHTML = `<h3>${repo.name}</h3>`;
        repoList.append(li);
    };
};