const mongoose = require('mongoose');
const dbconnect = () => {
    mongoose.set('strictQuery',true);
    return mongoose.connect("mongodb://localhost:27017/users_prueba")
    .then(() =>{
        console.log("Conexion exitosa");
    })
    .catch((error)=>{
        console.error("Error de conexion:",error);
    });
};

module.exports = dbconnect;