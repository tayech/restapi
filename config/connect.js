const mongoose = require("mongoose");
const config = require("config");
const conect=()=>{
    mongoose
    .connect(config.get("MONGI_URI"),
    {useUnifiedTopology: true ,
     useNewUrlParser: true})
     .then(console.log('mongosse is conected'))
     .catch((err)=>console.log(err))
}
module.exports=connect