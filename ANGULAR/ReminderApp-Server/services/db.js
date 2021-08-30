const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/ReminderApp', {
    useNewUrlParser: true,
   
}
)

const User = mongoose.model('User', {
    uname: String,
    acno: Number,
    password: String,
    event: []

})

module.exports={
    User
}

