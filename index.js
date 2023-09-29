const notes_container=document.querySelector(".notes_container");
const add_button=document.querySelector(".add_button");
let notes=document.querySelectorAll(".input_box");
(function(){
    notes_container.innerHTML=localStorage.getItem("Notes");
})();
add_button.addEventListener("click",()=>{
    let input_box=document.createElement("p");
    let img=document.createElement("img");
    input_box.classList.add("input_box");
    input_box.setAttribute("contenteditable","true");
    img.src="./images/delete.png";
    // span.innerHTML=Date();
    notes_container.appendChild(input_box).appendChild(img);
    // input_box.appendChild(date);
    // span.insertAdjacentElement(span);
});
notes_container.addEventListener("click",(e)=>{
    if(e.target.tagName=="IMG"){
        e.target.parentElement.remove();
        updateStorage();
        }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input_box");
        notes.forEach(nt => {
            nt.onkeyup=function(){
                // let date=document.createElement("p");
                // date.classList.add("date");
                // date.setAttribute("contenteditable","true");
                // e.target.appendChild(date);
                // const datee=new Date();
                // date.innerText=`${datee.getDate()}-${datee.getMonth()+1}-${datee.getFullYear()}`;
                updateStorage();
            }
        })
    }
})
function updateStorage(){
    localStorage.setItem("Notes",notes_container.innerHTML);
    // localStorage.setItem("notes_date",document.querySelectorAll(".date").innerHTML);
}
function onLoad(){
    notes=document.querySelectorAll(".input_box");
    notes.forEach(nt=>{
        // console.log(nt.innerHTML);
        if(nt.innerHTML=='<img src="./images/delete.png">')
        nt.remove();
    })
    updateStorage();
}
// onLoad();
// localStorage.clear();

window.onLoad(onLoad());