const dataInput = document.getElementById('dataInput');
const cover = document.getElementById('cover');
const btnVehicleButton = document.getElementById('btnVehicleButton');
const btnCloseDataInput = document.getElementById('btnCloseDataInput');

btnVehicleButton.onclick =()=>{
     cover.classList.add('d-none');
     dataInput.classList.remove('d-none');
}

btnCloseDataInput.onclick =()=>{
     cover.classList.remove('d-none');
     dataInput.classList.add('d-none');
}