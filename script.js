
//const buttonSi = document.getElementById('yes');
//const buttonNo = document.getElementById('no');
//const listaNombres = document.getElementById('listaNombres');
//let nombresSi = [];

//const Lo_sabía = () => {//
  //const nombre = prompt("Por favor, ingresa tu nombre:");
  //if (nombre) {
    //nombresSi.push(nombre);
    //actualizarLista();
    //alert(`Hola, ${nombre}! NOS ALEGRA QUE NOS PUEDAS ACOMPAÑAR😊 (ya sabe que está comprometido con Dios🫵)`);
    //alert('🤩a las 6:00pm te esperamos😎 App de Ximena');
    //location.href = 'https://www.youtube.com/watch?v=QKD2Bb17ONA=1:54s';
  //} else {
   // alert("Por favor, ingresa un nombre válido.");
  //}
//};

//const actualizarLista = () => {
  //listaNombres.innerHTML = '';
  //nombresSi.forEach(nombre => {
   // const item = document.createElement('li');
    //item.textContent = nombre;
   // listaNombres.appendChild(item);
  //});
//};

//const App_xime = () => {
  buttonNo.style.position = 'absolute';
  buttonNo.style.top = (Math.random() * window.innerHeight) + 'px';
  buttonNo.style.left = (Math.random() * window.innerWidth) + 'px';
//};

//buttonSi.addEventListener('click', Lo_sabía);
//buttonNo.addEventListener('mouseover', App_xime);
const buttonSi = document.getElementById('yes');
const buttonNo = document.getElementById('no');
const inputNombre = document.getElementById('nombre');
const buttonRegistrar = document.getElementById('registrar');
const listaNombres = document.getElementById('listaNombres');
let nombresSi = [];

// Cargar los nombres guardados al iniciar la página
window.onload = () => {
  const nombresGuardados = localStorage.getItem('nombresSi');
  if (nombresGuardados) {
    nombresSi = JSON.parse(nombresGuardados);
    actualizarLista();
  }
};

const Lo_sabía = () => {
  const nombre = inputNombre.value.trim();
  if (nombre) {
    nombresSi.push(nombre);
    actualizarLista();
    guardarNombres();
    alert(`Hola, ${nombre}! NOS ALEGRA QUE NOS PUEDAS ACOMPAÑAR😊 (ya sabe que está comprometido con Dios🫵)`);
    alert('🤩a las 6:00pm te esperamos😎');
    location.href = 'https://www.youtube.com/watch?v=QKD2Bb17ONA=1:54s';
  } else {
    alert("Por favor, ingresa un nombre válido.");
  }
};

const actualizarLista = () => {
  listaNombres.innerHTML = '';
  nombresSi.forEach(nombre => {
    const item = document.createElement('li');
    item.textContent = nombre;
    listaNombres.appendChild(item);
  });
};

const guardarNombres = () => {
  localStorage.setItem('nombresSi', JSON.stringify(nombresSi));
};

const evitarQueRompaMiBobo = () => {
  buttonNo.style.position = 'absolute';
  buttonNo.style.top = (Math.random() * window.innerHeight) + 'px';
  buttonNo.style.left = (Math.random() * window.innerWidth) + 'px';
};

buttonSi.addEventListener('click', Lo_sabía);
buttonNo.addEventListener('mouseover', evitarQueRompaMiBobo);
buttonRegistrar.addEventListener('click', Lo_sabía);
