const title = document.getElementById('title');
const btnClose = document.getElementById('btnClose');
const btnPersonal = document.getElementById('btnPersonal');
const btnVehicular = document.getElementById('btnVehicular');
const vehicularScreen = document.getElementById('vehicular');
const buttons = document.getElementById('buttons');
const btnSave = document.getElementById('btnSave');
const personalExpenses = document.getElementById('personalExpenses');
const btnClosePersonalExpenses = document.getElementById('btnClosePersonalExpenses');

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

//Open modal personal expenses and close menu
btnPersonal.onclick = ()=>{
     personalExpenses.classList.remove('d-none');
     title.classList.add('d-none');
     buttons.classList.add('d-none');
}

//Close modal personal expenses and open menu
btnClosePersonalExpenses.onclick = ()=>{
     personalExpenses.classList.add('d-none');
     title.classList.remove('d-none');
     buttons.classList.remove('d-none');
}