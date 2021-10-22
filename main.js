//mudar os links das redes sociais
//Utilizando JavaScript
//Objetos e funções

const LinksSocialMedia  = {
    github: "Khaledy30",
    youtube: "UClZoMB_17GBAVXy6HI4Wqbg",
    facebook: "Khaledy.aurelio",
    instagram: "khaledy_camargo",
    twitter: "AurelioKhaledy"
}

changeSocialMediaLinks = () => {
    //variavel de escopo
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class');

        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
        
        //alert(li.children[0].href)
    }
}

//ser humano 123456789
//computador 0123456789
changeSocialMediaLinks();

getGitHubProfileInfos = () => {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

    fetch(url)
    //response nome da variavel
    //transformou em json
    .then(response => response.json())
    //armazena a resposta em json
    .then(data => {
        //substrituir oque está no id="userName"
        userName.textContent = data.name,
        userBio.textContent = data.bio,
        userLink.href = data.html_url,
        userLogin.textContent = data.login
        //userImage.src = data.avatar_url 

    })

}

getGitHubProfileInfos();



