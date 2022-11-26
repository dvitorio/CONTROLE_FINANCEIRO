//INICIALIZAÇÃO DAS VARIÁVEIS
const backGroundImage = document.getElementById('backGroundImage');
const backGroundTitle = document.getElementById('backGroundTitle');
const btnCloseConfirmExpense = document.getElementById('btnCloseConfirmExpense');
const btnCloseDebtForm = document.getElementById('btnCloseDebtForm');
const btnCloseSearchDebt = document.getElementById('btnCloseSearchDebt');
const btnConfirmSearch = document.getElementById('btnConfirmSearch');
const btnDebt = document.getElementById('btnDebt');
const btnSearchDebt = document.getElementById('btnSearchDebt');
const buttons = document.getElementById('buttons');
const confirmExpense = document.getElementById('confirmExpense');
const confirmSearch = document.getElementById('confirmSearch');
const debtQuit = document.getElementById('debtQuit');
const debtSearch = document.getElementById('debtSearch');


//OPEN FORM DEBT 
btnDebt.onclick = ()=>{
     backGroundTitle.classList.add('d-none');
     debtQuit.classList.remove('d-none');
}


//CLOSE FORM DEBT
btnCloseDebtForm.onclick = ()=>{
     debtQuit.classList.add('d-none');
     backGroundTitle.classList.remove('d-none');
     buttons.classList.remove('d-none');
}

//OPEN SEARCH DEBT
btnSearchDebt.onclick = ()=>{
     debtSearch.classList.remove('d-none');
     backGroundTitle.classList.add('d-none');
     buttons.classList.add('d-none');
}

//CONFIRM AND CLOSE SEARCH DEBT
btnSearchDebt.onclick = ()=>{
     debtSearch.classList.add('d-none');
     confirmSearch.classList.remove('d-none');
     backGroundTitle.classList.add('d-none');
     buttons.classList.add('d-none');
}

//CLOSE MODAL CONFIRM SEARCH 
btnConfirmSearch.onclick = ()=>{
     confirmSearch.classList.add('d-none');
     backGroundTitle.classList.remove('d-none');
     buttons.classList.remove('d-none');
}