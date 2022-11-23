const title = document.getElementById('title');
const btnClose = document.getElementById('btnClose');
const btnPersonal = document.getElementById('btnPersonal');
const btnVehicular = document.getElementById('btnVehicular');
const vehicularScreen = document.getElementById('vehicular');
const buttons = document.getElementById('buttons');
const btnSaveVehicularExpenses = document.getElementById('btnSaveVehicularExpenses');
const personalExpenses = document.getElementById('personalExpenses');
const btnClosePersonalExpenses = document.getElementById('btnClosePersonalExpenses');
const btnSavePersonalExpenses = document.getElementById('btnSavePersonalExpenses');


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
btnSaveVehicularExpenses.onclick = ()=>{
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

//Save data on personal modal, require confirmation and reopen menu and page title
btnSavePersonalExpenses.onclick = ()=>{
     let resp = confirm("Tem certeza que deseja salvar a despesa informada?", resp);
     personalExpenses.classList.add('d-none');
     title.classList.remove('d-none');
     buttons.classList.remove('d-none');
}

//Save data on vehicular modal, require confirmation and reopen menu and page title
btnSaveVehicularExpenses.onclick = ()=>{
     var resp = confirm("Tem certeza que deseja salvar a despesa informada?", resp);
     vehicularScreen.classList.add('d-none');
     title.classList.remove('d-none');
     buttons.classList.remove('d-none');
}