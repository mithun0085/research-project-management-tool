require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const path = require('path')


const bodyParser = require("body-parser");



const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())



// Routes
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/upload'))



const topicsRoute = require('./routes/Topics');
app.use(topicsRoute);

const topicdocsRoute = require('./routes/TopicDocs');
app.use(topicdocsRoute);

const dmarksRoute = require('./routes/dmarks');
app.use(dmarksRoute);


const dmarksRoute2 = require('./routes/dmarks2');
app.use(dmarksRoute2);

app.use("/submission", require("./routes/submission"));
app.use("/topicrej", require("./routes/topicrej"));


const emarksRoute = require('./routes/emarks');
app.use(emarksRoute);


//video 
app.use("/videoc", require("./routes/videoc"));


const studentRoute=require('./routes/students');
const { connect } = require("http2");
app.use(studentRoute);


//uploadDoc 
app.use("/uploadDoc", require("./routes/uploadDoc"));


const requestRoute=require('./routes/requests');
const { connectr } = require("http2");
app.use(requestRoute);

// Connect to mongodb
const URI = process.env.ATLAS_URI
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to mongodb")
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}



const PORT = process.env.PORT;
const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    // credentials: true,
  },
});

io.on("connection", (socket) => {
	socket.emit("me", socket.id)

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	})

	socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})
})


io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});