# Restaurant Listener

An application for listening to events from a restaurant system via a WebSocket connection.

## Description

This project contains a client for listening to events from a restaurant system. The application connects to a WebSocket server and listens for various events such as new orders, ready orders, payments, and more.

## Features

- **Connect to WebSocket server** - Automatic connection and reconnection
- **Listen to events**:
- `addedProduct` - New addition to an order
- `notify` - Order ready for table
- `paidOrder` - Paid order
- `printBill` - Print bill
- **Join room** - Automatic joining to a specific restaurant room
