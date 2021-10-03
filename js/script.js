//global variable to select the div with a class of overview. this div is where your profile information will appear.
const profileElement = document.querySelector(".overview");
const username = "amirestes";

const githubProfile = async function () {
    const response = await fetch(
        `https://api.github.com/users/${username}`
    );
    const data = await response.json();
    userInfo(data);
    
};

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
};

githubProfile();