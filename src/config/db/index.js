const mongoose = require("mongoose");
const link_cn_mgbd = process.env.LINK_CN_MGDB;
async function connectDB() {
    try {
        await mongoose.connect(link_cn_mgbd);
        console.log('✅ Kết nối MongoDB thành công');
    } catch (error) {
        console.log('❌ Lỗi kết nối MongoDB:', error.message);
    }
}

module.exports = { connectDB };