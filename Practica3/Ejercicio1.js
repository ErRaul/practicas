//Ejercicio1
class Persona {
  constructor(nombre, apellidos, población, edad, estudios, carnetDeConducir) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._población = población;
    this._edad = edad;
    this._estudios = estudios;
    this._carnetDeConducir = carnetDeConducir;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    if (typeof nombre !== "string") {
      alert("El nombre debe ser una cadena de caracteres");
    } else {
      this._nombre = nombre;
    }
  }

  get apellidos() {
    return this._apellidos;
  }

  set apellidos(apellidos) {
    if (typeof apellidos !== "string") {
      alert("Los apellidos deben ser una cadena de caracteres");
    } else {
      this._apellidos = apellidos;
    }
  }

  get población() {
    return this._población;
  }

  set población(población) {
    if (typeof población !== "string") {
      alert("La población debe ser una cadena de caracteres");
    } else {
      this._población = población;
    }
  }

  get edad() {
    return this._edad;
  }

  set edad(edad) {
    if (typeof edad !== "number" || edad < 0 || edad > 150) {
      alert("La edad debe ser un número entero entre 0 y 150");
    } else {
      this._edad = edad;
    }
  }

  get estudios() {
    return this._estudios;
  }

  set estudios(estudios) {
    if (typeof estudios !== "string") {
      alert("Los estudios deben ser una cadena de caracteres");
    } else {
      this._estudios = estudios;
    }
  }

  get carnetDeConducir() {
    return this._carnetDeConducir;
  }

  set carnetDeConducir(carnetDeConducir) {
    if (typeof carnetDeConducir !== "boolean") {
      alert("El carnet de conducir debe ser un valor booleano");
    } else {
      this._carnetDeConducir = carnetDeConducir;
    }
  }
}

const persona = new Persona("Juan", "López", "Madrid", 30, "Licenciatura", true);


console.log(persona.nombre); // "Juan"
console.log(persona.apellidos); // "López"
console.log(persona.población); // "Madrid"
console.log(persona.edad); // 30
console.log(persona.estudios); // "Licenciatura"
console.log(persona.carnetDeConducir); // true

// Intento de establecer un valor no válido para el atributo "edad"
persona.edad = "Hola";




  