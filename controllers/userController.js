const { comparePassword,  hashPassword  } = require('../helpers/bcrypt')
const { loginToken } = require('../helpers/jsonwebtoken')
const firebase = require('../firebaseConfig')
const userReference = require('../config/firebaseAdmin')

class userController {
    static register(request, response, next) {
        let hashPass = hashPassword(request.body.password)

        const payload = {
            email: request.body.email,
            password: hashPass,
            realName: request.body.realName,
            gender: request.body.gender,
            age: request.body.age,
            phoneNumber: request.body.phoneNumber
        }

        firebase.database().ref('/users').set({
            email: payload.email,
            password: payload.password,
            realName: payload.realName,
            gender: payload.gender,
            age: payload.age,
            phoneNumber: payload.phoneNumber
        })

        response.status(201).json({
            message: "Register Successfull"
        })
    }

    static async login(request, response, next) {
        const payload = {
            email: request.body.email,
            password: request.body.password
        }

        firebase.database().ref('/users'+email).on('value', function(userData){

        })

    }

    static async showUserData(request, response, next) {

    }
}

module.exports = userController