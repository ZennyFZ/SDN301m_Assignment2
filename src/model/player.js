const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playerSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    image: {
        type: String,
        require: true
    },
    club: {
        type: String,
        require: true
    },
    position: {
        type: String,
        require: true
    },
    goals: {
        type: Number,
        require: true,
        default: 0
    },
    isCaptain: {
        type: Boolean,
        require: true,
        default: false
    }
}, {timestamps: true})

const Players = mongoose.model("Players", playerSchema)
module.exports = Players