const io = require('socket.io')(5000,{
    cors: {
        origin: ['http://localhost:3000']
    }
})


function getTime(){
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;

    console.log(formattedTime);

    return formattedTime;
}

io.on('connection',socket =>{
    console.log(socket.id);
    
    socket.on("roll-message", (name, roll, message) =>{
        console.log(message,"\n",name,", ",roll);
        io.emit('new-message',name,roll,getTime());
    } )

 });