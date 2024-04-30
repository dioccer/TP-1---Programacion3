const mongoose = require('mongoose')
const userModel = new mongoose.Schema(
    {
        prenda: {
            type: String
        },
        marca: {
            type: String
        },
        stock: {
            type: String
        },
        precio: {
            type: String
        },
        
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ModelUser = mongoose.model("users", userModel);
module.exports = ModelUser;