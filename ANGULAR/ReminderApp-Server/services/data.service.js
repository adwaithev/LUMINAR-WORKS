const db = require('./db')

const register = (uname, acno, pswd) => {
    return db.User.findOne({
        acno
    }).then(user => {

       // console.log(user)

        if (user) {
            return {
                status: false,
                statusCode: 400,
                message: "user already exists",
                
            }
        }
        else {
            const newUser = new db.User({
                uname: uname,
                acno: acno,
                password: pswd,
                event: []
            })
            newUser.save()
            return {
                status: true,
                statusCode: 200,
                message: "registration successful"
            }
        }
    })


}

const login = (req,acno, pswd) => {
    return db.User.findOne({
        acno,
        password: pswd
    }).then(user => {
       // console.log(user)
        if (user) {
            req.session.currentacc=user.acno
            return {
                status: true,
                statusCode: 200,
                currentAcc:user.acno,
                currentUser:user.uname,
                message: "login successful"
            }
        }
        return {
            status: false,
            statusCode: 400,
            message: "invalid user"
        }
    })
}

const add = (acno, date, evnt) => {
   
    return db.User.findOne({
        acno
    }).then(user => {
        if (!user) {
            return {
                status: false,
                statusCode: 400,
                message: "invalid user"
            }
        }
        user.event.push({
            date: date,
            event: evnt
        })
        user.save()
        return {
            status: true,
            statusCode: 200,
            message: "new event Created"
        }
    })
}

const getReminders=(acno)=>{
    return db.User.findOne({
        acno
    }).then(user=>{
        if(user){
            return{
                status:true,
                statusCode:200,
               event:user.event
            }
        }
        else{
            return{
                status:false,
                statusCode:400,
                message:"invalid operation"
            }
        }
    })
   
}

const deleteAcc=(acno)=>{
    return db.User.deleteOne({
        acno:acno
    }).then(user=>{
        if(!user){
            return{
                statusCode:422,
                status:false,
                message:"invalid operation"
            }
        }
        return{
            status:true,
            statusCode:200,
            message:"account number "+acno+"successfuly deleted"
        }
    })
}
  

module.exports = {
    register,
    login,
    add,
    getReminders,
    deleteAcc
}