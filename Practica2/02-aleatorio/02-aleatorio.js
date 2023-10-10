//Ejercicio3
class Coche {
    constructor(marca, modelo, precio, año, url) {
      this.marca = marca;
      this.modelo = modelo;
      this.precio = precio;
      this.año = año;
      this.url = url;
    }
  }
  
  const coche1 = new Coche("Nissan", "GTR35", 100000, 2022, "img/nissan_gtr35.jpg");
  const coche2 = new Coche("Honda", "Civic", 23000, 2022, "img/honda_civic.jpg");
  const coche3 = new Coche("Ford", "Mustang", 50000, 2021, "img/ford_mustang.jpg");
  const coche4 = new Coche("Seat", "FR", 48000, 2021, "img/seat_fr.jpg");
  const coche5 = new Coche("Peugeot", "508", 22000, 2023, "img/peugeot_508.jpg");
  
  const listaCoches = [coche1, coche2, coche3, coche4, coche5];
  
  listaCoches.forEach((coche, index) => {
    console.log(`Coche ${index + 1}: `);
    //document.write(`Coche ${index + 1}: `);
    console.log(`Marca: ${coche.marca} `);
    //document.write(`Marca: ${coche.marca} `);
    console.log(`Modelo: ${coche.modelo} `);
    //document.write(`Modelo: ${coche.modelo} `);
    console.log(`Precio: ${coche.precio} `);
    //document.write(`Precio: ${coche.precio}€ `);
    console.log(`Año de matriculación: ${coche.año} `);
    //document.write(`Año de matriculación: ${coche.año} `);
    console.log(`URL de la foto: ${coche.url} `);
    //document.write(`URL de la foto: ${coche.url}<br>`);
    console.log("\n");
  });

  //Ejercicio4
  function pintaCoches(coches) {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
  
    // Crear encabezados de tabla
    const headers = ['Marca', 'Modelo', 'Precio (€)', 'Año de matriculación', 'Foto'];
    headers.forEach(headerText => {
      const th = document.createElement('th');
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
  
    table.appendChild(headerRow);
  
    coches.forEach((coche, index) => {
      const row = document.createElement('tr');
      const rowData = [coche.marca, coche.modelo, coche.precio, coche.año, `<img src="${coche.url}" alt="${coche.modelo}" width="100">`];
  
      rowData.forEach(text => {
        const cell = document.createElement('td');
        cell.innerHTML = text;
        row.appendChild(cell);
      });
  
      table.appendChild(row);
    });
  
    document.body.appendChild(table);
  }
  
  // Llama a la función pintaCoches con la lista de coches
  pintaCoches(listaCoches);
  
  