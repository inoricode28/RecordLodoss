const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Interfaz para leer la entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para preguntar el nombre de la carpeta principal
function preguntarNombreCarpetaPrincipal() {
  return new Promise((resolve) => {
    rl.question('Nombre del Backed: ', (respuesta) => {
      resolve(respuesta.trim());
    });
  });
}

// Función para crear archivos y carpetas dentro de la carpeta principal
async function crearEstructura(nombreCarpetaPrincipal) {
  const rutaPrincipal = `./${nombreCarpetaPrincipal}/src`;

  // Carpetas y archivos a crear
  const estructura = {
    controller: ['usuario.controller.js'],
    database: ['conexion.js', 'db.js', 'dbKill.js'],
    model: ['usuarioModel.js'],
    routers: ['usuario.routers.js'],
  };

  // Crear la carpeta principal
  if (!fs.existsSync(rutaPrincipal)) {
    fs.mkdirSync(rutaPrincipal, { recursive: true });
    console.log(`Carpeta principal "${nombreCarpetaPrincipal}" creada.`);
  } else {
    console.log(`La carpeta principal "${nombreCarpetaPrincipal}" ya existe.`);
  }

  // Crear carpetas y archivos dentro de la carpeta principal
  Object.entries(estructura).forEach(([carpeta, archivos]) => {
    const rutaCarpeta = path.join(rutaPrincipal, carpeta);
    if (!fs.existsSync(rutaCarpeta)) {
      fs.mkdirSync(rutaCarpeta);
      console.log(`Carpeta "${carpeta}" creada.`);
    } else {
      console.log(`La carpeta "${carpeta}" ya existe.`);
    }

    archivos.forEach((archivo) => {
      const rutaArchivo = path.join(rutaCarpeta, archivo);
      if (!fs.existsSync(rutaArchivo)) {
        fs.writeFileSync(rutaArchivo, '');
        console.log(`Archivo "${archivo}" creado.`);
      } else {
        console.log(`El archivo "${archivo}" ya existe.`);
      }
    });
  });
}

// Función para crear archivos fuera de la carpeta principal
function crearArchivosFueraCarpetaPrincipal() {
  // Archivos fuera de la carpeta principal
  const archivosFueraCarpetaPrincipal = [
    'app.js',
    'config.js',
    'index.js',
    '.babelrc',
    '.env',
    'iniciar.bat',
  ];

  archivosFueraCarpetaPrincipal.forEach((archivo) => {
    const rutaArchivo = `./${archivo}`;
    if (!fs.existsSync(rutaArchivo)) {
      fs.writeFileSync(rutaArchivo, '');
      console.log(`Archivo "${archivo}" creado fuera de la carpeta principal.`);
    } else {
      console.log(`El archivo "${archivo}" ya existe fuera de la carpeta principal.`);
    }
  });
}

// Función principal para iniciar el proceso
async function iniciar() {
  const nombreCarpetaPrincipal = await preguntarNombreCarpetaPrincipal();
  await crearEstructura(nombreCarpetaPrincipal);
  crearArchivosFueraCarpetaPrincipal();
  rl.close();
}

// Llamada a la función principal
iniciar();
