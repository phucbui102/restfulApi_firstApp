const express = require('express');
const cors = require('cors');
require('dotenv').config();
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const server = require('http').createServer(app); // ✅ Đổi tên thành server
const { Server } = require('socket.io');
const port = process.env.PORT || 3000;

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173', 'https://01-react-taupe.vercel.app'],
    methods: ['GET', 'POST'],
    credentials: true
  }
});

const corsOptions = {
  origin: ['http://localhost:5173', 'https://01-react-taupe.vercel.app'],
  methods: ['GET', 'POST'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(morgan('combined'));
const db = require('./config/db/index');
db.connectDB();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'view'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Routes
const newsRouter = require('./routes/news');
const peopleRouter = require('./routes/add_people');
app.use('/', newsRouter);
app.use('/v1', peopleRouter);

// Socket.IO logic
io.on('connection', (socket) => {
  console.log('Client connected: ' + socket.id);

  socket.on('chat message', (msg) => {
    console.log('Received message:', msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected: ' + socket.id);
  });
});

// Start server
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
