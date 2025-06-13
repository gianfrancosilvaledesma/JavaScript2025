let nombre = "Gian"

console.log(nombre)

//let Edad1 = parseInt(prompt("Ingrese su edad"))

function PreguntarEdad(){
     let Edad1 =prompt("Ingrese su edad") 
while(Edad1 === null || Edad1 === ""|| isNaN(Edad1) ){
    Edad1 = prompt("No dejes Campo vacio, responde bien")
}
    const EdadProcesada = parseInt(Edad1);
    return EdadProcesada;
    }
    const EdadProcesada = PreguntarEdad()
//PreguntarEdad()

function ResponderEdad (){
if(EdadProcesada < 18){
    alert("sos menor de edad")
}
else if(EdadProcesada >= 18){
    alert ("sos grande che")
}
}

ResponderEdad()
 //PreguntarEdad();
//else{
    //alert ("pusiste cualquier cosa")
//}


//function saludar(nombre) {
   // console.log (`Hola ${nombre}`);
//}

//saludar("jorge");
//saludar('Enrique')

//const multipliacion = function(a,b){
    //return a * b ;
//};
//console.log(multipliacion(5, 3));

//type result = "pass" | "fail"
 
//function verify(result: Result) {
  //if (result === "pass") {
    //console.log("Passed")
  //} else {
    //console.log("Failed")
  //}

  const bebidas = [cerveza,version,whisky]