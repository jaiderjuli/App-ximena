const buttonSi = document.getElementById('yes');
    const buttonNo = document.getElementById('no');
    let nombresSi = [];

    const Lo_sabía = () => {
      const nombre = prompt("Por favor, ingresa tu nombre:");
      if (nombre) {
        nombresSi.push(nombre);
        alert(`Hola, ${nombre}! NOS ALEGRA QUE NOS PUEDAS ACOMPAÑAR😊 (ya sabe que está comprometido con Dios🫵)`);
        alert('🤩a las 6:00pm te esperamos😎 App de Ximena');
      } else {
        alert("Por favor, ingresa un nombre válido.");
      }
    };

    const App_xime = () => {
      buttonNo.style.position = 'absolute';
      buttonNo.style.top = (Math.random() * window.innerHeight) + 'px';
      buttonNo.style.left = (Math.random() * window.innerWidth) + 'px';
    };

    buttonSi.addEventListener('click', Lo_sabía);
    buttonNo.addEventListener('mouseover', App_xime);


