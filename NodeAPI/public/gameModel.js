const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Schema2 = mongoose.Schema


const GameSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true
  },
  internetMart: {
    type: String,
    default: false
  }
})

const SysReqSchema = new Schema2({
  name: {
    type: String,
    required: true
  },
  OS: {
    type: String,
    required: true
  },
  capacity: {
    type: String,
    default: false
  },
  cpu: {
    type: String,
    default: false
  },
  gpu: {
    type: String,
    default: false
  },
  ram: {
    type: String,
    default: false
  }
})


mongoose.model('g-catalog', GameSchema)
mongoose.model('SysReq', SysReqSchema)