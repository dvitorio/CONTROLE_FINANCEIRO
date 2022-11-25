//INICIALIZAÇÃO DAS VARIÁVEIS
const btnCloseVehicularScreen = document.getElementById('btnCloseVehicularScreen');
const confirmExpense = document.getElementById('confirmExpense');
const btnConfirmExpense = document.getElementById('btnConfirmExpense');
const btnCloseConfirmExpense = document.getElementById('btnCloseConfirmExpense');
const btnCancelExpenseVehicular = document.getElementById('btnCancelExpenseVehicular');
const btnSaveVehicularExpenses = document.getElementById('btnSaveVehicularExpenses');
const btnVehicular = document.getElementById('btnVehicular');
const buttons = document.getElementById('buttons');
const title = document.getElementById('title');
const vehicularScreen = document.getElementById('vehicular');


//OPEN MODAL VEHICULAR AND CLOSE MENU
btnVehicular.onclick = ()=>{
     title.classList.add('d-none');
     vehicularScreen.classList.remove('d-none');
     buttons.classList.add('d-none');
}

//CLOSE MODAL VEHICULAR AND OPEN MENU
btnCloseVehicularScreen.onclick = ()=>{
     title.classList.remove('d-none');
     vehicularScreen.classList.add('d-none');
     buttons.classList.remove('d-none');
}

//SAVE DATAS AND CLOSE MODAL VEHICULAR
btnSaveVehicularExpenses.onclick = ()=>{
     vehicularScreen.classList.add('d-none');
     buttons.classList.remove('d-none');
}

//SAVE DATA OND VEHICULAR MODAL, REQUIRE CONFIRMATION AND REOPEN MENU AND PAGE TITLE
btnSaveVehicularExpenses.onclick = ()=>{
     confirmExpense.classList.remove('d-none');
     vehicularScreen.classList.add('d-none');
     title.classList.add('d-none');
     buttons.classList.add('d-none');
}

//CLOSE MODAL CONFIRM EXPENSE VEHICULAR
btnConfirmExpense.onclick = ()=>{
     confirmExpense.classList.add('d-none');
     title.classList.remove('d-none');
     buttons.classList.remove('d-none');
}