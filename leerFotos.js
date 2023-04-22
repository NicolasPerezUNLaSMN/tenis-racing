//// nuestra      APIKey
var apiKey = 'AIzaSyAxqYdY98X1rJ1fHo-hTyTlmM3XQahrmpM'; 


// id de la hoja de calculo
var idSheets =  '1wtWsoWr1QJE3X4fqbGIIq7J2o8zYbYE1-O3z-np8CyE';

//Rangos de los ranks
var rangosRankA = 'B3:D5';



const vueFotos = new Vue({
 el:'#appFotos',
 data:{
  listaDatos : []
 },
 created(){
  this.getLista()
 },
 methods:{
  recargar(){
   console.log("recargando");
   this.getLista()
  },
getLista(){

 // nombre hoja
 hoja = 'Respuestas de formulario 1';


 // rango de la hoja de calculo que queremos leer
 rangos = rangosRankA;

// fetch es un método nativo para hacer peticiones http
// en el navegador 
 fetch("https://content-sheets.googleapis.com/v4/spreadsheets/" +   idSheets + "/values/" +hoja +"!" +rangos +"?access_token="+ apiKey +"&key="+  apiKey)
.then((lista)=>{
  return lista.json()
}).then((valores)=>{
  this.listaDatos = valores.values
}).catch(err=>{
  console.log(err);
})
} // fin funcion getLista()
} // fin methods
}) // fin instancia







