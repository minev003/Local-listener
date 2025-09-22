import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:3001";
const ROOM = 1;

const socket = io(SOCKET_URL, {
    transports: ['websocket', 'polling'],
    reconnection: true
});

socket.on('connect', () => {
    console.log("Свързан към локалния WebSocket:", socket.id);

    socket.emit('joinRestaurant', ROOM);
    console.log(`Listener присъедини се към room ${ROOM}`);
});

socket.on('addedProduct', (order) => {
    console.log("Получена нова добавка към поръчка:");
    console.log(JSON.stringify(order, null, 2));
});

socket.on('notify', (order) => {
    console.log("Поръчка готова за маса:");
    console.log(JSON.stringify(order, null, 2));
});

socket.on('disconnect', (reason) => {
    console.log("WebSocket дисконект:", reason);
});

socket.on('connect_error', (err) => {
    console.error("Грешка при свързване:", err.message);
});

socket.on('paidOrder', (order) => {
    console.log("Получена платена поръчка:");
    console.log(JSON.stringify(order, null, 2));
});

socket.on('printBill', (order) => {
    console.log("Received printBill on listener for restaurant 1:");
    console.log(JSON.stringify(order, null, 2));
});
