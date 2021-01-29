/*TODO:
1. Blogging database
2. Github statistic
*/
import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

function welcome()
{
    const hour=new Date().getHours();
    var welcome_message=document.getElementById("welcome_message").innerText

    console.log(welcome_message);
    if(hour<=12)
        welcome_message="Good Morning!"+welcome_message;
    else if(hour<=18)
        welcome_message="Good Afternoon!"+welcome_message;
    else
        welcome_message="Good evening!"+welcome_message;
    console.log(hour);
    console.log(welcome_message)
    document.getElementById("welcome_message").innerText=welcome_message;
}

async function GetRepo() 
{
    const octokit = new Octokit({auth: `1912ef960016b679b03808a009c24cf87214a218`});
    const response = await octokit.request("GET /user/repos",
    {
        visibility: "public"
    });
    return response;
}

window.onload = function ()
{
    welcome();
    GetRepo().then(function (response) 
    {
        response.data.sort((a, b) => -(a.stargazers_count - b.stargazers_count))
        console.log(response)
        let project = document.getElementById("project-listing")
        for (let i = 0; i < response.data.length; ++i)
        {
            let item = document.createElement("li")
            let link = document.createElement("a")
            let description=document.createElement("p")
            link.setAttribute("href", response.data[i].html_url)
            link.textContent = `${response.data[i].name} -> ${response.data[i].stargazers_count} 🌟`
            description.textContent = response.data[i].description;
            
            item.appendChild(link)
            item.appendChild(description)
            project.appendChild(item)
        }
    });
};