const buttonSi = document.getElementById('yes');
const buttonNo = document.getElementById('no');

const Lo_sabía = (event) => {
  event.preventDefault(); // Evita que la página se recargue al hacer clic
  alert('NOS ALEGRA QUE NOS PUEDAS ACOMPAÑAR😊 (ya sabe que está comprometido con Dios🫵)');
  alert('🤩a las 6:00pm te esperamos😎  !!! y TU APP XIMENA YA FUNCIONA😎');
  location.href = 'https://www.youtube.com/watch?v=QKD2Bb17ONA=1:54s';
};

const func_event = () => {
  buttonNo.style.position = 'absolute';
  buttonNo.style.top = (Math.random() * window.innerHeight) + 'px';
  buttonNo.style.left = (Math.random() * window.innerWidth) + 'px';
};

buttonSi.addEventListener('click', Lo_sabía);
buttonNo.addEventListener('mouseover', func_event);
