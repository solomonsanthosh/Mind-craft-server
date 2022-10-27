const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser');
const TestRoute = require('./Routes/test');
const musicRoute = require('./Routes/music');
const userRoute = require('./Routes/user')
const postRoute  = require('./Routes/post')
const activityRoute = require('./Routes/activity')
const coachRoute = require('./Routes/coach')
const { Router } = require('express');
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser())

mongoose
	.connect(process.env.ATLAS_URI, {
		useNewUrlParser: true,

  useUnifiedTopology: true 
	})
	.then(console.log('db connected'))
	.catch((err) => console.log('error', err));


app.use('/',TestRoute)
app.use('/',musicRoute)
app.use('/',userRoute)
app.use('/',postRoute)
app.use('/',activityRoute)
app.use('/',coachRoute)



app.listen(process.env.PORT || 8000,()=>{
    console.log('====================================');
    console.log('connection started');
    console.log('====================================');
})