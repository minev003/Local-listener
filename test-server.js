import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:3001";
const RESTAURANT_ID = "1";

const socket = io(SOCKET_URL, { transports: ['websocket'] });

socket.on('connect', () => {
    console.log("Свързан към локалния WebSocket:", socket.id);

    const order = {
        table: 1,
        waiter: "Тест",
        items: [
            { name: "Пица Маргарита", qty: 2, price: 12.5 },
            { name: "Кола", qty: 3, price: 2.5 }
        ],
        total: 35.5
    };

    socket.emit("addedProduct", { roomId: RESTAURANT_ID, order });
    socket.emit("notify", { roomId: RESTAURANT_ID, order });
});
