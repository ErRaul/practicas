const personas1 = [
    { nombre: "Juan", apellidos: "Pérez", población: "Madrid", edad: 25, estudios: "ESO", carnetDeConducir: true },
    { nombre: "María", apellidos: "García", población: "Barcelona", edad: 30, estudios: "Universidad", carnetDeConducir: false },
    { nombre: "Pedro", apellidos: "López", población: "Valencia", edad: 40, estudios: "FP", carnetDeConducir: true },
  ];
  
  const personasTabla = personas.sort((a, b) => a.nombre.localeCompare(b.nombre));
  
  for (const persona of personasTabla) {
    const fila = document.createElement("tr");
  
    fila.innerHTML = [
      persona.nombre,
      persona.apellidos,
      persona.población,
      persona.edad,
      persona.estudios,
    ].join(" | ");
  
    document.querySelector("tbody").appendChild(fila);
  }
  
