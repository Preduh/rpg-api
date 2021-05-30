const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://rpg:picachu123@cluster0.hksoi.mongodb.net/decadencia?retryWrites=true&w=majority', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

mongoose.Promise = global.Promise

module.exports = mongoose