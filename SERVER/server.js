require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const candidateRouter = require("./routes/candidaterouter.js");
const router = require("./routes/userrouter.js");
app.use(cors());
app.use(bodyParser.json());

main().catch(err => console.log(err));
  
async function main() {
  await mongoose.connect(process.env.URL);
  console.log('db connected')
}

app.use(candidateRouter)
app.use(router)


app.listen(5000,()=>{
    console.log('server started')
})

