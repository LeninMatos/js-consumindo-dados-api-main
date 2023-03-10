
/* Event Looo + Call Stack*/ 
/* console.log("Mandando oi para o amigo");

function mandarMensagem() {
    console.log("Tudo bem?");
    console.log("Vou te mandar um solicitação");
    console.log("solicitação recebida")
}

mandarMensagem();

console.log("Tchau Tchau!"); 

*/ 

/* Task Queue*/

console.log("Mandando oi para o amigo");

function mandarMensagem() {
    console.log("Tudo bem?");
    console.log("Vou te mandar um solicitação");
    console.log("solicitação recebida")
}

setTimeout(mandarMensagem, 5000);

console.log("Tchau Tchau!"); 
