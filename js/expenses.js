//INICIALIZAÇÃO DE VARIÁVEIS
const backGroundImage = document.getElementById('backGroundImage');
const backGroundTitle = document.getElementById('backGroundTitle');
const btnAmort = document.getElementById('btnAmort');
const btnCancel = document.getElementById('btnCancel');
const btnCancelDebt = document.getElementById('btnCancelDebt');
const btnCancelExpenseVehicular = document.getElementById('btnCancelExpenseVehicular');
const btnCloseConfirmExpenseSuccess = document.getElementById('btnCloseConfirmExpenseSuccess');
const btnCloseDebtForm = document.getElementById('btnCloseDebtForm');
const btnCloseSearchDebt = document.getElementById('btnCloseSearchDebt');
const btnCloseSubMenu = document.getElementById('btnCloseSubMenu');
const btnConfirmExpense = document.getElementById('btnConfirmExpense');
const btnPrintVehicularExpenses = document.getElementById('btnPrintVehicularExpenses');
const btnQuit = document.getElementById('btnQuit');
const btnRegisterDebt = document.getElementById('btnRegisterDebt');
const btnSaveDebtForm = document.getElementById('btnSaveDebtForm');
const btnSaveVehicularExpenses = document.getElementById('btnSaveVehicularExpenses');
const btnSearchCreditor = document.getElementById('btnSearchCreditor');
const btnSolveDebt = document.getElementById('btnSolveDebt');
const btnSubMenu = document.getElementById('btnSubMenu');
const btnVehicular = document.getElementById('btnVehicular');
const buttons = document.getElementById('buttons');
const confirmExpense = document.getElementById('confirmExpense');
const confirmExpenseSuccess = document.getElementById('confirmExpenseSuccess');
const creditorName = document.getElementById('creditorName');
const debtRegister = document.getElementById('debtRegister');
const debtSearch = document.getElementById('debtSearch');
const resultDebt = document.getElementById('resultDebt');
const selectOptions = document.getElementById('selectOptions');
const solveDebt = document.getElementById('solveDebt');
const statusDebt = document.getElementById('statusDebt');
const subMenu = document.getElementById('subMenu');
const vehicularScreen = document.getElementById('vehicular');
const btnCloseApp = document.getElementById('btnCloseApp');


//CLOSE APP
btnCloseApp.onclick = ()=>{
     window.close();
}

//OPEN SUBMENU DEBT
btnSubMenu.onclick = ()=>{
     subMenu.classList.remove('d-none');
     backGroundImage.classList.add('d-none');
     backGroundTitle.classList.add('d-none');
}

//OPEN MODAL SEARCH CREDITOR
btnSearchCreditor.onclick = ()=>{
     subMenu.classList.add('d-none');
     debtSearch.classList.remove('d-none');
}

//CLOSE MODAL SEARCH CREDITOR
btnCloseSearchDebt.onclick = ()=>{
     subMenu.classList.remove('d-none');
     debtSearch.classList.add('d-none');
}

//CLOSE SUBMENU DEBT
btnCloseSubMenu.onclick = ()=>{
     subMenu.classList.add('d-none');
     backGroundImage.classList.remove('d-none');
     backGroundTitle.classList.remove('d-none');
}

//OPEN MODAL DEBT REGISTER
btnRegisterDebt.onclick = ()=>{
     subMenu.classList.add('d-none');
     debtRegister.classList.remove('d-none');
     backGroundImage.classList.add('d-none');
     backGroundTitle.classList.add('d-none');
}


//SAVE DEBT REGISTER AND CLOSE MODAL
btnSaveDebtForm.onclick = ()=>{
     debtRegister.classList.add('d-none');
     confirmExpense.classList.remove('d-none');
     btnConfirmExpense.onclick = ()=>{
          confirmExpenseSuccess.classList.remove('d-none');
          confirmExpense.classList.add('d-none');
          backGroundImage.classList.add('d-none');
          backGroundTitle.classList.add('d-none');
     }
     btnCloseConfirmExpenseSuccess.onclick = ()=>{
          backGroundImage.classList.remove('d-none');
          backGroundTitle.classList.remove('d-none');
          confirmExpenseSuccess.classList.add('d-none');
     }
}

//CLOSE MODAL DEBT REGISTER
btnCloseDebtForm.onclick = ()=>{
     debtRegister.classList.add('d-none');
     backGroundImage.classList.remove('d-none');
     backGroundTitle.classList.remove('d-none');
}

//CALCULATE AND SOLVE DEBT IN DEBT FORM
btnAmort.onclick = ()=>{
     let balanceValue = parseFloat(document.getElementById('balanceValue').value.replace(',','.'));
     let parcValueBalance = parseFloat(document.getElementById('parcValueBalance').value.replace(',','.'));
     let resultAmort = parseFloat(document.getElementById('resultAmort').value);
          if(balanceValue > parcValueBalance){
               resultAmort = balanceValue - parcValueBalance;
               resultDebt.classList.remove('d-none');
               document.getElementById('resultAmort').value = resultAmort.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
          }
          else{
               alert('Valor da parcela não pode ser maior que o valor da dívida!');
          }
}

//CLOSE SOLVE DEBT FORM
btnCancelDebt.onclick = ()=>{
     solveDebt.classList.add('d-none');
     backGroundImage.classList.remove('d-none');
     backGroundTitle.classList.remove('d-none');
}



/**========================MÓDULO DESPESAS VEICULARES ============================== */

//OPEN MODAL VEHICULAR AND CLOSE MENU
btnVehicular.onclick = ()=>{
     backGroundTitle.classList.add('d-none');
     backGroundImage.classList.add('d-none');
     vehicularScreen.classList.remove('d-none');
     buttons.classList.add('d-none');
}

//CLOSE MODAL VEHICULAR AND OPEN MENU
btnCancel.onclick = ()=>{
     backGroundTitle.classList.remove('d-none');
     backGroundImage.classList.remove('d-none');
     vehicularScreen.classList.add('d-none');
     buttons.classList.remove('d-none');
}

//SAVE DATAS AND CLOSE MODAL VEHICULAR
btnSaveVehicularExpenses.onclick = ()=>{
     vehicularScreen.classList.add('d-none');
     buttons.classList.remove('d-none');
     backGroundImage.classList.remove('d-none');
     backGroundTitle.classList.remove('d-none');
}

//SAVE DATA OND VEHICULAR MODAL, REQUIRE CONFIRMATION AND REOPEN MENU AND PAGE TITLE
btnSaveVehicularExpenses.onclick = ()=>{
     confirmExpense.classList.remove('d-none');
     vehicularScreen.classList.add('d-none');
     backGroundTitle.classList.add('d-none');
     buttons.classList.add('d-none');
}

//CLOSE MODAL CONFIRM EXPENSE VEHICULAR
btnConfirmExpense.onclick = ()=>{
     confirmExpense.classList.add('d-none');
     backGroundTitle.classList.remove('d-none');
     backGroundImage.classList.remove('d-none');
     buttons.classList.remove('d-none');
}

//PRINT DATAS FROM FORM EXPENSES
btnPrintVehicularExpenses.onclick = ()=>{
     vehicularScreen.print();
}






 





