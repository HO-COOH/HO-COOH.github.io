/*TODO:
1. Blogging database
2. Github statistic
*/
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

window.onload=function(){
welcome();
};