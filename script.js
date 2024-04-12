
const listaNombres = document.getElementById('listaNombres');
let nombresSi = [];

const Lo_sabía = () => {
  const nombre = prompt("Por favor, ingresa tu nombre:");
  if (nombre) {
    nombresSi.push(nombre);
    actualizarLista();
    alert(`Hola, ${nombre}! NOS ALEGRA QUE NOS PUEDAS ACOMPAÑAR😊 (ya sabe que está comprometido con Dios🫵)`);
    alert('🤩a las 6:00pm te esperamos😎 app-ximena');
    location.href = 'https://www.youtube.com/watch?v=QKD2Bb17ONA=1:54s';
  } else {
    alert("Por favor, ingresa un nombre válido.");
  }
};



const app_xime = () => {
  buttonNo.style.position = 'absolute';
  buttonNo.style.top = (Math.random() * window.innerHeight) + 'px';
  buttonNo.style.left = (Math.random() * window.innerWidth) + 'px';
};

buttonSi.addEventListener('click', Lo_sabía);
buttonNo.addEventListener('mouseover', app_xime);


