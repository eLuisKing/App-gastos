const btnReload = document.getElementById('btn-reload');
const btnIngresos = document.getElementById('btn-ingresos')
const btnGastos = document.getElementById('btn-gastos')

const cIngresos = document.getElementById('ingresos')
const cGastos = document.getElementById('gastos')


// mensaje para usuario
function mensajeUs(){
    alert('No monitoreamos tus datos, todo se almacena en tu navegador.')
}

function btnsInga(){
    btnIngresos.classList.toggle('bg-green-500')
    btnGastos.classList.toggle('bg-red-600')
    cIngresos.classList.toggle('hidden')
    cGastos.classList.toggle('hidden')
}

// Reload pague
btnReload.addEventListener('click', function(){
    window.location.reload(true);
})

// funcionalidad botones INGA
btnIngresos.addEventListener('click', function(){
    btnsInga()
})
btnGastos.addEventListener('click', function(){
    btnsInga()
})


// escucha cuando la pag carge y lanza el mensaje
// window.addEventListener('load', mensajeUs);