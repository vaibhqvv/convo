# Convo - Real-Time Chat Application

Convo is a real-time chat application built using the MERN stack with Socket.io. It provides real-time messaging, authentication, and user status tracking. The project includes complete authentication, authorization, and a seamless messaging experience.

## Features

- Built with the MERN stack
- Authentication and authorization using JWT
- Real-time messaging with Socket.io
- Online user status tracking
- Global state management with Zustand
- Responsive UI with TailwindCSS and Daisy UI

## Tech Stack

- **Frontend:** React.js, TailwindCSS, Daisy UI, Zustand
- **Backend:** Node.js, Express.js, MongoDB, Socket.io
- **Authentication:** JWT 
- **Real-time Communication:** Socket.io
- **Database:** MongoDB 

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (latest LTS version)
- MongoDB (local or cloud instance)

### Clone the Repository
```sh
git clone https://github.com/yourusername/convo.git
cd convo
```

### Backend Setup
```sh
cd backend
npm install
```

Create a `.env` file in the `backend` directory and configure the following variables:
```
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

Run the backend server:
```sh
npm start
```

### Frontend Setup
```sh
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` directory:
```
VITE_API_URL=http://localhost:5001
```

Run the frontend application:
```sh
npm run dev
```

## Usage

1. Sign up or log in with your credentials.
2. Start a conversation with other registered users.
3. Messages will be delivered in real-time using Socket.io.
4. Logout when you are done.

## Contributing

Contributions are welcome! Follow these steps to contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## License

This project is open-source and available under the MIT License.
