const personas = [
    new Persona("Juan", "Pérez", "Madrid", 25, "ESO", true),
    new Persona("María", "García", "Barcelona", 30, "Universidad", false),
    new Persona("Pedro", "López", "Valencia", 40, "FP", true),
  ];
  
  const personasOrdenadas = personas.sort((a, b) => a.nombre.localeCompare(b.nombre));
    document.write(JSON.stringify(personasOrdenadas));
