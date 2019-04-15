const mongoose = require('mongoose')
const Schema  = mongoose.Schema

const GameSchema = new Schema({

name : {
 type: String,
 required: true},

 genre:{
    type: String,
    required: true
 },
 price:{
     type: Int16Array,
     required: true
 }
})

mongoose.model('games',GameSchema )