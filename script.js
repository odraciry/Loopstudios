const buttonOpen = document.getElementById("openMenu");
const buttonClose = document.getElementById('close');
buttonOpen.addEventListener('click', ()=>{
    document.getElementById('lista').style.zIndex = 2;
})

buttonClose.addEventListener('click', ()=>{
    document.getElementById('lista').style.zIndex = -1;
})



function openMenu(){
}