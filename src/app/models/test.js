const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Đặt tên Schema có ý nghĩa hơn (tên biến nên viết hoa)
const test = new Schema({
  name: String,
  age: Number
});

// Xuất model ra ngoài (tên model viết hoa, số ít)
module.exports = mongoose.model('test', test,'test');
