const mongoose = require("mongoose");

const uri = "mongodb+srv://hakanozer1995:mongodb11@cluster0.haly6qw.mongodb.net/?retryWrites=true&w=majority";

const connection = () => {
    mongoose.connect(uri,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(()=> console.log("Database bağlantısı başarılı"))
    .catch((err)=> console.log("Bağlantı hatası! Hata: " + err.message))
}

module.exports = connection; 