const listcontainer =document.getElementById("list-container");
const inputBox=document.getElementById("input-box");

console.log(inputBox.value);
function addItem()
{
    if(inputBox.value==='')
    {
        alert("please write something");
    }
    else{

        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);
        inputBox.value='';
        saveData();
        const myspan=document.createElement("span");
        myspan.innerHTML="\u00d7";
        li.appendChild(myspan);
        saveData();
    }

}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
})


function saveData()
{
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showtask()
{
    listcontainer.innerHTML=localStorage.getItem("data");
}

showtask();