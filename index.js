const notes_container=document.querySelector(".notes_container");
const add_button=document.querySelector(".add_button");
let notes=document.querySelectorAll(".input_box");
(function(){
    notes_container.innerHTML=localStorage.getItem("Notes");
})();
add_button.addEventListener("click",()=>{
    let input_box=document.createElement("p");
    // let date_time=document.createElement("p");
    input_box.innerHTML="Click her to start typing....///...Notes will be saved automatically.";
    input_box.classList.add("before_click");
    let img=document.createElement("img");
    // date_time.classList.add("date");
    input_box.classList.add("input_box");
    input_box.setAttribute("contenteditable","true");
    img.src="./images/delete.png";
    // span.innerHTML=Date();
    notes_container.appendChild(input_box).appendChild(img);
    // input_box.appendChild(date_time);
    // const date_data=new Date();
    // date_time.innerHTML=data.getHours()+":"+data.getMinutes();
    // span.insertAdjacentElement(span);
});
notes_container.addEventListener("click",(e)=>{
    if(e.target.tagName=="IMG"){
        e.target.parentElement.remove();
        updateStorage();
        }
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input_box");
        e.target.classList.remove("before_click");
        e.target.innerHTML=`<img src="./images/delete.png">`;
        notes.forEach(nt => {
            nt.onkeyup=function(){
                // nt.querySelector(".date").innerHTML=daTe();
                // if(nt.innerHTML!=`<img src="./images/delete.png">`){
                //     nt.classList.add("before_click");
                //     nt.innerHTML=`Click her to start typing....///...Notes will be saved automatically.<img src="./images/delete.png">`;
                // }
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
        if(nt.innerHTML=='Click her to start typing....///...Notes will be saved automatically.<img src="./images/delete.png">' || nt.innerHTML==`<img src="./images/delete.png">`)
        nt.remove();
        // console.log(nt.innerHTML);
    })
    updateStorage();
}
// onLoad();
// localStorage.clear();
let clear_button=document.querySelector("#clearAll");
clear_button.addEventListener("click",(e)=>{
    notes=document.querySelectorAll(".input_box");
    notes.forEach(nt=>{
        nt.remove();
        updateStorage();
    })
})

// function daTe(){
//     let data=new Date();
//     return(data.getHours()+":"+data.getMinutes());
// }
// daTe();

window.onLoad(onLoad());