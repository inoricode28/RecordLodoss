const fs = require('fs');

// Ruta principal
const rutaPrincipal = './src';

// Carpetas a crear
const carpetas = ['controller', 'database', 'model', 'routers'];

// Función para crear las carpetas
function crearCarpetas(ruta, carpetas) {
  // Verificar si la carpeta principal existe
  if (!fs.existsSync(ruta)) {
    fs.mkdirSync(ruta);
    console.log(`Carpeta principal "${ruta}" creada.`);
  } else {
    console.log(`La carpeta principal "${ruta}" ya existe.`);
  }

  // Crear carpetas dentro de la carpeta principal
  carpetas.forEach((carpeta) => {
    const rutaCarpeta = `${ruta}/${carpeta}`;
    if (!fs.existsSync(rutaCarpeta)) {
      fs.mkdirSync(rutaCarpeta);
      console.log(`Carpeta "${carpeta}" creada.`);
    } else {
      console.log(`La carpeta "${carpeta}" ya existe.`);
    }
  });
}

// Llamada a la función para crear las carpetas
crearCarpetas(rutaPrincipal, carpetas);