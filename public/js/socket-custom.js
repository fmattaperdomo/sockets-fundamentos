var socket = io();
//Escuchasr sucesos
socket.on("connect", function() {
    console.log("Conectado al servidor");
});

socket.on("disconnect", function() {
    console.log("Perdimos conexión con el servidor");
});

//enviar información al servidor
socket.emit(
    "enviarMensaje", {
        usuario: "Francisco",
        mensaje: "Hola Mundo",
    },
    function(resp) {
        console.log("Respuesta server: ", resp);
    }
);

//Escuchar informacion
socket.on("enviarMensaje", function(mensaje) {
    console.log("Servidor: ", mensaje);
});