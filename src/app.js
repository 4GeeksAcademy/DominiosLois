/* Importación de bibliotecas y recursos: */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Definimos los arrays de pronombres, adjetivos y sustantivos para generar nombres de dominio.
let pronombres = ["the", "our"];
let adjetivos = ["great", "big"];
let sustantivos = ["jogger", "racoon"];

window.onload = function() {
  //donde se realizará la generación de nombres de dominio.
  // Escribimos un mensaje en la consola
  console.log("Hola Hola desde la consola!");

  // Definimos las extensiones de dominio y se añadirán al final de cada nombre de dominio.
  let extensiones = [".net", ".us", ".io", ".es"];

  /* Se utilizan BUCLES ANIDADOS para combinar cada palabra de las listas de pronombres, adjetivos y sustantivos con cada extensión de dominio. Esto crea todas las combinaciones posibles de nombres de dominio. */
  // Iteramos (recorremos) sobre cada extensión de dominio
  for (let valor of extensiones) {
    //la variable valor tomará el valor de cada elemento del array extensiones en cada iteración del bucle

    for (let i = 0; i < pronombres.length; i++) {
      // Iteramos sobre cada adjetivo
      for (let j = 0; j < adjetivos.length; j++) {
        // Iteramos sobre cada sustantivo
        for (let k = 0; k < sustantivos.length; k++) {
          // Formamos el nombre de dominio combinando pronombre, adjetivo, sustantivo y extensión
          let dominio = `${pronombres[i]}${adjetivos[j]}${sustantivos[k]}${valor}`;

          // Imprimimos el nombre de dominio en la consola
          console.log(dominio);
        }
      }
    }
  }
};
