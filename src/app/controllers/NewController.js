const mongoose = require('mongoose');
const Test = require('../models/test');

class NewsController {
    // [GET] /news
    index(req, res, next) {
        console.log('Đang kết nối DB:', mongoose.connection.name);

        Test.find({})
            .then(data => {
                // console.log('hehehe')
                // data = data.map(data => data.toObject())
                // res.render('news',{data}); // Trả về JSON nếu thành công
                res.json(data)
            })
            .catch(error => {
                next(error); // Gửi lỗi tới middleware xử lý lỗi
            });
    }
}

module.exports = new NewsController();
