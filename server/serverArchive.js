const express= require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

let users=[];

const messages={
    general: []
};

io.no('connection',socket => {
    socket.on("join server", (username) =>{
        const user = {
            username,
            id: socket.id,
        };
        userspush(user);
        io.emit("new user", users); 
    });

    socket.on("join room", (roomName,cb) =>{
        socket.join(roomName);
        cb(messages[roomName]);
    }); 

    socket.on("send message",({content,to,sender,chatname,isChannel}) => {
        if(isChannel) {
            const payload = 
        }
    })

});

server.listen(1337,() => console.log('Server Running Port 1337'));