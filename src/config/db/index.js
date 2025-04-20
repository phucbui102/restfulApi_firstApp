const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://phucbui:0TLY2m8xHlQpUbw1@cluster0.pr6pa3d.mongodb.net/webbio');
        console.log('✅ Kết nối MongoDB thành công');
    } catch (error) {
        console.log('❌ Lỗi kết nối MongoDB:', error.message);
    }
}

module.exports = { connectDB };