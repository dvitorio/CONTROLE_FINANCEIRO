//INICIALIZAÇÃO DAS VARIÁVEIS GLOBAIS
const btnCloseApp = document.getElementById('btnCloseApp');
const btnCloseDebtForm = document.querySelector('#btnCloseDebtForm');
const btnCloseSearchDebt = document.querySelector('#btnCloseSearchDebt');
const btnPayDebt = document.querySelector('#btnPayDebt');
const btnPersonalExpenses = document.querySelector('#btnPersonalExpenses');
const btnRegisterDebt = document.querySelector('#btnRegisterDebt');
const btnSaveDebtForm = document.getElementById('btnSaveDebtForm');
const btnSearchDebt = document.querySelector('#btnSearchDebt');
const buttons = document.querySelector('#buttons'); 
const debtRegister = document.getElementById('debtRegister');
const debtSearch = document.querySelector('#debtSearch');
const title = document.querySelector('.title'); 


//Inicializa o array de objetos de dívidas
var db_register_debt = [];



//Fecha aplicativo
btnCloseApp.onclick = ()=> window.close();

//Mostra botões do submenu de despesas pessoais
btnPersonalExpenses.addEventListener('click', ()=>{
     btnRegisterDebt.classList.toggle('d-none');
     btnPayDebt.classList.toggle('d-none');
     btnSearchDebt.classList.toggle('d-none');
});

//Abre modal de registro de dívida
btnRegisterDebt.addEventListener('click', ()=>{
     debtRegister.classList.remove('d-none');
     buttons.classList.add('d-none');
});

//Cadastra uma dívida
btnSaveDebtForm.addEventListener('click', ()=>{
     var debt = {
          creditorName: document.querySelector('#creditorName').value,
          valueDebt: document.querySelector('#valueDebt').value,
          dataDebt: document.querySelector('#dataDebt').value,
          numeroParcelas: document.querySelector('#numeroParcelas').value
     }
     db_register_debt.push(debt);

     creditorName.value = '';
     valueDebt.value = '';
     dataDebt.value = '';
     numeroParcelas.value = '';

     console.log(db_register_debt);
});

//Fecha modal de cadastro de dívida
btnCloseDebtForm.addEventListener('click', ()=>{
     debtRegister.classList.add('d-none');
     buttons.classList.remove('d-none');
});


//Abre modal de busca de credor
btnSearchDebt.addEventListener('click', ()=>{
     title.classList.add('d-none');
     buttons.classList.add('d-none');
     debtSearch.classList.remove('d-none');
});

//Fecha modal de busca de credor
btnCloseSearchDebt.addEventListener('click', ()=>{
     title.classList.remove('d-none');
     buttons.classList.remove('d-none');
     debtSearch.classList.add('d-none');
});


