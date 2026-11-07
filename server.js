import {Server} from "socket.io";
import express from 'express';
import http from 'http'

const app= express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'))
const historique = []
io.on('connection', (socket)=>{
    socket.emit("historique",historique)
    socket.on('message',(donnees)=>{
        historique.push(donnees)
        io.emit('message',donnees)
    });
});
server.listen(3000,()=>{
    console.log("Messagerie ouvert sur http://localhost:3000")
})