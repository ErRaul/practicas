//Ejercicio1
const numeroAle = (numMax) => {
    return Math.round(Math.random() * numMax);
  };
  
  let resul = numeroAle(99999);
  document.write(`El número es: ` +(resul));

//Ejercicio2
  const numeroLot = (numMax1) => {
    return Math.round(Math.random() * numMax1);
};

const premiosLot = [];
for (let i = 0; i < 10; i++) {
    premiosLot.push(numeroLot(99999));
}

premiosLot.forEach((premio, index) => {
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', 'alert-primary');
    alertElement.textContent = `Premio ${index}: ${premio}`;
    document.body.appendChild(alertElement);
});
  