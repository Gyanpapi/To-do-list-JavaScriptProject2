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

        const myspan=document.createElement("span");
        myspan.innerHTML="\u00d7";
        li.appendChild(myspan);
    }

}
