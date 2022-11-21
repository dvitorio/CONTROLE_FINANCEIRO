const title = document.getElementById('title');
const btnClose = document.getElementById('btnClose');
const btnPersonal = document.getElementById('btnPersonal');
const btnVehicular = document.getElementById('btnVehicular');
const vehicularScreen = document.getElementById('vehicular');
const buttons = document.getElementById('buttons');
const btnSave = document.getElementById('btnSave');

//Open modal vehicular and close menu
btnVehicular.onclick = ()=>{
     title.classList.add('d-none');
     vehicularScreen.classList.remove('d-none');
     buttons.classList.add('d-none');
}

//Close modal vehicular and open menu
btnClose.onclick = ()=>{
     title.classList.remove('d-none');
     vehicularScreen.classList.add('d-none');
     buttons.classList.remove('d-none');
}

//Save datas and close modal vehicular 
btnSave.onclick = ()=>{
     vehicularScreen.classList.add('d-none');
     buttons.classList.remove('d-none');
}