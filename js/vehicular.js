const btnCancelExpenseVehicular = document.getElementById('btnCancelExpenseVehicular');
const btnConfirmExpense = document.getElementById('btnConfirmExpense');
const btnPrintVehicularExpenses = document.getElementById('btnPrintVehicularExpenses');
const btnSaveVehicularExpenses = document.getElementById('btnSaveVehicularExpenses');
const btnVehicular = document.getElementById('btnVehicular');
const buttons = document.getElementById('buttons');
const selectOptions = document.getElementById('selectOptions');
const title = document.getElementById('title');
const vehicularScreen = document.getElementById('vehicular');
const btnCancel = document.getElementById('btnCancel');


//OPEN MODAL VEHICULAR AND CLOSE MENU
btnVehicular.onclick = ()=>{
     title.classList.add('d-none');
     vehicularScreen.classList.remove('d-none');
     buttons.classList.add('d-none');
}

//CLOSE MODAL VEHICULAR AND OPEN MENU
btnCancel.onclick = ()=>{
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
     let valueVehicular = document.getElementById('valueVehicular');
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

//PRINT DATAS FROM FORM EXPENSES
btnPrintVehicularExpenses.onclick = ()=>{
     vehicularScreen.print();
}

