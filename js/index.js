//INICIALIZAÇÃO DAS VARIÁVEIS
const btnCancelExpenseVehicular = document.getElementById('btnCancelExpenseVehicular');
const btnCloseConfirmExpense = document.getElementById('btnCloseConfirmExpense');
const btnCloseDebtForm = document.getElementById('btnCloseDebtForm');
const btnCloseSearchDebt = document.getElementById('btnCloseSearchDebt');
const btnCloseVehicularScreen = document.getElementById('btnCloseVehicularScreen');
const btnConfirmExpense = document.getElementById('btnConfirmExpense');
const btnConfirmSearch = document.getElementById('btnConfirmSearch');
const btnDebt = document.getElementById('btnDebt');
const btnPrintVehicularExpenses = document.getElementById('btnPrintVehicularExpenses');
const btnSaveVehicularExpenses = document.getElementById('btnSaveVehicularExpenses');
const btnSearchDebt = document.getElementById('btnSearchDebt');
const btnVehicular = document.getElementById('btnVehicular');
const buttons = document.getElementById('buttons');
const confirmExpense = document.getElementById('confirmExpense');
const confirmSearch = document.getElementById('confirmSearch');
const debtForm = document.getElementById('debtForm');
const debtSearch = document.getElementById('debtSearch');
const title = document.getElementById('title');
const vehicularScreen = document.getElementById('vehicular');

//OPEN FORM DEBT 
btnDebt.onclick = ()=>{
     debtForm.classList.remove('d-none');
     title.classList.add('d-none');
     buttons.classList.add('d-none');
}

//CLOSE FORM DEBT
btnCloseDebtForm.onclick = ()=>{
     debtForm.classList.add('d-none');
     title.classList.remove('d-none');
     buttons.classList.remove('d-none');
}

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

//PRINT DATAS FROM FORM EXPENSES
btnPrintVehicularExpenses.onclick = ()=>{
     vehicularScreen.print();
}

//OPEN SEARCH DEBT
btnSearchDebt.onclick = ()=>{
     debtSearch.classList.remove('d-none');
     title.classList.add('d-none');
     buttons.classList.add('d-none');
}

//CONFIRM AND CLOSE SEARCH DEBT
btnSearchDebt.onclick = ()=>{
     debtSearch.classList.add('d-none');
     confirmSearch.classList.remove('d-none');
     title.classList.add('d-none');
     buttons.classList.add('d-none');
}

//CLOSE MODAL CONFIRM EXPENSE VEHICULAR
btnConfirmExpense.onclick = ()=>{
     confirmExpense.classList.add('d-none');
     title.classList.remove('d-none');
     buttons.classList.remove('d-none');
}

//CLOSE MODAL CONFIRM SEARCH 
btnConfirmSearch.onclick = ()=>{
     confirmSearch.classList.add('d-none');
     title.classList.remove('d-none');
     buttons.classList.remove('d-none');
}