const express = require('express')
const conect=require('./config/conect')
const app = express();

// 4- parse data
app.use(express.json());

// 3- routes
app.use("/api/contacts", require("./routes/contact"));


connect();

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})